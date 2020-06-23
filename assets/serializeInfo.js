const _ = require('lodash');
module.exports = function serializeInfo(client) {
    return {
        // Page 1
        ['1d40']: _.get(client, 'signaletique.coordonnes_bancaires.swift_bic', ''),
        ['1d39']: _.get(client, 'signaletique.coordonnes_bancaires.code_iban', ''),
        ['1d38']: _.get(client, 'signaletique.coordonnes_bancaires.titulaire_du_compte', ''),
        ['1d37']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.pays', ''),
        ['1d36']: _.get(client, 'signaletique.contribuable.domicile.ancien.pays', ''),
        ['1d35']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.localite', ''),
        ['1d34']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.code_postal', ''),
        ['1d33']: _.get(client, 'signaletique.contribuable.domicile.ancien.localite', ''),
        ['1d32']: _.get(client, 'signaletique.contribuable.domicile.ancien.code_postal', ''),
        ['1d31']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.rue', ''),
        ['1d30']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.numero', ''),
        ['1d29']: _.get(client, 'signaletique.contribuable.domicile.ancien.rue', ''),
        ['1d28']: _.get(client, 'signaletique.contribuable.domicile.ancien.numero', ''),
        ['1d27']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.du_au', ''),
        ['1d26']: _.get(client, 'signaletique.contribuable.domicile.ancien.du_au', ''),
        ['1d25']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.pays', ''),
        ['1d24']: _.get(client, 'signaletique.contribuable.domicile.actuel.pays', ''),
        ['1d23']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.localite', ''),
        ['1d22']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.code_postal', ''),
        ['1d21']: _.get(client, 'signaletique.contribuable.domicile.actuel.localite', ''),
        ['1d20']: _.get(client, 'signaletique.contribuable.domicile.actuel.code_postal', ''),
        ['1d19']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.rue', ''),
        ['1d18']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.numero', ''),
        ['1d17']: _.get(client, 'signaletique.contribuable.domicile.actuel.rue', ''),
        ['1d16']: _.get(client, 'signaletique.contribuable.domicile.actuel.numero', ''),
        ['1d15']: _.get(client, 'signaletique.conjoint_partenaire.courriel', ''),
        ['1d14']: _.get(client, 'signaletique.contribuable.courriel', ''),
        ['1d13']: _.get(client, 'signaletique.conjoint_partenaire.telephone', ''),
        ['1d12']: _.get(client, 'signaletique.contribuable.telephone', ''),
        ['1d11']: _.get(client, 'signaletique.conjoint_partenaire.profession', ''),
        ['1d10']: _.get(client, 'signaletique.contribuable.profession', ''),
        ['1d9']: _.get(client, 'signaletique.numero_de_dossier', ''),
        ['1d8']: _.get(client, 'signaletique.conjoint_partenaire.lieu_de_naissance', ''),
        ['1d7']: _.get(client, 'signaletique.contribuable.lieu_de_naissance', ''),
        ['1d6']: _.get(client, 'signaletique.conjoint_partenaire.date_de_naissance', ''),
        ['1d5']: _.get(client, 'signaletique.contribuable.date_de_naissance', ''),
        ['1d4']: _.get(client, 'signaletique.conjoint_partenaire.prenom', ''),
        ['1d3']: _.get(client, 'signaletique.contribuable.prenom', ''),
        ['1d2']: _.get(client, 'signaletique.conjoint_partenaire.nom', ''),
        ['1d1']: _.get(client, 'signaletique.contribuable.nom', ''),
        ['2d49']: _.get(client, 'enfants.demande_bonification_impot.table[1].date_de_naissance', ''),
        ['2d48']: _.get(client, 'enfants.demande_bonification_impot.table[1].nom_prenom', ''),
        ['2d47']: _.get(client, 'enfants.demande_bonification_impot.table[0].date_de_naissance', ''),
        ['2d46']: _.get(client, 'enfants.demande_bonification_impot.table[0].nom_prenom', ''),
        ['2d44']: _.get(client, 'enfants.demande_cim.moyens_subsistance[1].subsistance2', ''),
        ['2d43']: _.get(client, 'enfants.demande_cim.moyens_subsistance[0].subsistance1', ''),
        ['2d42']: _.get(client, 'enfants.demande_cim.table[2].montant_mensuel_allocation', ''),
        ['2d41']: _.get(client, 'enfants.demande_cim.table[2].nom_prenom', ''),
        ['2d40']: _.get(client, 'enfants.demande_cim.table[1].montant_mensuel_allocation', ''),
        ['2d39']: _.get(client, 'enfants.demande_cim.table[1].nom_prenom', ''),
        ['2d38']: _.get(client, 'enfants.demande_cim.table[0].montant_mensuel_allocation', ''),
        ['2d37']: _.get(client, 'enfants.demande_cim.table[0].nom_prenom', ''),
        ['2d34']: _.get(client, 'enfants.c.date_de_naissance', ''),
        ['2d33']: _.get(client, 'enfants.c.prenom', ''),
        ['2d32']: _.get(client, 'enfants.c.nom', ''),
        ['2d31']: _.get(client, 'enfants.b[2].specification_formation', ''),
        ['2d29']: _.get(client, 'enfants.b[2].date_de_naissance', ''),
        ['2d28']: _.get(client, 'enfants.b[2].prenom', ''),
        ['2d27']: _.get(client, 'enfants.b[2].nom', ''),
        ['2d26']: _.get(client, 'enfants.b[1].specification_formation', ''),
        ['2d24']: _.get(client, 'enfants.b[1].date_de_naissance', ''),
        ['2d23']: _.get(client, 'enfants.b[1].prenom', ''),
        ['2d22']: _.get(client, 'enfants.b[1].nom', ''),
        ['2d21']: _.get(client, 'enfants.b[0].specification_formation', ''),
        ['2d19']: _.get(client, 'enfants.b[0].date_de_naissance', ''),
        ['2d18']: _.get(client, 'enfants.b[0].prenom', ''),
        ['2d17']: _.get(client, 'enfants.b[0].nom', ''),
        ['2d15']: _.get(client, 'enfants.a[3].date_de_naissance', ''),
        ['2d14']: _.get(client, 'enfants.a[3].prenom', ''),
        ['2d13']: _.get(client, 'enfants.a[3].nom', ''),
        ['2d11']: _.get(client, 'enfants.a[2].date_de_naissance', ''),
        ['2d10']: _.get(client, 'enfants.a[2].prenom', ''),
        ['2d9']: _.get(client, 'enfants.a[2].nom', ''),
        ['2d7']: _.get(client, 'enfants.a[1].date_de_naissance', ''),
        ['2d6']: _.get(client, 'enfants.a[1].prenom', ''),
        ['2d5']: _.get(client, 'enfants.a[1].nom', ''),
        ['2d3']: _.get(client, 'enfants.a[0].date_de_naissance', ''),
        ['2d2']: _.get(client, 'enfants.a[0].prenom', ''),
        ['2d1']: _.get(client, 'enfants.a[0].nom', ''),
        ['2d4']: _.get(client, 'enfants.a[0].demande_moderation', 'Off'),
        ['2d8']: _.get(client, 'enfants.a[1].demande_moderation', 'Off'),
        ['2d12']: _.get(client, 'enfants.a[2].demande_moderation', 'Off'),
        ['2d16']: _.get(client, 'enfants.a[3].demande_moderation', 'Off'),
        ['2d20']: _.get(client, 'enfants.b[0].demande_moderation', 'Off'),
        ['2d25']: _.get(client, 'enfants.b[0].demande_moderation', 'Off'),
        ['2d30']: _.get(client, 'enfants.b[0].demande_moderation', 'Off'),
        ['2d35']: _.get(client, 'enfants.c.demande_moderation', 'Off')
    }
}