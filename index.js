const Hapi = require('@hapi/hapi')
const config = require('./config')

const start = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
    tls: config.tls
  })

  await server.register([
    require('@hapi/inert'),
    require('@hapi/basic'),
    require('hapi-require-https'),
    {
      plugin: require('./api'),
      routes: {
        prefix: '/api/'
      },
      options: {
        cors: true
      }
    }
  ])

  await server.start()
  console.log('Server running on %s', server.info.uri)

  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'build/'
      }
    }
  })

  server.route({
    method: 'GET',
    path: 'pictures/{file*}',
    handler: {
      directory: {
        path: 'pictures/'
      }
    }
  })
}

start()
