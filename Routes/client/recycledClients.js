const DeletedClient = require('../../Models/DeletedClient')

module.exports = (req, res) => {

    DeletedClient.find(
        {},
        {
            ["y2019" + ".signaletique.numero_de_dossier"]: 1,
            ["y2019" + ".signaletique.contribuable.nom"]: 1,
            ["y2019" + ".signaletique.contribuable.prenom"]: 1,
            ["y2019" + ".signaletique.contribuable.telephone"]: 1,
            ["y2019" + ".signaletique.contribuable.courriel"]: 1,
            ["y2020" + ".signaletique.numero_de_dossier"]: 1,
            ["y2020" + ".signaletique.contribuable.nom"]: 1,
            ["y2020" + ".signaletique.contribuable.prenom"]: 1,
            ["y2020" + ".signaletique.contribuable.telephone"]: 1,
            ["y2020" + ".signaletique.contribuable.courriel"]: 1,
            ["y2021" + ".signaletique.numero_de_dossier"]: 1,
            ["y2021" + ".signaletique.contribuable.nom"]: 1,
            ["y2021" + ".signaletique.contribuable.prenom"]: 1,
            ["y2021" + ".signaletique.contribuable.telephone"]: 1,
            ["y2021" + ".signaletique.contribuable.courriel"]: 1,
            ["y2022" + ".signaletique.numero_de_dossier"]: 1,
            ["y2022" + ".signaletique.contribuable.nom"]: 1,
            ["y2022" + ".signaletique.contribuable.prenom"]: 1,
            ["y2022" + ".signaletique.contribuable.telephone"]: 1,
            ["y2022" + ".signaletique.contribuable.courriel"]: 1
        }
    ).exec((err, result) => {
        if (err) res.send(err)
        else {
            res.send(result);
        }
    });

}