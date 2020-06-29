const _ = require('lodash');
module.exports = function serializeInfo(client) {
    return {
        // Page 1
        ['x1d40x']: _.get(client, 'signaletique.coordonnes_bancaires.swift_bic', ''),
        ['x1d39x']: _.get(client, 'signaletique.coordonnes_bancaires.code_iban', ''),
        ['x1d38x']: _.get(client, 'signaletique.coordonnes_bancaires.titulaire_du_compte', ''),
        ['x1d37x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.pays', ''),
        ['x1d36x']: _.get(client, 'signaletique.contribuable.domicile.ancien.pays', ''),
        ['x1d35x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.localite', ''),
        ['x1d34x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.code_postal', ''),
        ['x1d33x']: _.get(client, 'signaletique.contribuable.domicile.ancien.localite', ''),
        ['x1d32x']: _.get(client, 'signaletique.contribuable.domicile.ancien.code_postal', ''),
        ['x1d31x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.rue', ''),
        ['x1d30x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.numero', ''),
        ['x1d29x']: _.get(client, 'signaletique.contribuable.domicile.ancien.rue', ''),
        ['x1d28x']: _.get(client, 'signaletique.contribuable.domicile.ancien.numero', ''),
        ['x1d27x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.ancien.du_au', ''),
        ['x1d26x']: _.get(client, 'signaletique.contribuable.domicile.ancien.du_au', ''),
        ['x1d25x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.pays', ''),
        ['x1d24x']: _.get(client, 'signaletique.contribuable.domicile.actuel.pays', ''),
        ['x1d23x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.localite', ''),
        ['x1d22x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.code_postal', ''),
        ['x1d21x']: _.get(client, 'signaletique.contribuable.domicile.actuel.localite', ''),
        ['x1d20x']: _.get(client, 'signaletique.contribuable.domicile.actuel.code_postal', ''),
        ['x1d19x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.rue', ''),
        ['x1d18x']: _.get(client, 'signaletique.conjoint_partenaire.domicile.actuel.numero', ''),
        ['x1d17x']: _.get(client, 'signaletique.contribuable.domicile.actuel.rue', ''),
        ['x1d16x']: _.get(client, 'signaletique.contribuable.domicile.actuel.numero', ''),
        ['x1d15x']: _.get(client, 'signaletique.conjoint_partenaire.courriel', ''),
        ['x1d14x']: _.get(client, 'signaletique.contribuable.courriel', ''),
        ['x1d13x']: _.get(client, 'signaletique.conjoint_partenaire.telephone', ''),
        ['x1d12x']: _.get(client, 'signaletique.contribuable.telephone', ''),
        ['x1d11x']: _.get(client, 'signaletique.conjoint_partenaire.profession', ''),
        ['x1d10x']: _.get(client, 'signaletique.contribuable.profession', ''),
        ['x1d9x']: _.get(client, 'signaletique.numero_de_dossier', ''),
        ['x1d8x']: _.get(client, 'signaletique.conjoint_partenaire.lieu_de_naissance', ''),
        ['x1d7x']: _.get(client, 'signaletique.contribuable.lieu_de_naissance', ''),
        ['x1d6x']: _.get(client, 'signaletique.conjoint_partenaire.date_de_naissance', ''),
        ['x1d5x']: _.get(client, 'signaletique.contribuable.date_de_naissance', ''),
        ['x1d4x']: _.get(client, 'signaletique.conjoint_partenaire.prenom', ''),
        ['x1d3x']: _.get(client, 'signaletique.contribuable.prenom', ''),
        ['x1d2x']: _.get(client, 'signaletique.conjoint_partenaire.nom', ''),
        ['x1d1x']: _.get(client, 'signaletique.contribuable.nom', ''),
        // Page 2
        ['x2d49x']: _.get(client, 'enfants.demande_bonification_impot.table[1].date_de_naissance', ''),
        ['x2d48x']: _.get(client, 'enfants.demande_bonification_impot.table[1].nom_prenom', ''),
        ['x2d47x']: _.get(client, 'enfants.demande_bonification_impot.table[0].date_de_naissance', ''),
        ['x2d46x']: _.get(client, 'enfants.demande_bonification_impot.table[0].nom_prenom', ''),
        ['x2d44x']: _.get(client, 'enfants.demande_cim.moyens_subsistance[1].subsistance2', ''),
        ['x2d43x']: _.get(client, 'enfants.demande_cim.moyens_subsistance[0].subsistance1', ''),
        ['x2d42x']: _.get(client, 'enfants.demande_cim.table[2].montant_mensuel_allocation', ''),
        ['x2d41x']: _.get(client, 'enfants.demande_cim.table[2].nom_prenom', ''),
        ['x2d40x']: _.get(client, 'enfants.demande_cim.table[1].montant_mensuel_allocation', ''),
        ['x2d39x']: _.get(client, 'enfants.demande_cim.table[1].nom_prenom', ''),
        ['x2d38x']: _.get(client, 'enfants.demande_cim.table[0].montant_mensuel_allocation', ''),
        ['x2d37x']: _.get(client, 'enfants.demande_cim.table[0].nom_prenom', ''),
        ['x2d34x']: _.get(client, 'enfants.c.date_de_naissance', ''),
        ['x2d33x']: _.get(client, 'enfants.c.prenom', ''),
        ['x2d32x']: _.get(client, 'enfants.c.nom', ''),
        ['x2d31x']: _.get(client, 'enfants.b[2].specification_formation', ''),
        ['x2d29x']: _.get(client, 'enfants.b[2].date_de_naissance', ''),
        ['x2d28x']: _.get(client, 'enfants.b[2].prenom', ''),
        ['x2d27x']: _.get(client, 'enfants.b[2].nom', ''),
        ['x2d26x']: _.get(client, 'enfants.b[1].specification_formation', ''),
        ['x2d24x']: _.get(client, 'enfants.b[1].date_de_naissance', ''),
        ['x2d23x']: _.get(client, 'enfants.b[1].prenom', ''),
        ['x2d22x']: _.get(client, 'enfants.b[1].nom', ''),
        ['x2d21x']: _.get(client, 'enfants.b[0].specification_formation', ''),
        ['x2d19x']: _.get(client, 'enfants.b[0].date_de_naissance', ''),
        ['x2d18x']: _.get(client, 'enfants.b[0].prenom', ''),
        ['x2d17x']: _.get(client, 'enfants.b[0].nom', ''),
        ['x2d15x']: _.get(client, 'enfants.a[3].date_de_naissance', ''),
        ['x2d14x']: _.get(client, 'enfants.a[3].prenom', ''),
        ['x2d13x']: _.get(client, 'enfants.a[3].nom', ''),
        ['x2d11x']: _.get(client, 'enfants.a[2].date_de_naissance', ''),
        ['x2d10x']: _.get(client, 'enfants.a[2].prenom', ''),
        ['x2d9x']: _.get(client, 'enfants.a[2].nom', ''),
        ['x2d7x']: _.get(client, 'enfants.a[1].date_de_naissance', ''),
        ['x2d6x']: _.get(client, 'enfants.a[1].prenom', ''),
        ['x2d5x']: _.get(client, 'enfants.a[1].nom', ''),
        ['x2d3x']: _.get(client, 'enfants.a[0].date_de_naissance', ''),
        ['x2d2x']: _.get(client, 'enfants.a[0].prenom', ''),
        ['x2d1x']: _.get(client, 'enfants.a[0].nom', ''),
        ['x2d4x']: _.get(client, 'enfants.a[0].demande_moderation', 'Off'),
        ['x2d8x']: _.get(client, 'enfants.a[1].demande_moderation', 'Off'),
        ['x2d12x']: _.get(client, 'enfants.a[2].demande_moderation', 'Off'),
        ['x2d16x']: _.get(client, 'enfants.a[3].demande_moderation', 'Off'),
        ['x2d20x']: _.get(client, 'enfants.b[0].demande_moderation', 'Off'),
        ['x2d25x']: _.get(client, 'enfants.b[1].demande_moderation', 'Off'),
        ['x2d30x']: _.get(client, 'enfants.b[2].demande_moderation', 'Off'),
        ['x2d35x']: _.get(client, 'enfants.c.demande_moderation', 'Off'),
        ['x2d36x']: _.get(client, 'enfants.demande_cim.is_demande_cim', 'Off'),
        ['x2d45x']: _.get(client, 'enfants.demande_bonification_impot.is_demande_bonification_impot', 'Off'),
        // Page 3
        ['x3d28x']: _.get(client, 'etat_civil.assimilation.calculation.pourcentage', ''),
        ['x3d27x']: _.get(client, 'etat_civil.assimilation.calculation.total_revenus_non_exoneres_et_exoneres', ''),
        ['x3d26x']: _.get(client, 'etat_civil.assimilation.calculation.total_revenus_non_exoneres', ''),
        ['x3d22x']: _.get(client, 'etat_civil.non_residents.conjoint_partenaire.localite', ''),
        ['x3d21x']: _.get(client, 'etat_civil.non_residents.conjoint_partenaire.code_postal', ''),
        ['x3d20x']: _.get(client, 'etat_civil.non_residents.contribuable.localite', ''),
        ['x3d19x']: _.get(client, 'etat_civil.non_residents.contribuable.code_postal', ''),
        ['x3d18x']: _.get(client, 'etat_civil.non_residents.conjoint_partenaire.rue', ''),
        ['x3d17x']: _.get(client, 'etat_civil.non_residents.conjoint_partenaire.numero', ''),
        ['x3d16x']: _.get(client, 'etat_civil.non_residents.contribuable.rue', ''),
        ['x3d15x']: _.get(client, 'etat_civil.non_residents.contribuable.numero', ''),
        ['x3d14x']: _.get(client, 'etat_civil.non_residents.conjoint_partenaire.date_de_naissance', ''),
        ['x3d13x']: _.get(client, 'etat_civil.non_residents.contribuable.date_de_naissance', ''),
        ['x3d12x']: _.get(client, 'etat_civil.non_residents.conjoint_partenaire.nom_prenom', ''),
        ['x3d11x']: _.get(client, 'etat_civil.non_residents.contribuable.nom_prenom', ''),
        ['x3d10x']: _.get(client, 'etat_civil.separe_e.is_le', ''),
        ['x3d5x']: _.get(client, 'etat_civil.is_depuis_le', ''),
        ['x3d4x']: _.get(client, 'etat_civil.is_veuf_veuve', 'Off'),
        ['x3d3x']: _.get(client, 'etat_civil.is_divorce_e', 'Off'),
        ['x3d2x']: _.get(client, 'etat_civil.is_marie_e', 'Off'),
        ['x3d1x']: _.get(client, 'etat_civil.is_celibataire', 'Off'),
        ['x3d23x']: _.get(client, 'etat_civil.assimilation.a.revenus_mondiaux', 'Off'),
        ['x3d24x']: _.get(client, 'etat_civil.assimilation.b.revenus_nets_annuels', 'Off'),
        ['x3d25x']: _.get(client, 'etat_civil.assimilation.c.revenus_professionels', 'Off')
    }
}