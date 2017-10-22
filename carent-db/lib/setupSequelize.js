const Sequelize = require('sequelize')

let sequelize = null

function setupSequlize(config) {
		if (!sequelize) {
				sequelize = new Sequelize(config)
		}
		return sequelize
}

module.exports = setupSequlize
