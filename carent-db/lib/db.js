const getModels = require('./models/')
const setupSequelize = require('./setupSequelize')
const Promise = require('bluebird')

class Db {

	constructor(config){
		this.config = config
		this.sequelize = setupSequelize(config)
		this.models = getModels(config)
	}


	async setup (callback) {
		try {
			await this.sequelize.sync({ force: true })
			return Promise.resolve('Setup Done!, Check your database').asCallback(callback)
		} catch (e) {
			return Promise.reject(e).asCallback(callback)
		}
	}

	async drop (callback) {
		try {
			await this.sequelize.drop()
			return Promise.resolve('Drop, Done!').asCallback(callback)
		} catch (e) {
			return Promise.reject(e).asCallback(callback)
		}
	}
}

module.exports = Db
