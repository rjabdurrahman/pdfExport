const Client = require('../../Models/Client');

module.exports = async ({ params }, res) => {
    let yearsQuery = {};

    if(params.year != 'all') {
        yearsQuery.year = params.year
    }

    try {
        let result = await Client.find(
            yearsQuery,
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