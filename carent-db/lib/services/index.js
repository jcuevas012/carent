const fs = require('fs')
const path = require('path')

module.exports = function getServices (options) {
  const serviceNames = fs.readdirSync(__dirname)
  const services = {}

  serviceNames.forEach(name => {
    name = name.replace('.js', '')
    
    if (name !== 'index') {
      const service = require(path.join(__dirname, name))
      services[name] = service 
    }
  })

  return services
}