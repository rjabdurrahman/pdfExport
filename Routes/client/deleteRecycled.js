const Client = require('../../Models/Client')
const DeletedClient = require('../../Models/DeletedClient')
let { ObjectID } = require('mongodb')

module.exports = (req, res) => {
  let id = req.params.id
  Client.deleteOne()
}
