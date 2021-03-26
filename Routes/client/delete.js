const Client = require('../../Models/Client')
const DeletedClient = require('../../Models/DeletedClient')

module.exports = async (req, res) => {
  let id = req.params.id;
  let year = req.params.year;
  try {
    let client = await Client.findById(id).lean().exec();
    let deletedClient = new DeletedClient({
      oldId: client._id,
      ['y' + year]: client['y' + year]
    });
    deletedClient.save((err, data) => {
      if (err) res.send({ err: err.message })
      else {
        Client.findByIdAndUpdate(id, { $unset: { ['y' + year]: "" } }, (err, result) => {
          if (err) res.send({ err: err.message })
          else res.send(result)
        });
      }
    })

  } catch (err) {
    res.send(err);
  }
}
