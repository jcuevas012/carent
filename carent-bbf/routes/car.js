const { Router } = require('express')
const createClient = require('carent-client')
const { enpoints } = require('../../config')

const app = Router()
const client = createClient(enpoints)

app.get('/', async (req, res) => {
    let result = await client.getCarList()
    res.send(result);
})

app.post('/', async (req, res) => {
    let result = await client.createCar(req.body)
    res.send(result);
})


module.exports = app