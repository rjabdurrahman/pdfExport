const Client = require('../../Models/Client');
let basicInfo = require('../../assets/basicInfo');

module.exports = (req, res) => {
    let idf = req.body;
    basicInfo.signaletique.contribuable.nom = idf.nom;
    basicInfo.signaletique.contribuable.prenom = idf.prenom;
    basicInfo.signaletique.contribuable.courriel = idf.courriel;
    basicInfo.signaletique.contribuable.telephone = idf.telephone;
    var clients = new Client({ ['y' + req.body.year]: basicInfo });
    clients.save()
    .then(() => {
        res.json({ success: 'Client Added Successfully' });
    })
    .catch(err => {
        res.json({err: err.message});
    })
}