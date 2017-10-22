const carModel = require('./car')

module.exports = (config) => {
	const Car  = carModel(config)

	return {
		Car
	}
}
