const setupDatabase = require('../')

const options = {
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
}

setupDatabase(options).then(async db => {
  const result = await db.services.Car.create({ model: 'Test' })
}).catch(err => {
  console.log(err)
  // do something with error
})