const Client = require('../../Models/Client');

module.exports = async ({ params }, res) => {
    try {
        let result = await Client.find(
            {},
            {
                ["y2019" + ".signaletique.numero_de_dossier"]: 1,
                ["y2019" + ".signaletique.contribuable.nom"]: 1,
                ["y2019" + ".signaletique.contribuable.prenom"]: 1,
                ["y2019" + ".signaletique.contribuable.telephone"]: 1,
                ["y2019" + ".signaletique.contribuable.courriel"]: 1,
                ["y2020" + ".signaletique.numero_de_dossier"]: 1
            }
        )
            .exec();
        res.send(result);
    } catch (err) {
        res.send(err);
    }

}