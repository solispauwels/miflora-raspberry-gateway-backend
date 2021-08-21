const Hapi = require('@hapi/hapi')
const config = require('./config')

const api = require('./api')

const start = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
    tls: config.tls,
    routes: { cors: config.cors }
  })

  await server.register([
    require('@hapi/inert'),
    require('@hapi/basic'),
    require('hapi-require-https'),
    {
      plugin: api,
      routes: {
        prefix: '/api'
      }
    }
  ])

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

start()
