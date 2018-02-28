const host = "http://localhost"

module.exports = {
	serverPort: 8080,
	db: {
		database: 'carent',
		username: 'root',
		port: 5433,
		password: 1234,
		dialect: 'postgres',
		host: 'localhost',
		pool: {
			max: 10,
			min: 0,
			idle: 10000
		}
	},
	dbTest: {
		database: 'asmunddb',
		username: 'root',
		password: 'mypass',
		host: 'localhost',
		dialect: 'sqlite',
		pool: {
		  max: 10,
		  min: 0,
		  idle: 10000
		},
		setup: true
	  },
	enpoints: {
		car: `${host}:5000`
	}
}
