'use strict'

const path = require('path')
const sequelizeImport = require('sequelize-import')

module.exports = function getModels (sequelize, options) {
  const url = options.modelsUrl || __dirname
  const models = sequelizeImport(url, sequelize, { exclude: ['index.js'] })

  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  })

  return models
}