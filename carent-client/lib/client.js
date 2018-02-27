const request = require('request-promise-nativee')
const { enpoints } = require('../../config')
const Promise = require('blueprint')

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

}

module.exports = Client