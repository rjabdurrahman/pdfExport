const Client = require('../../Models/Client');

module.exports = (req, res) => {
    Client.find({}).select('_id, signaletique.numero_de_dossier signaletique.contribuable').exec((err, result) => {
        if (err) res.send(err)
        else {
            res.send(result);
        }
    });
}