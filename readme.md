# eurolines-de-rest

A public HTTP REST API, exposing a clean interface to query the eurolines.de API.

The public endpoint is available at `https://eurolines-de.juliuste.de`.

[![dependency status](https://img.shields.io/david/juliuste/eurolines-de-rest.svg)](https://david-dm.org/juliuste/eurolines-de-rest)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/eurolines-de-rest.svg)](https://david-dm.org/juliuste/eurolines-de-rest#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/eurolines-de-rest.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)


## Installation

```bash
git clone https://github.com/juliuste/eurolines-de-rest.git
cd eurolines-de-rest
npm install --production
```

## Usage

Adapt `config/default.json` to your needs and run `npm start`.


## `GET /stations`

**Not implemented yet.**

## `GET /journeys`

Output from [`require('eurolines-de').journeys`](https://github.com/juliuste/eurolines-de/blob/master/readme.md)

- `origin`: **Required.** Station id.
- `destination`: **Required.** Station id.
- `date`: When? UNIX timestamp or [`moment`-parsable string](http://momentjs.com/docs/#/parsing/). Default: now.

**Other options not implemented yet.**

`Content-Type`: `application/json`

```shell
curl 'https://eurolines-de.juliuste.de/journeys?origin=Berlin&destination=Paris&date=2017-07-13T10:30:00'
```

## Similar Projects

- [eurolines-de](https://github.com/juliuste/eurolines-de/) – eurolines.de API client
- [meinfernbus](https://github.com/juliuste/meinfernbus/) – Meinfernbus/FlixBus API client
- [db-hafas](https://github.com/derhuerst/db-hafas) - Deutsche Bahn (DB) API client
- [db-prices](https://github.com/juliuste/db-prices) - Deutsche Bahn (DB) Sparpreise API client

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/eurolines-de-rest/issues).
