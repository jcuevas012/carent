const { Router } = require('express')

const app = Router()

app.get('/', (req, res) => {
    console.log('')
    res.send('car page');
})


module.exports = app