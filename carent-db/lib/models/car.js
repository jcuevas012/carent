const Sequelize = require('sequelize')
const setupSequelize = require('../setupSequelize')

module.exports = (config) => {
	const sequelize = setupSequelize(config)

	const Car = sequelize.define('car', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoincrement: true,
			primaryKey: true
		},
		plate: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		vin: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		door: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		passager: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		gas: {
			type: Sequelize.STRING,
			allowNull: false
		},
		gas: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		transmission: {
			type: Sequelize.STRING,
			allowNull: false
		},
		pricePerDay: {
			type: Sequelize.DOUBLE,
			allowNull: false
		},
		sellPrice: {
			type: Sequelize.DOUBLE,
			allowNull: false
		}
		
	})
	return Car
}
