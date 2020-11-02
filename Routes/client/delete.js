const Client = require('../../Models/Client')
const DeletedClient = require('../../Models/DeletedClient')
let { ObjectID } = require('mongodb')

module.exports = (req, res) => {
  let id = req.params.id
  Client.findById(ObjectID(id), (err, client) => {
    if (err) res.send(err)
    else {
      let refineClient = JSON.parse(JSON.stringify(client));
      delete refineClient._id;
      delete refineClient.__v;
      delete refineClient.createdOn;
      delete refineClient.modifiededOn;
      //console.log(refineClient)
      let deletedClient = new DeletedClient(refineClient)
      deletedClient.save((err, data) => {
        if (err) res.send({ err: err.message })
        else 
        {
          Client.remove({ _id: ObjectID(id) }, (err, result) => {
            if (err) res.send({ err: err.message })
            else res.send(result)
          });
        }
      })
      
      
    }
  });

      

}
