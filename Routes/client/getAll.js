const Client = require('../../Models/Client');

module.exports = async ({ params }, res) => {
    // New Year Modify
    const selections = [
        2019,
        2020,
        2021,
        2022,
        2023
    ].map(y => ({
        [`y${y}.signaletique.numero_de_dossier`]: 1,
        [`y${y}.signaletique.contribuable.nom`]: 1,
        [`y${y}.signaletique.contribuable.prenom`]: 1,
        [`y${y}.signaletique.contribuable.telephone`]: 1,
        [`y${y}.signaletique.contribuable.courriel`]: 1,
        [`y${y}.signaletique.contribuable.date_de_naissance`]: 1,
        [`y${y}.signaletique.conjoint_partenaire.date_de_naissance`]: 1,
        [`y${y}.signaletique.conjoint_partenaire.nom`]: 1,
        [`y${y}.depenses_speciales15.prevoyance_vieillesse_t2.contribuable.plafond_3200`]: 1,
        [`y${y}.depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.plafond_3200`]: 1,
        [`y${y}.depenses_speciales14.plafond_672`]: 1,
        [`y${y}.depenses_speciales14.montant_moins_eleve`]: 1
    }))
    try {
        let result = await Client.find(
            {},
            {
                ...selections[0],
                ...selections[1],
                ...selections[2],
                ...selections[3],
                ...selections[4]
            }
        ).exec();
        res.send(result);
    } catch (err) {
        res.send(err);
    }

}