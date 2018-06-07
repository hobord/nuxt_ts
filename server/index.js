const express = require('express')
// const apicache = require('apicache')
const { Nuxt, Builder } = require('nuxt-edge')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// app.use(apicache.middleware("15 minutes"))

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
console.log(process.env.NODE_ENV)


async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
//   if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
//   }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()