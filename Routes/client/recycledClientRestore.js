const Client = require('../../Models/Client')
const DeletedClient = require('../../Models/DeletedClient')
let { ObjectID } = require('mongodb')

module.exports = (req, res) => {
    let id = req.params.id
    DeletedClient.findById(ObjectID(id), (err, client) => {
        if (err) res.send(err)
        else {
          let refineClient = JSON.parse(JSON.stringify(client));
          delete refineClient._id;
          delete refineClient.__v;
          delete refineClient.createdOn;
          delete refineClient.modifiededOn;
          //console.log(refineClient)
          let recovedClient = new Client(refineClient)
          recovedClient.save((err, data) => {
            if (err) res.send({ err: err.message })
            else 
            {
                res.send({ success: 'Restored Client Successfully' });
                
                DeletedClient.remove({ _id: ObjectID(id) }, (err, result) => {

                });
            }
          })
          
          
        }
      });

    

}