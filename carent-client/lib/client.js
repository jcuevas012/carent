const request = require('request-promise-native')
const { enpoints } = require('../../config')
const Promise = require('bluebird')

class Client {
    
    constructor (options) {
        this.enpoints = options || enpoints
    }

    getCarList (callback){
        let options = {
            method: 'GET',
            uri: `${this.enpoints.car}/list`,
            json: true
        }
        return Promise.resolve(request(options)).asCallback(callback)
    }

    createCar (car, callback){
        let options = {
            method: 'POST',
            body: car,
            uri: `${this.enpoints.car}/save`,
            json: true
        }
        return Promise.resolve(request(options)).asCallback(callback)
    }


}

module.exports = Client