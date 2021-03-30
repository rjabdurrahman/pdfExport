const Client = require('../../Models/Client')
const DeletedClient = require('../../Models/DeletedClient')

module.exports = async (req, res) => {
  let id = req.params.id
  let client = await DeletedClient.findById(id).lean().exec();
  let oldId = client.oldId;
  delete client._id;
  delete client.__v;
  delete client.oldId;
  Client.findByIdAndUpdate(oldId, client, (err, data) => {
    if (err) res.send({ err: err.message })
    else {
      res.send({ success: 'Restored Client Successfully' })
      DeletedClient.findByIdAndDelete(id, (err, result) => { })
    }
  });
}
