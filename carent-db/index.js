'use strict'

const getModels = require('./models')
const getServices = require('./lib/services')
const setupSequelize = require('./lib/sequelize')

module.exports = async function setupDatabase(options) {
  const sequelize = setupSequelize(options)
  const models = getModels(sequelize, options)
  const services = getServices()
  const result = {}

  Object.keys(models).forEach(modelName => {
    const model = models[modelName]
    const service = services.base(model)
    result[modelName] = service
  })

  if (options.setup) {
    await sequelize.sync({ force: true })
  }

  return {
    connection: sequelize,
    services: result,
    models
  }
}