const DeletedClient = require('../../Models/DeletedClient')
let { ObjectID } = require('mongodb')

module.exports = (req, res) => {
  let id = req.params.id
  DeletedClient.remove({ _id: ObjectID(id) }, (err, result) => {
    res.send({ success: 'Client Removed forever!' })
  })
}
