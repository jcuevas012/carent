module.exports = {
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
	}
}
