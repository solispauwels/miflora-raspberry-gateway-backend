const fs = require('fs')
const Joi = require('@hapi/joi')

const config = require('./config')
const bonsai = require('./bonsai')

exports.plugin = {
  name: 'api',
  version: '1.0.0',
  register: (server, options) => {
    server.auth.strategy('simple', 'basic', {
      validate: async (request, username, password) => {
        const isValid = username === config.user && password === config.password
        const credentials = isValid && { id: 1, name: 'bonsai' }

        return { isValid, credentials }
      }
    })

    server.route({
      method: 'PUT',
      path: 'insert',
      options: {
        auth: 'simple',
        validate: {
          payload: Joi.object({
            light: Joi.number().integer().required(),
            temperature: Joi.number().integer().required(),
            moisture: Joi.number().integer().required(),
            conductivity: Joi.number().integer().required(),
            battery: Joi.number().integer().required(),
            date: Joi.number().integer().required()
          })
        }
      },
      handler: ({ payload }) => bonsai.insert(payload)
    })

    server.route({
      method: 'POST',
      path: 'upload',
      options: {
        auth: 'simple',
        payload: {
          output: 'stream',
          allow: 'multipart/form-data',
          multipart: true,
          parse: true,
          maxBytes: 100485760
        }
      },
      handler: ({ payload: { picture, name } }, reply) => new Promise((resolve, reject) => {
        const file = fs.createWriteStream(`./pictures/${name}.jpg`)

        file.on('error', error => reject(error))

        picture.pipe(file)

        picture.on('end', error => error ? reject(error) : resolve(true))
      })
    })

    server.route({
      method: 'GET',
      path: 'bonsai',
      handler: () => bonsai.select()
    })
  }
}
