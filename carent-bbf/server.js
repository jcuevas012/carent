const express = require('express')
const bodyParser = require('body-parser')
const { serverPort } = require('../config')
const chalk = require('chalk')
const { Cars } = require('./routes')

// setup app
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// set up routes 
app.use('/cars', Cars)

app.listen(serverPort, (req, res) => {
    console.log(`${chalk.green('[carent server]')} started in port ${serverPort}`)
})