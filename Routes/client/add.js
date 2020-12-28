const Client = require('../../Models/Client');
let client = require('../../assets/client');

module.exports = (req, res) => {
    let idf = req.body;
    client.signaletique.contribuable.nom = idf.nom;
    client.signaletique.contribuable.prenom = idf.prenom;
    client.signaletique.contribuable.courriel = idf.courriel;
    client.signaletique.contribuable.telephone = idf.telephone;
    var clients = new Client(client);
    clients.save()
    .then(() => {
        res.json({ success: 'Client Added Successfully' });
    })
    .catch(err => {
        res.json({err: err.message});
    })
}