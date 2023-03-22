const DeletedClient = require('../../Models/DeletedClient')
const { Types } = require('mongoose');

module.exports = (req, res) => {
  let id = req.params.id
  DeletedClient.remove({ _id: Types.ObjectId(id) }, (err, result) => {
    res.send({ success: 'Client Removed forever!' })
  })
}
