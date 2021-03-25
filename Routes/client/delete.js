const Client = require('../../Models/Client')
const DeletedClient = require('../../Models/DeletedClient')
let { ObjectID } = require('mongodb')

module.exports = async (req, res) => {
  let id = req.params.id;
  let year = req.params.year;
  try {
    let client = await Client.findById(ObjectID(id)).lean().exec();
    delete client._id;
    delete client.__v;
    delete client.createdOn;
    delete client.modifiededOn;
    let deletedClient = new DeletedClient(client)
    deletedClient.save((err, data) => {
      if (err) res.send({ err: err.message })
      else {
        Client.remove({ _id: ObjectID(id) }, (err, result) => {
          if (err) res.send({ err: err.message })
          else res.send(result)
        });
      }
    })

  } catch (err) {
    res.send(err);
  }
}
