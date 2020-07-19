const _ = require('lodash')
module.exports = function serializeInfo (client) {
  return {
    // Page 1
    ['x1d40x']: _.get(
      client,
      'signaletique.coordonnes_bancaires.swift_bic',
      ''
    ),
    ['x1d39x']: _.get(
      client,
      'signaletique.coordonnes_bancaires.code_iban',
      ''
    ),
    ['x1d38x']: _.get(
      client,
      'signaletique.coordonnes_bancaires.titulaire_du_compte',
      ''
    ),
    ['x1d37x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.ancien.pays',
      ''
    ),
    ['x1d36x']: _.get(
      client,
      'signaletique.contribuable.domicile.ancien.pays',
      ''
    ),
    ['x1d35x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.ancien.localite',
      ''
    ),
    ['x1d34x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.ancien.code_postal',
      ''
    ),
    ['x1d33x']: _.get(
      client,
      'signaletique.contribuable.domicile.ancien.localite',
      ''
    ),
    ['x1d32x']: _.get(
      client,
      'signaletique.contribuable.domicile.ancien.code_postal',
      ''
    ),
    ['x1d31x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.ancien.rue',
      ''
    ),
    ['x1d30x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.ancien.numero',
      ''
    ),
    ['x1d29x']: _.get(
      client,
      'signaletique.contribuable.domicile.ancien.rue',
      ''
    ),
    ['x1d28x']: _.get(
      client,
      'signaletique.contribuable.domicile.ancien.numero',
      ''
    ),
    ['x1d27x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.ancien.du_au',
      ''
    ),
    ['x1d26x']: _.get(
      client,
      'signaletique.contribuable.domicile.ancien.du_au',
      ''
    ),
    ['x1d25x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.actuel.pays',
      ''
    ),
    ['x1d24x']: _.get(
      client,
      'signaletique.contribuable.domicile.actuel.pays',
      ''
    ),
    ['x1d23x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.actuel.localite',
      ''
    ),
    ['x1d22x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.actuel.code_postal',
      ''
    ),
    ['x1d21x']: _.get(
      client,
      'signaletique.contribuable.domicile.actuel.localite',
      ''
    ),
    ['x1d20x']: _.get(
      client,
      'signaletique.contribuable.domicile.actuel.code_postal',
      ''
    ),
    ['x1d19x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.actuel.rue',
      ''
    ),
    ['x1d18x']: _.get(
      client,
      'signaletique.conjoint_partenaire.domicile.actuel.numero',
      ''
    ),
    ['x1d17x']: _.get(
      client,
      'signaletique.contribuable.domicile.actuel.rue',
      ''
    ),
    ['x1d16x']: _.get(
      client,
      'signaletique.contribuable.domicile.actuel.numero',
      ''
    ),
    ['x1d15x']: _.get(client, 'signaletique.conjoint_partenaire.courriel', ''),
    ['x1d14x']: _.get(client, 'signaletique.contribuable.courriel', ''),
    ['x1d13x']: _.get(client, 'signaletique.conjoint_partenaire.telephone', ''),
    ['x1d12x']: _.get(client, 'signaletique.contribuable.telephone', ''),
    ['x1d11x']: _.get(
      client,
      'signaletique.conjoint_partenaire.profession',
      ''
    ),
    ['x1d10x']: _.get(client, 'signaletique.contribuable.profession', ''),
    ['x1d9x']: _.get(client, 'signaletique.numero_de_dossier', ''),
    ['x1d8x']: _.get(
      client,
      'signaletique.conjoint_partenaire.lieu_de_naissance',
      ''
    ),
    ['x1d7x']: _.get(client, 'signaletique.contribuable.lieu_de_naissance', ''),
    ['x1d6x']: _.get(
      client,
      'signaletique.conjoint_partenaire.date_de_naissance',
      ''
    ).replace(/\s/g, ''),
    ['x1d5x']: _.get(
      client,
      'signaletique.contribuable.date_de_naissance',
      ''
    ).replace(/\s/g, ''),
    ['x1d4x']: _.get(client, 'signaletique.conjoint_partenaire.prenom', ''),
    ['x1d3x']: _.get(client, 'signaletique.contribuable.prenom', ''),
    ['x1d2x']: _.get(client, 'signaletique.conjoint_partenaire.nom', ''),
    ['x1d1x']: _.get(client, 'signaletique.contribuable.nom', ''),
    // Page 2
    ['x2d49x']: _.get(
      client,
      'enfants.demande_bonification_impot.table[1].date_de_naissance',
      ''
    ),
    ['x2d48x']: _.get(
      client,
      'enfants.demande_bonification_impot.table[1].nom_prenom',
      ''
    ),
    ['x2d47x']: _.get(
      client,
      'enfants.demande_bonification_impot.table[0].date_de_naissance',
      ''
    ),
    ['x2d46x']: _.get(
      client,
      'enfants.demande_bonification_impot.table[0].nom_prenom',
      ''
    ),
    ['x2d44x']: _.get(
      client,
      'enfants.demande_cim.moyens_subsistance[1].subsistance2',
      ''
    ),
    ['x2d43x']: _.get(
      client,
      'enfants.demande_cim.moyens_subsistance[0].subsistance1',
      ''
    ),
    ['x2d42x']: _.get(
      client,
      'enfants.demande_cim.table[2].montant_mensuel_allocation',
      ''
    ),
    ['x2d41x']: _.get(client, 'enfants.demande_cim.table[2].nom_prenom', ''),
    ['x2d40x']: _.get(
      client,
      'enfants.demande_cim.table[1].montant_mensuel_allocation',
      ''
    ),
    ['x2d39x']: _.get(client, 'enfants.demande_cim.table[1].nom_prenom', ''),
    ['x2d38x']: _.get(
      client,
      'enfants.demande_cim.table[0].montant_mensuel_allocation',
      ''
    ),
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
    ['x2d45x']: _.get(
      client,
      'enfants.demande_bonification_impot.is_demande_bonification_impot',
      'Off'
    ),
    // Page 3
    ['x3d28x']: _.get(
      client,
      'etat_civil.assimilation.calculation.pourcentage',
      ''
    ),
    ['x3d27x']: _.get(
      client,
      'etat_civil.assimilation.calculation.total_revenus_non_exoneres_et_exoneres',
      ''
    ),
    ['x3d26x']: _.get(
      client,
      'etat_civil.assimilation.calculation.total_revenus_non_exoneres',
      ''
    ),
    ['x3d22x']: _.get(
      client,
      'etat_civil.non_residents.conjoint_partenaire.localite',
      ''
    ),
    ['x3d21x']: _.get(
      client,
      'etat_civil.non_residents.conjoint_partenaire.code_postal',
      ''
    ),
    ['x3d20x']: _.get(
      client,
      'etat_civil.non_residents.contribuable.localite',
      ''
    ),
    ['x3d19x']: _.get(
      client,
      'etat_civil.non_residents.contribuable.code_postal',
      ''
    ),
    ['x3d18x']: _.get(
      client,
      'etat_civil.non_residents.conjoint_partenaire.rue',
      ''
    ),
    ['x3d17x']: _.get(
      client,
      'etat_civil.non_residents.conjoint_partenaire.numero',
      ''
    ),
    ['x3d16x']: _.get(client, 'etat_civil.non_residents.contribuable.rue', ''),
    ['x3d15x']: _.get(
      client,
      'etat_civil.non_residents.contribuable.numero',
      ''
    ),
    ['x3d14x']: _.get(
      client,
      'etat_civil.non_residents.conjoint_partenaire.date_de_naissance',
      ''
    ),
    ['x3d13x']: _.get(
      client,
      'etat_civil.non_residents.contribuable.date_de_naissance',
      ''
    ),
    ['x3d12x']: _.get(
      client,
      'etat_civil.non_residents.conjoint_partenaire.nom_prenom',
      ''
    ),
    ['x3d11x']: _.get(
      client,
      'etat_civil.non_residents.contribuable.nom_prenom',
      ''
    ),
    ['x3d10x']: _.get(client, 'etat_civil.separe_e.is_le', ''),
    ['x3d5x']: _.get(client, 'etat_civil.is_depuis_le', ''),
    ['x3d1x']: _.get(client, 'etat_civil.status', ''),
    ['x3d23x']: _.get(
      client,
      'etat_civil.assimilation.a.revenus_mondiaux',
      'Off'
    ),
    ['x3d24x']: _.get(
      client,
      'etat_civil.assimilation.b.revenus_nets_annuels',
      'Off'
    ),
    ['x3d25x']: _.get(
      client,
      'etat_civil.assimilation.c.revenus_professionels',
      'Off'
    ),
    ['x3d6x']: _.get(client, 'etat_civil.separe_e.is_dispense_legale', 'Off'),
    ['x3d7x']: _.get(
      client,
      'etat_civil.separe_e.is_jugement_separation',
      'Off'
    ),
    ['x3d8x']: _.get(
      client,
      'etat_civil.separe_e.is_dispense_autorite_judiciaire',
      'Off'
    ),
    // Page 4
    ['x4d28x']: _.get(client, 'options.signature.date', ''),
    ['x4d27x']: _.get(client, 'options.signature.lieu', ''),
    ['x4d26x']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.taux_revenu_imposable',
      ''
    ),
    ['x4d25x']: _.get(
      client,
      'options.informations_complementaires.contribuable.taux_revenu_imposable',
      ''
    ),
    ['x4d24x']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.taux_avances_communes',
      ''
    ),
    ['x4d23x']: _.get(
      client,
      'options.informations_complementaires.contribuable.taux_avances_communes',
      ''
    ),
    ['x4d22x']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.swift_bic',
      ''
    ),
    ['x4d21x']: _.get(
      client,
      'options.informations_complementaires.contribuable.swift_bic',
      ''
    ),
    ['x4d20x']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.code_iban',
      ''
    ),
    ['x4d19x']: _.get(
      client,
      'options.informations_complementaires.contribuable.code_iban',
      ''
    ),
    ['x4d18x']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.titulaire_du_compte',
      ''
    ),
    ['x4d17x']: _.get(
      client,
      'options.informations_complementaires.contribuable.titulaire_du_compte',
      ''
    ),
    ['x4d16ax']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.numero_dossier_individuel_a',
      ''
    ),
    ['x4d16bx']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.numero_dossier_individuel_b',
      ''
    ),
    ['x4d15ax']: _.get(
      client,
      'options.informations_complementaires.contribuable.numero_dossier_individuel_a',
      ''
    ),
    ['x4d15bx']: _.get(
      client,
      'options.informations_complementaires.contribuable.numero_dossier_individuel_b',
      ''
    ),
    ['x4d14x']: _.get(
      client,
      'options.informations_complementaires.conjoint_partenaire.date_de_naissance',
      ''
    ),
    ['x4d13x']: _.get(
      client,
      'options.informations_complementaires.contribuable.date_de_naissance',
      ''
    ),
    ['x4d10x']: _.get(client, 'options.imposition_individuelle.sl_imposition'),
    ['x4d9x']: _.get(
      client,
      'options.imposition_individuelle.is_annee_imposition_2019',
      ''
    ),
    ['x4d7x']: _.get(client, 'options.imposition_individuelle.sl_envoi'),
    ['x4d6x']: _.get(
      client,
      'options.imposition_individuelle.is_confirmation_choix',
      ''
    ),
    ['x4d4x']: _.get(client, 'options.partenaires.sl_document'),
    ['x4d3x']: _.get(
      client,
      'options.partenaires.date_declaration_partenariat',
      ''
    ),
    ['x4d2x']: _.get(
      client,
      'options.partenaires.is_imposition_collective',
      ''
    ),
    ['x4d1x']: _.get(
      client,
      'options.epoux_contribuable.is_imposition_collective',
      ''
    ),
    // Page 5
    ['x5d69x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.etat_partie',
      ''
    ),
    ['x5d67x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.exoneration',
      ''
    ),
    ['x5d66x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.exoneration',
      ''
    ),
    ['x5d64x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.investissements',
      ''
    ),
    ['x5d63x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.investissements',
      ''
    ),
    ['x5d57x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.benefice_cessation',
      ''
    ),
    ['x5d56x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.benefice_cessation',
      ''
    ),
    ['x5d55x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.benefice_cessation',
      ''
    ),
    ['x5d54x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.benefice_cessation',
      ''
    ),
    ['x5d53x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.depenses',
      ''
    ),
    ['x5d52x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.depenses',
      ''
    ),
    ['x5d51x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.depenses',
      ''
    ),
    ['x5d50x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.depenses',
      ''
    ),
    ['x5d49x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.recettes',
      ''
    ),
    ['x5d48x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.recettes',
      ''
    ),
    ['x5d47x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.recettes',
      ''
    ),
    ['x5d46x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.recettes',
      ''
    ),
    ['x5d45x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.parts_benefice',
      ''
    ),
    ['x5d44x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.parts_benefice',
      ''
    ),
    ['x5d43x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.parts_benefice',
      ''
    ),
    ['x5d42x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.parts_benefice',
      ''
    ),
    ['x5d41x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.benefice_agricole',
      ''
    ),
    ['x5d40x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.benefice_agricole',
      ''
    ),
    ['x5d39x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.benefice_agricole',
      ''
    ),
    ['x5d38x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.benefice_agricole',
      ''
    ),
    ['x5d33x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.etat_partie',
      ''
    ),
    ['x5d31x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.exoneration',
      ''
    ),
    ['x5d30x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.exoneration',
      ''
    ),
    ['x5d28x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.totalABCD',
      ''
    ),
    ['x5d27x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.totalABCD',
      ''
    ),
    ['x5d26x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.totalABCD',
      ''
    ),
    ['x5d25x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.totalABCD',
      ''
    ),
    ['x5d24x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.benefice_cessation',
      ''
    ),
    ['x5d23x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.benefice_cessation',
      ''
    ),
    ['x5d22x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.benefice_cessation',
      ''
    ),
    ['x5d21x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.benefice_cessation',
      ''
    ),
    ['x5d20x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.depenses_annexe',
      ''
    ),
    ['x5d19x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.depenses_annexe',
      ''
    ),
    ['x5d18x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.depenses_annexe',
      ''
    ),
    ['x5d17x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.depenses_annexe',
      ''
    ),
    ['x5d16x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.depenses_forfaitaires',
      ''
    ),
    ['x5d15x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.depenses_forfaitaires',
      ''
    ),
    ['x5d14x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.depenses_forfaitaires',
      ''
    ),
    ['x5d13x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.depenses_forfaitaires',
      ''
    ),
    ['x5d12x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.recettes',
      ''
    ),
    ['x5d11x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.recettes',
      ''
    ),
    ['x5d10x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.recettes',
      ''
    ),
    ['x5d9x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.recettes',
      ''
    ),
    ['x5d8x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.parts_benefice',
      ''
    ),
    ['x5d7x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.parts_benefice',
      ''
    ),
    ['x5d6x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.parts_benefice',
      ''
    ),
    ['x5d5x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.parts_benefice',
      ''
    ),
    ['x5d4x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.benefice_entreprise',
      ''
    ),
    ['x5d3x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.benefice_entreprise',
      ''
    ),
    ['x5d2x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.benefice_entreprise',
      ''
    ),
    ['x5d1x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.benefice_entreprise',
      ''
    ),
    ['x20d2002x']: _.get(client, 'revenu_imposable.date', ''),
    ['x5d73x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.total'
    ),
    ['x5d72x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.total'
    ),
    ['x5d71x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.total'
    ),
    ['x5d70x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.total'
    ),
    ['x5d68x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.exoneration_total'
    ),
    ['x5d65x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.investissements_total'
    ),
    ['x5d62x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.total'
    ),
    ['x5d61x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.totalABCD'
    ),
    ['x5d60x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.totalABCD'
    ),
    ['x5d59x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.totalABCD'
    ),
    ['x5d58x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.totalABCD'
    ),
    ['x5d37x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.total'
    ),
    ['x5d36x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.total'
    ),
    ['x5d35x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.total'
    ),
    ['x5d34x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.total'
    ),
    ['x5d32x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.exonerationTotal'
    ),
    ['x5d29x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.total'
    ),
    ['x5d28x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.totalABCD'
    ),
    ['x5d27x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.totalABCD'
    ),
    ['x5d26x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.totalABCD'
    ),
    ['x5d25x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.totalABCD'
    ),
    // Page 6
    ['6d53']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total3'),
    ['6d52']: _.get(client, 'ben_prov.rev_exo.contribuable.total3'),
    ['6d51']: _.get(client, 'ben_prov.rev_non_exo.conjoint_partenaire.total3'),
    ['6d50']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total3'),
    ['6d49']: _.get(client, 'ben_prov.etat_partie'),
    ['6d47']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.exoneration'
    ),
    ['6d46']: _.get(client, 'ben_prov.rev_non_exo.contribuable.exoneration'),
    ['6d44']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total2'),
    ['6d43']: _.get(client, 'ben_prov.rev_exo.contribuable.total2'),
    ['6d42']: _.get(client, 'ben_prov.rev_non_exo.conjoint_partenaire.total2'),
    ['6d41']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total2'),
    ['6d40']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.depenses'),
    ['6d39']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses'),
    ['6d38']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses'
    ),
    ['6d37']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses'),
    ['6d36']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.montant_brut'
    ),
    ['6d35']: _.get(client, 'ben_prov.rev_exo.contribuable.montant_brut'),
    ['6d34']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.montant_brut'
    ),
    ['6d33']: _.get(client, 'ben_prov.rev_non_exo.contribuable.montant_brut'),
    ['6d32']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total1'),
    ['6d31']: _.get(client, 'ben_prov.rev_exo.contribuable.total1'),
    ['6d30']: _.get(client, 'ben_prov.rev_non_exo.conjoint_partenaire.total1'),
    ['6d29']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total1'),
    ['6d28']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.depenses'),
    ['6d27']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses'),
    ['6d26']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses'
    ),
    ['6d25']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses'),
    ['6d24']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.montant_brut'
    ),
    ['6d23']: _.get(client, 'ben_prov.rev_exo.contribuable.montant_brut'),
    ['6d22']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.montant_brut'
    ),
    ['6d21']: _.get(client, 'ben_prov.rev_non_exo.contribuable.montant_brut'),
    ['6d20']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.benefice_cessation'
    ),
    ['6d19']: _.get(client, 'ben_prov.rev_exo.contribuable.benefice_cessation'),
    ['6d18']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.benefice_cessation'
    ),
    ['6d17']: _.get(
      client,
      'ben_prov.rev_non_exo.contribuable.benefice_cessation'
    ),
    ['6d16']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.parts_benefice'
    ),
    ['6d15']: _.get(client, 'ben_prov.rev_exo.contribuable.parts_benefice'),
    ['6d14']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.parts_benefice'
    ),
    ['6d13']: _.get(client, 'ben_prov.rev_non_exo.contribuable.parts_benefice'),
    ['6d12']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.depenses'),
    ['6d11']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses'),
    ['6d10']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses'
    ),
    ['6d9']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses'),
    ['6d8']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.recettes'),
    ['6d7']: _.get(client, 'ben_prov.rev_exo.contribuable.recettes'),
    ['6d6']: _.get(client, 'ben_prov.rev_non_exo.conjoint_partenaire.recettes'),
    ['6d5']: _.get(client, 'ben_prov.rev_non_exo.contribuable.recettes'),
    ['6d4']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.benefice'),
    ['6d3']: _.get(client, 'ben_prov.rev_exo.contribuable.benefice'),
    ['6d2']: _.get(client, 'ben_prov.rev_non_exo.conjoint_partenaire.benefice'),
    ['6d1']: _.get(client, 'ben_prov.rev_non_exo.contribuable.benefice'),
    // Page 7
    ['7d778']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.jour'
    ),
    ['7d777']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.frequence.jour'
    ),
    ['7d776']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.periode.au'
    ),
    ['7d775']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.periode.du'
    ),
    ['7d774']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.periode.au'
    ),
    ['7d773']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.periode.du'
    ),
    ['7d772']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.localite'
    ),
    ['7d771']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.localite'
    ),
    ['7d770']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.jour'
    ),
    ['7d769']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.jour'
    ),
    ['7d768']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.periode.au'
    ),
    ['7d767']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.periode.du'
    ),
    ['7d766']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.periode.au'
    ),
    ['7d765']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.periode.du'
    ),
    ['7d764']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.localite'
    ),
    ['7d763']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.localite'
    ),
    ['7d754']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.design_lieu_travail'
    ),
    ['7d753']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.design_lieu_travail'
    ),
    ['7d752']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.design_lieu_travail'
    ),
    ['7d751']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.design_lieu_travail'
    ),
    ['7d750']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.frais_de_deplacement'
    ),
    ['7d749']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.frais_de_deplacement'
    ),
    ['7d748']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.frais_de_deplacement'
    ),
    ['7d747']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.frais_de_deplacement'
    ),
    ['7d746']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.frais_obtention'
    ),
    ['7d745']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.frais_obtention'
    ),
    ['7d744']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.frais_obtention'
    ),
    ['7d743']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.frais_obtention'
    ),
    ['7d742']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.autres_exemptions_texte'
    ),
    ['7d741']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.autres_exemptions'
    ),
    ['7d740']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.autres_exemptions'
    ),
    ['7d739']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.autres_exemptions'
    ),
    ['7d738']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.autres_exemptions'
    ),
    ['7d737']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.supplements'
    ),
    ['7d736']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.supplements'
    ),
    ['7d735']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.supplements'
    ),
    ['7d734']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.supplements'
    ),
    ['7d733']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.salaires'
    ),
    ['7d732']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.salaires'
    ),
    ['7d731']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.salaires'
    ),
    ['7d730']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.salaires'
    ),
    ['7d725']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.salaire_brut'
    ),
    ['7d724']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.salaire_brut'
    ),
    ['7d723']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.salaire_brut'
    ),
    ['7d722']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.salaire_brut'
    ),
    ['7d717']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.autres'
    ),
    ['7d716']: _.get(client, 'occup_salariee.rev_exo.contribuable.autres'),
    ['7d715']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.autres'
    ),
    ['7d714']: _.get(client, 'occup_salariee.rev_non_exo.contribuable.autres'),
    ['7d713']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.autres_texte'
    ),
    ['7d712']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.prestations'
    ),
    ['7d711']: _.get(client, 'occup_salariee.rev_exo.contribuable.prestations'),
    ['7d710']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.prestations'
    ),
    ['7d709']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.prestations'
    ),
    ['7d708']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.deuxieme_contrat'
    ),
    ['7d707']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.deuxieme_contrat'
    ),
    ['7d706']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.deuxieme_contrat'
    ),
    ['7d705']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.deuxieme_contrat'
    ),
    ['7d704']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.premier_contrat'
    ),
    ['7d703']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.premier_contrat'
    ),
    ['7d702']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.premier_contrat'
    ),
    ['7d701']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.premier_contrat'
    )
  }
}
