'use strict'

const moment = require('moment-timezone')
const config = require('config')
const journeys = require('eurolines-de').journeys
const parse  = require('cli-native').to

const err400 = (msg) => {
	const e = new Error(msg)
	e.statusCode = 400
	return e
}

module.exports = (req, res, next) => {
	if ('string' !== typeof req.query.origin)
		return next(err400('missing origin parameter.'))
	if ('string' !== typeof req.query.destination)
		return next(err400('missing destination parameter.'))

	if (/^[0-9]+$/.test(req.query.date))
		req.query.date *= 1000 // convert to JS timestamp
	else if (!req.query.date) req.query.date = Date.now()
	const dt = moment(req.query.date).tz(config.timezone)
	const now = moment().tz(config.timezone)

	// let duration = 24 * 60 // minutes
	// if (+moment(dt).startOf('day') === +moment(now).startOf('day'))
	// 	duration = Math.floor((moment(dt).endOf('day') - dt) / 1000 / 60)
	//
	// const opt = {duration}
	// if ('class' in req.query) opt.class = +req.query.class
	// if ('travellers' in req.query) opt.travellers = JSON.parse(parse(req.query.travellers) || "{}")
	// if ('noICETrains' in req.query) opt.noICETrains = parse(req.query.noICETrains)
	// if ('transferTime' in req.query) opt.transferTime = +req.query.transferTime
	// if ('duration' in req.query) opt.duration = +req.query.duration
	// if ('preferFastRoutes' in req.query) opt.preferFastRoutes = parse(req.query.preferFastRoutes)

	journeys(req.query.origin, req.query.destination, new Date(+dt))
	.then((data) => {
		// for(let dat of data){
		// 	console.log(dat)
		// 	for(let trip of dat.journeys){
		// 		trip.start = moment(trip.start).unix()
		// 		trip.end = moment(trip.end).unix()
		// 	}
		// 	delete dat.offer.routes;
		// }
		res.json(data)
	}, next)
	.catch(next)
}
