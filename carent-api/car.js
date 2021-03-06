const {send, json} = require('micro')
const {router, get, post, put } = require('microrouter')
const setupDataBase = require('carent-db')

const { dbTest } = require('../config')

async function getCars(req, res) {
    try {
      const db = await setupDataBase(dbTest)
      const cars = await db.services.Car.findAll()
      send(res, 200, cars)
    } catch (e) {
        if (e.message.match(/not found/)){
            send(res, 404, {err: e.message})
        }
        send(res, 500, {err: e.message} )
    }
}

async function crateCar(req, res) {
    try {
      const db = await setupDataBase(dbTest)
      
    let newCar = {
        brand: 'Toyota',
        model: 'Corolla',
        vin: 'ND24HD832J',
        year: 2013,
        doors: 4
    }
      const car = await db.services.Car.create(newCar)
      send(res, 200, car)
    } catch (e) {
      send(res, 500, {err: e.message} )
    }
}

module.exports = router(
    get('/list', getCars),
    post('/save', crateCar)
  )
