const Client = require('../../Models/Client');

module.exports = async ({ params }, res) => {
    try {
        let result = await Client.find(
            {
                year: parseInt(params.year)
            },
            {
                "year": 1,
                "signaletique.numero_de_dossier": 1,
                "signaletique.contribuable.nom": 1,
                "signaletique.contribuable.prenom": 1,
                "signaletique.contribuable.telephone": 1,
                "signaletique.contribuable.courriel": 1
            }
        )
            .exec();
        res.send(result);
    } catch (err) {
        res.send(err);
    }

}