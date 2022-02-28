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
                ["y2019" + ".signaletique.contribuable.date_de_naissance"]: 1,
                ["y2019" + ".signaletique.conjoint_partenaire.date_de_naissance"]: 1,
                ["y2019" + ".signaletique.conjoint_partenaire.nom"]: 1,
                ["y2019" + ".depenses_speciales15.prevoyance_vieillesse_t2.contribuable.plafond_3200"]: 1,
                ["y2019" + ".depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.plafond_3200"]: 1,
                ["y2019" + ".depenses_speciales14.plafond_672"]: 1,
                ["y2019" + ".depenses_speciales14.montant_moins_eleve"]: 1,
                ["y2020" + ".signaletique.numero_de_dossier"]: 1,
                ["y2020" + ".signaletique.contribuable.nom"]: 1,
                ["y2020" + ".signaletique.contribuable.prenom"]: 1,
                ["y2020" + ".signaletique.contribuable.telephone"]: 1,
                ["y2020" + ".signaletique.contribuable.courriel"]: 1,
                ["y2020" + ".signaletique.contribuable.date_de_naissance"]: 1,
                ["y2020" + ".signaletique.conjoint_partenaire.date_de_naissance"]: 1,
                ["y2020" + ".signaletique.conjoint_partenaire.nom"]: 1,
                ["y2020" + ".depenses_speciales14.plafond_672"]: 1,
                ["y2020" + ".depenses_speciales15.prevoyance_vieillesse_t2.contribuable.plafond_3200"]: 1,
                ["y2020" + ".depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.plafond_3200"]: 1,
                ["y2020" + ".depenses_speciales14.montant_moins_eleve"]: 1,
                ["y2021" + ".signaletique.numero_de_dossier"]: 1,
                ["y2021" + ".signaletique.contribuable.nom"]: 1,
                ["y2021" + ".signaletique.contribuable.prenom"]: 1,
                ["y2021" + ".signaletique.contribuable.telephone"]: 1,
                ["y2021" + ".signaletique.contribuable.courriel"]: 1,
                ["y2021" + ".signaletique.contribuable.date_de_naissance"]: 1,
                ["y2021" + ".signaletique.conjoint_partenaire.date_de_naissance"]: 1,
                ["y2021" + ".signaletique.conjoint_partenaire.nom"]: 1,
                ["y2021" + ".depenses_speciales14.plafond_672"]: 1,
                ["y2021" + ".depenses_speciales15.prevoyance_vieillesse_t2.contribuable.plafond_3200"]: 1,
                ["y2021" + ".depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.plafond_3200"]: 1,
                ["y2021" + ".depenses_speciales14.montant_moins_eleve"]: 1
            }
        ).exec();
        res.send(result);
    } catch (err) {
        res.send(err);
    }

}