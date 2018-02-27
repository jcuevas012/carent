const {send, json} = require('micro')
const {router, get } = require('microrouter')

const getCars =  (req, res) => {
    send(res, 200, 'Ok')
}

module.exports = router(
    get('/list', getCars)
  )