const Client = require('../../Models/Client')
let { ObjectID } = require('mongodb')

module.exports = (req, res) => {
  let id = req.params.id
  Client.remove({ _id: ObjectID(id) }, (err, result) => {
    if (err) res.send({ err: err.message })
    else res.send(result)
  })
}
