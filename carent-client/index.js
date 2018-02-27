const Client = require('./lib/client')

module.exports = function createClient (options) {
    return new Client(options)
}