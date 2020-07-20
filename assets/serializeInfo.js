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
    ['x6d53x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total3'),
    ['x6d52x']: _.get(client, 'ben_prov.rev_exo.contribuable.total3'),
    ['x6d51x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.total3'
    ),
    ['x6d50x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total3'),
    ['x6d49x']: _.get(client, 'ben_prov.etat_partie'),
    ['x6d47x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.exoneration'
    ),
    ['x6d46x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.exoneration'),
    ['x6d44x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total2'),
    ['x6d43x']: _.get(client, 'ben_prov.rev_exo.contribuable.total2'),
    ['x6d42x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.total2'
    ),
    ['x6d41x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total2'),
    ['x6d40x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.depenses'),
    ['x6d39x']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses'),
    ['x6d38x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses'
    ),
    ['x6d37x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses'),
    ['x6d36x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.montant_brut'
    ),
    ['x6d35x']: _.get(client, 'ben_prov.rev_exo.contribuable.montant_brut'),
    ['x6d34x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.montant_brut'
    ),
    ['x6d33x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.montant_brut'),
    ['x6d32x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total1'),
    ['x6d31x']: _.get(client, 'ben_prov.rev_exo.contribuable.total1'),
    ['x6d30x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.total1'
    ),
    ['x6d29x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total1'),
    ['x6d28x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.depenses'),
    ['x6d27x']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses'),
    ['x6d26x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses'
    ),
    ['x6d25x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses'),
    ['x6d24x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.montant_brut'
    ),
    ['x6d23x']: _.get(client, 'ben_prov.rev_exo.contribuable.montant_brut'),
    ['x6d22x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.montant_brut'
    ),
    ['x6d21x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.montant_brut'),
    ['x6d20x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.benefice_cessation'
    ),
    ['x6d19x']: _.get(
      client,
      'ben_prov.rev_exo.contribuable.benefice_cessation'
    ),
    ['x6d18x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.benefice_cessation'
    ),
    ['x6d17x']: _.get(
      client,
      'ben_prov.rev_non_exo.contribuable.benefice_cessation'
    ),
    ['x6d16x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.parts_benefice'
    ),
    ['x6d15x']: _.get(client, 'ben_prov.rev_exo.contribuable.parts_benefice'),
    ['x6d14x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.parts_benefice'
    ),
    ['x6d13x']: _.get(
      client,
      'ben_prov.rev_non_exo.contribuable.parts_benefice'
    ),
    ['x6d12x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.depenses'),
    ['x6d11x']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses'),
    ['x6d10x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses'
    ),
    ['x6d9x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses'),
    ['x6d8x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.recettes'),
    ['x6d7x']: _.get(client, 'ben_prov.rev_exo.contribuable.recettes'),
    ['x6d6x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.recettes'
    ),
    ['x6d5x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.recettes'),
    ['x6d4x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.benefice'),
    ['x6d3x']: _.get(client, 'ben_prov.rev_exo.contribuable.benefice'),
    ['x6d2x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.benefice'
    ),
    ['x6d1x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.benefice'),
    ['x6d45x']: _.get(client, 'ben_prov.rev_exo.totalABCDE'),
    ['x6d48x']: _.get(client, 'ben_prov.rev_non_exo.exoneration_total'),
    // Page 7
    ['x7d778x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.jour'
    ),
    ['x7d777x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.frequence.jour'
    ),
    ['x7d776x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.periode.au'
    ),
    ['x7d775x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.periode.du'
    ),
    ['x7d774x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.periode.au'
    ),
    ['x7d773x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.periode.du'
    ),
    ['x7d772x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.localite'
    ),
    ['x7d771x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.localite'
    ),
    ['x7d770x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.jour'
    ),
    ['x7d769x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.jour'
    ),
    ['x7d768x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.periode.au'
    ),
    ['x7d767x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.periode.du'
    ),
    ['x7d766x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.periode.au'
    ),
    ['x7d765x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.periode.du'
    ),
    ['x7d764x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.localite'
    ),
    ['x7d763x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.localite'
    ),
    ['x7d754x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.design_lieu_travail'
    ),
    ['x7d753x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.design_lieu_travail'
    ),
    ['x7d752x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.design_lieu_travail'
    ),
    ['x7d751x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.design_lieu_travail'
    ),
    ['x7d750x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.frais_de_deplacement'
    ),
    ['x7d749x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.frais_de_deplacement'
    ),
    ['x7d748x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.frais_de_deplacement'
    ),
    ['x7d747x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.frais_de_deplacement'
    ),
    ['x7d746x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.frais_obtention'
    ),
    ['x7d745x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.frais_obtention'
    ),
    ['x7d744x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.frais_obtention'
    ),
    ['x7d743x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.frais_obtention'
    ),
    ['x7d742x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.autres_exemptions_texte'
    ),
    ['x7d741x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.autres_exemptions'
    ),
    ['x7d740x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.autres_exemptions'
    ),
    ['x7d739x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.autres_exemptions'
    ),
    ['x7d738x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.autres_exemptions'
    ),
    ['x7d737x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.supplements'
    ),
    ['x7d736x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.supplements'
    ),
    ['x7d735x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.supplements'
    ),
    ['x7d734x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.supplements'
    ),
    ['x7d733x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.salaires'
    ),
    ['x7d732x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.salaires'
    ),
    ['x7d731x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.salaires'
    ),
    ['x7d730x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.salaires'
    ),
    ['x7d725x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.salaire_brut'
    ),
    ['x7d724x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.salaire_brut'
    ),
    ['x7d723x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.salaire_brut'
    ),
    ['x7d722x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.salaire_brut'
    ),
    ['x7d717x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.autres'
    ),
    ['x7d716x']: _.get(client, 'occup_salariee.rev_exo.contribuable.autres'),
    ['x7d715x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.autres'
    ),
    ['x7d714x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.autres'
    ),
    ['x7d713x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.autres_texte'
    ),
    ['x7d712x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.prestations'
    ),
    ['x7d711x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.prestations'
    ),
    ['x7d710x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.prestations'
    ),
    ['x7d709x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.prestations'
    ),
    ['x7d708x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.deuxieme_contrat'
    ),
    ['x7d707x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.deuxieme_contrat'
    ),
    ['x7d706x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.deuxieme_contrat'
    ),
    ['x7d705x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.deuxieme_contrat'
    ),
    ['x7d704x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.premier_contrat'
    ),
    ['x7d703x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.premier_contrat'
    ),
    ['x7d702x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.premier_contrat'
    ),
    ['x7d701x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.premier_contrat'
    ),
    // Page 8
    ['x8d846x']: _.get(client, 'pension.abattement_extra_pro.rente_date', ''),
    ['x8d844x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.a_deduire.totalABC',
      ''
    ),
    ['x8d843x']: _.get(
      client,
      'pension.rev_exo.contribuable.a_deduire.totalABC',
      ''
    ),
    ['x8d842x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.a_deduire.totalABC',
      ''
    ),
    ['x8d841x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.a_deduire.totalABC',
      ''
    ),
    ['x8d840x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.a_deduire.frais_obtention',
      ''
    ),
    ['x8d839x']: _.get(
      client,
      'pension.rev_exo.contribuable.a_deduire.frais_obtention',
      ''
    ),
    ['x8d838x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.a_deduire.frais_obtention',
      ''
    ),
    ['x8d837x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.a_deduire.frais_obtention',
      ''
    ),
    ['x8d836x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.totalABC',
      ''
    ),
    ['x8d835x']: _.get(client, 'pension.rev_exo.contribuable.totalABC', ''),
    ['x8d834x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.totalABC',
      ''
    ),
    ['x8d833x']: _.get(client, 'pension.rev_non_exo.contribuable.totalABC', ''),
    ['x8d832x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.totalBC',
      ''
    ),
    ['x8d831x']: _.get(client, 'pension.rev_exo.contribuable.totalBC', ''),
    ['x8d830x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.totalBC',
      ''
    ),
    ['x8d829x']: _.get(client, 'pension.rev_non_exo.contribuable.totalBC', ''),
    ['x8d828x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.c.exemption',
      ''
    ),
    ['x8d827x']: _.get(client, 'pension.rev_exo.contribuable.c.exemption', ''),
    ['x8d826x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.c.exemption',
      ''
    ),
    ['x8d825x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.c.exemption',
      ''
    ),
    ['x8d824x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.c.arrerages',
      ''
    ),
    ['x8d823x']: _.get(client, 'pension.rev_exo.contribuable.c.arrerages', ''),
    ['x8d822x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.c.arrerages',
      ''
    ),
    ['x8d821x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.c.arrerages',
      ''
    ),
    ['x8d820x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.b.exemption',
      ''
    ),
    ['x8d819x']: _.get(client, 'pension.rev_exo.contribuable.b.exemption', ''),
    ['x8d818x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.b.exemption',
      ''
    ),
    ['x8d817x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.b.exemption',
      ''
    ),
    ['x8d816x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.b.rentes',
      ''
    ),
    ['x8d815x']: _.get(client, 'pension.rev_exo.contribuable.b.rentes', ''),
    ['x8d814x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.b.rentes',
      ''
    ),
    ['x8d813x']: _.get(client, 'pension.rev_non_exo.contribuable.b.rentes', ''),
    ['x8d812x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.a.total',
      ''
    ),
    ['x8d811x']: _.get(client, 'pension.rev_exo.contribuable.a.total', ''),
    ['x8d810x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.a.total',
      ''
    ),
    ['x8d809x']: _.get(client, 'pension.rev_non_exo.contribuable.a.total', ''),
    ['x8d808x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.a.pensions_extra',
      ''
    ),
    ['x8d807x']: _.get(
      client,
      'pension.rev_exo.contribuable.a.pensions_extra',
      ''
    ),
    ['x8d806x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.a.pensions_extra',
      ''
    ),
    ['x8d805x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.a.pensions_extra',
      ''
    ),
    ['x8d804x']: _.get(
      client,
      'pension.rev_exo.conjoint_partenaire.a.pensions',
      ''
    ),
    ['x8d803x']: _.get(client, 'pension.rev_exo.contribuable.a.pensions', ''),
    ['x8d802x']: _.get(
      client,
      'pension.rev_non_exo.conjoint_partenaire.a.pensions',
      ''
    ),
    ['x8d801x']: _.get(
      client,
      'pension.rev_non_exo.contribuable.a.pensions',
      ''
    ),
    ['x8d845x']: _.get(
      client,
      'pension.abattement_extra_pro.is_demande',
      'Off'
    ),
    // Page 9
    ['x9d940x']: _.get(client, 'capitaux.rev_exo.totalBCD_cal', ''),
    ['x9d939x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.a_deduire.totalBCD_deductions',
      ''
    ),
    ['x9d938x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.a_deduire.totalBCD_deductions',
      ''
    ),
    ['x9d937x']: _.get(client, 'capitaux.rev_non_exo.totalBCD_cal', ''),
    ['x9d936x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.a_deduire.totalBCD_deductions',
      ''
    ),
    ['x9d935x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.a_deduire.totalBCD_deductions',
      ''
    ),
    ['x9d934x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.a_deduire.tranche',
      ''
    ),
    ['x9d933x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.a_deduire.tranche',
      ''
    ),
    ['x9d932x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.a_deduire.tranche',
      ''
    ),
    ['x9d931x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.a_deduire.tranche',
      ''
    ),
    ['x9d930x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.a_deduire.frais_obtention',
      ''
    ),
    ['x9d929x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.a_deduire.frais_obtention',
      ''
    ),
    ['x9d928x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.a_deduire.frais_obtention',
      ''
    ),
    ['x9d927x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.a_deduire.frais_obtention',
      ''
    ),
    ['x9d926x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.totalBCD',
      ''
    ),
    ['x9d925x']: _.get(client, 'capitaux.rev_exo.contribuable.totalBCD', ''),
    ['x9d924x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.totalBCD',
      ''
    ),
    ['x9d923x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.totalBCD',
      ''
    ),
    ['x9d922x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.autres_revenus',
      ''
    ),
    ['x9d921x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.autres_revenus',
      ''
    ),
    ['x9d920x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.autres_revenus',
      ''
    ),
    ['x9d919x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.autres_revenus',
      ''
    ),
    ['x9d918x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.c.interets_obligations',
      ''
    ),
    ['x9d917x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.c.interets_obligations',
      ''
    ),
    ['x9d916x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.c.interets_obligations',
      ''
    ),
    ['x9d915x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.c.interets_obligations',
      ''
    ),
    ['x9d914x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.c.revenus_alloues',
      ''
    ),
    ['x9d913x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.c.revenus_alloues',
      ''
    ),
    ['x9d912x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.c.revenus_alloues',
      ''
    ),
    ['x9d911x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.c.revenus_alloues',
      ''
    ),
    ['x9d910x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.c.produits_valeurs_non_vises',
      ''
    ),
    ['x9d909x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.c.produits_valeurs_non_vises',
      ''
    ),
    ['x9d908x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.c.produits_valeurs_non_vises',
      ''
    ),
    ['x9d907x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.c.produits_valeurs_non_vises',
      ''
    ),
    ['x9d906x']: _.get(
      client,
      'capitaux.rev_exo.conjoint_partenaire.c.produits_valeurs_double_imp',
      ''
    ),
    ['x9d905x']: _.get(
      client,
      'capitaux.rev_exo.contribuable.c.produits_valeurs_double_imp',
      ''
    ),
    ['x9d904x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.c.produits_valeurs_double_imp',
      ''
    ),
    ['x9d903x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.c.produits_valeurs_double_imp',
      ''
    ),
    ['x9d902x']: _.get(
      client,
      'capitaux.rev_non_exo.conjoint_partenaire.revenus_passibles',
      ''
    ),
    ['x9d901x']: _.get(
      client,
      'capitaux.rev_non_exo.contribuable.revenus_passibles',
      ''
    ),
    // Page 10
    ['x10d1062x']: _.get(
      client,
      'location.interets_debiteurs.habitationB.interets.conjoint_partenaire',
      ''
    ),
    ['x10d1061x']: _.get(
      client,
      'location.interets_debiteurs.habitationB.interets.contribuable',
      ''
    ),
    ['x10d1060x']: _.get(
      client,
      'location.interets_debiteurs.habitationA.interets.conjoint_partenaire',
      ''
    ),
    ['x10d1059x']: _.get(
      client,
      'location.interets_debiteurs.habitationA.interets.contribuable',
      ''
    ),
    ['x10d1058x']: _.get(
      client,
      'location.interets_debiteurs.habitationB.date_occupation',
      ''
    ),
    ['x10d1057x']: _.get(
      client,
      'location.interets_debiteurs.habitationA.date_occupation',
      ''
    ),
    ['x10d1056x']: _.get(
      client,
      'location.interets_debiteurs.habitationB.rue',
      ''
    ),
    ['x10d1055x']: _.get(
      client,
      'location.interets_debiteurs.habitationB.numero',
      ''
    ),
    ['x10d1054x']: _.get(
      client,
      'location.interets_debiteurs.habitationA.rue',
      ''
    ),
    ['x10d1053x']: _.get(
      client,
      'location.interets_debiteurs.habitationA.numero',
      ''
    ),
    ['x10d1052x']: _.get(
      client,
      'location.interets_debiteurs.habitationB.habitation',
      ''
    ),
    ['x10d1051x']: _.get(
      client,
      'location.interets_debiteurs.habitationA.habitation',
      ''
    ),
    ['x10d1050x']: _.get(
      client,
      'location.interets_debiteurs.table2.conjoint_partenaire.interets_debiteurs3',
      ''
    ),
    ['x10d1049x']: _.get(
      client,
      'location.interets_debiteurs.table2.contribuable.interets_debiteurs3',
      ''
    ),
    ['x10d1047x']: _.get(
      client,
      'location.interets_debiteurs.table1.r3.dette',
      ''
    ),
    ['x10d1046x']: _.get(
      client,
      'location.interets_debiteurs.table1.r3.relation',
      ''
    ),
    ['x10d1045x']: _.get(
      client,
      'location.interets_debiteurs.table1.r3.etablissement',
      ''
    ),
    ['x10d1044x']: _.get(
      client,
      'location.interets_debiteurs.table2.conjoint_partenaire.interets_debiteurs2',
      ''
    ),
    ['x10d1043x']: _.get(
      client,
      'location.interets_debiteurs.table2.contribuable.interets_debiteurs2',
      ''
    ),
    ['x10d1042x']: _.get(
      client,
      'location.interets_debiteurs.table1.r2.dette',
      ''
    ),
    ['x10d1041x']: _.get(
      client,
      'location.interets_debiteurs.table1.r2.relation',
      ''
    ),
    ['x10d1040x']: _.get(
      client,
      'location.interets_debiteurs.table1.r2.etablissement',
      ''
    ),
    ['x10d1039x']: _.get(
      client,
      'location.interets_debiteurs.table2.conjoint_partenaire.interets_debiteurs1',
      ''
    ),
    ['x10d1038x']: _.get(
      client,
      'location.interets_debiteurs.table2.contribuable.interets_debiteurs1',
      ''
    ),
    ['x10d1037x']: _.get(
      client,
      'location.interets_debiteurs.table1.r1.dette',
      ''
    ),
    ['x10d1036x']: _.get(
      client,
      'location.interets_debiteurs.table1.r1.relation',
      ''
    ),
    ['x10d1035x']: _.get(
      client,
      'location.interets_debiteurs.table1.r1.etablissement',
      ''
    ),
    ['x10d1034x']: _.get(client, 'location.rev_exo.totalCal', ''),
    ['x10d1033x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.f.total',
      ''
    ),
    ['x10d1032x']: _.get(client, 'location.rev_exo.contribuable.f.total', ''),
    ['x10d1031x']: _.get(client, 'location.rev_non_exo.totalCal', ''),
    ['x10d1030x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.f.total',
      ''
    ),
    ['x10d1029x']: _.get(
      client,
      'location.rev_non_exo.contribuable.f.total',
      ''
    ),
    ['x10d1028x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.f.part_non_deduite',
      ''
    ),
    ['x10d1027x']: _.get(
      client,
      'location.rev_exo.contribuable.f.part_non_deduite',
      ''
    ),
    ['x10d1026x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.f.part_non_deduite',
      ''
    ),
    ['x10d1025x']: _.get(
      client,
      'location.rev_non_exo.contribuable.f.part_non_deduite',
      ''
    ),
    ['x10d1024x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.f.interets_debiteurs',
      ''
    ),
    ['x10d1023x']: _.get(
      client,
      'location.rev_exo.contribuable.f.interets_debiteurs',
      ''
    ),
    ['x10d1022x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.f.interets_debiteurs',
      ''
    ),
    ['x10d1021x']: _.get(
      client,
      'location.rev_non_exo.contribuable.f.interets_debiteurs',
      ''
    ),
    ['x10d1020x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.perte_location',
      ''
    ),
    ['x10d1019x']: _.get(
      client,
      'location.rev_exo.contribuable.perte_location',
      ''
    ),
    ['x10d1018x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.perte_location',
      ''
    ),
    ['x10d1017x']: _.get(
      client,
      'location.rev_non_exo.contribuable.perte_location',
      ''
    ),
    ['x10d1016x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.revenu_redevances',
      ''
    ),
    ['x10d1015x']: _.get(
      client,
      'location.rev_exo.contribuable.revenu_redevances',
      ''
    ),
    ['x10d1014x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.revenu_redevances',
      ''
    ),
    ['x10d1013x']: _.get(
      client,
      'location.rev_non_exo.contribuable.revenu_redevances',
      ''
    ),
    ['x10d1012x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.revenu_concession',
      ''
    ),
    ['x10d1011x']: _.get(
      client,
      'location.rev_exo.contribuable.revenu_concession',
      ''
    ),
    ['x10d1010x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.revenu_concession',
      ''
    ),
    ['x10d1009x']: _.get(
      client,
      'location.rev_non_exo.contribuable.revenu_concession',
      ''
    ),
    ['x10d1008x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.parts_revenu',
      ''
    ),
    ['x10d1007x']: _.get(
      client,
      'location.rev_exo.contribuable.parts_revenu',
      ''
    ),
    ['x10d1006x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.parts_revenu',
      ''
    ),
    ['x10d1005x']: _.get(
      client,
      'location.rev_non_exo.contribuable.parts_revenu',
      ''
    ),
    ['x10d1004x']: _.get(
      client,
      'location.rev_exo.conjoint_partenaire.revenu_location',
      ''
    ),
    ['x10d1003x']: _.get(
      client,
      'location.rev_exo.contribuable.revenu_location',
      ''
    ),
    ['x10d1002x']: _.get(
      client,
      'location.rev_non_exo.conjoint_partenaire.revenu_location',
      ''
    ),
    ['x10d1001x']: _.get(
      client,
      'location.rev_non_exo.contribuable.revenu_location',
      ''
    ),
    // Page 11
    ['x11d1169x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.prix',
      ''
    ),
    ['x11d1168x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.adresse',
      ''
    ),
    ['x11d1167x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.superficie',
      ''
    ),
    ['x11d1166x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.situation',
      ''
    ),
    ['x11d1165x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.nature_bien',
      ''
    ),
    ['x11d1164x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.cession',
      ''
    ),
    ['x11d1163x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r5.acquisition',
      ''
    ),
    ['x11d1162x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.prix',
      ''
    ),
    ['x11d1161x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.adresse',
      ''
    ),
    ['x11d1160x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.superficie',
      ''
    ),
    ['x11d1159x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.situation',
      ''
    ),
    ['x11d1158x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.nature_bien',
      ''
    ),
    ['x11d1157x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.cession',
      ''
    ),
    ['x11d1156x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r4.acquisition',
      ''
    ),
    ['x11d1155x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.prix',
      ''
    ),
    ['x11d1154x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.adresse',
      ''
    ),
    ['x11d1153x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.superficie',
      ''
    ),
    ['x11d1152x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.situation',
      ''
    ),
    ['x11d1151x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.nature_bien',
      ''
    ),
    ['x11d1150x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.cession',
      ''
    ),
    ['x11d1149x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r3.acquisition',
      ''
    ),
    ['x11d1148x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.prix',
      ''
    ),
    ['x11d1147x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.adresse',
      ''
    ),
    ['x11d1146x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.superficie',
      ''
    ),
    ['x11d1145x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.situation',
      ''
    ),
    ['x11d1144x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.nature_bien',
      ''
    ),
    ['x11d1143x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.cession',
      ''
    ),
    ['x11d1142x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r2.acquisition',
      ''
    ),
    ['x11d1141x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.prix',
      ''
    ),
    ['x11d1140x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.adresse',
      ''
    ),
    ['x11d1139x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.superficie',
      ''
    ),
    ['x11d1138x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.situation',
      ''
    ),
    ['x11d1137x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.nature_bien',
      ''
    ),
    ['x11d1136x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.cession',
      ''
    ),
    ['x11d1135x']: _.get(
      client,
      'rev_nets_divers.acquisitions_et_cessions.table.r1.acquisition',
      ''
    ),
    ['x11d1134x']: _.get(client, 'rev_nets_divers.rev_exo.totalCal', ''),
    ['x11d1133x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.total',
      ''
    ),
    ['x11d1132x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.total',
      ''
    ),
    ['x11d1131x']: _.get(client, 'rev_nets_divers.rev_non_exo.totalCal', ''),
    ['x11d1130x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.total',
      ''
    ),
    ['x11d1129x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.total',
      ''
    ),
    ['x11d1128x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.autre_remboursement',
      ''
    ),
    ['x11d1127x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.autre_remboursement',
      ''
    ),
    ['x11d1126x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.autre_remboursement',
      ''
    ),
    ['x11d1125x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.autre_remboursement',
      ''
    ),
    ['x11d1124x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.remboursement',
      ''
    ),
    ['x11d1123x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.remboursement',
      ''
    ),
    ['x11d1122x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.remboursement',
      ''
    ),
    ['x11d1121x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.remboursement',
      ''
    ),
    ['x11d1120x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.revenu_prestations.frais_obtention',
      ''
    ),
    ['x11d1119x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.revenu_prestations.frais_obtention',
      ''
    ),
    ['x11d1118x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.revenu_prestations.frais_obtention',
      ''
    ),
    ['x11d1117x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.revenu_prestations.frais_obtention',
      ''
    ),
    ['x11d1116x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.revenu_prestations.recettes',
      ''
    ),
    ['x11d1115x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.revenu_prestations.recettes',
      ''
    ),
    ['x11d1114x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.revenu_prestations.recettes',
      ''
    ),
    ['x11d1113x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.revenu_prestations.recettes',
      ''
    ),
    ['x11d1112x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.revenu_plus_values.benefice_cession',
      ''
    ),
    ['x11d1111x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.revenu_plus_values.benefice_cession',
      ''
    ),
    ['x11d1110x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.revenu_plus_values.benefice_cession',
      ''
    ),
    ['x11d1109x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.revenu_plus_values.benefice_cession',
      ''
    ),
    ['x11d1108x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.revenu_plus_values.benefice_speculation',
      ''
    ),
    ['x11d1107x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.revenu_plus_values.benefice_speculation',
      ''
    ),
    ['x11d1106x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.revenu_plus_values.benefice_speculation',
      ''
    ),
    ['x11d1105x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.revenu_plus_values.benefice_speculation',
      ''
    ),
    ['x11d1104x']: _.get(
      client,
      'rev_nets_divers.rev_exo.conjoint_partenaire.revenu_cession',
      ''
    ),
    ['x11d1103x']: _.get(
      client,
      'rev_nets_divers.rev_exo.contribuable.revenu_cession',
      ''
    ),
    ['x11d1102x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.conjoint_partenaire.revenu_cession',
      ''
    ),
    ['x11d1101x']: _.get(
      client,
      'rev_nets_divers.rev_non_exo.contribuable.revenu_cession',
      ''
    )
  }
}
