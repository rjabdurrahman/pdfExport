const _ = require('lodash')
module.exports = function serializeInfo (client) {
  return {
    ['x0d1x']: _.get(
      client,
      'Bureaux_d_imposition',
      ''
    ),
    ['x0d2x']: _.get(
      client,
      'Bureaux_d_imposition_adress',
      ''
    ),
    // Page 1
    ['x1d40x']: _.get(
      client,
      'signaletique.coordonnees_bancaires.swift_bic',
      ''
    ),
    ['x1d39x']: _.get(
      client,
      'signaletique.coordonnees_bancaires.code_iban',
      ''
    ),
    ['x1d38x']: _.get(
      client,
      'signaletique.coordonnees_bancaires.titulaire_du_compte',
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
    ['x2d4x']: _.get(client, 'enfants.a[0].is_demande_moderation', 'Off'),
    ['x2d8x']: _.get(client, 'enfants.a[1].is_demande_moderation', 'Off'),
    ['x2d12x']: _.get(client, 'enfants.a[2].is_demande_moderation', 'Off'),
    ['x2d16x']: _.get(client, 'enfants.a[3].is_demande_moderation', 'Off'),
    ['x2d20x']: _.get(client, 'enfants.b[0].is_demande_moderation', 'Off'),
    ['x2d25x']: _.get(client, 'enfants.b[1].is_demande_moderation', 'Off'),
    ['x2d30x']: _.get(client, 'enfants.b[2].is_demande_moderation', 'Off'),
    ['x2d35x']: _.get(client, 'enfants.c.is_demande_moderation', 'Off'),
    ['x2d36x']: _.get(client, 'enfants.demande_cim.is_demande_cim', 'Off'),
    ['x2d45x']: _.get(
      client,
      'enfants.demande_bonification_impot.is_demande_bonification_impot',
      'Off'
    ),
    // Page 3
    ['x3d29x']: _.get(
      client,
      'etat_civil.assimilation.is_declaration_revocation',
      'Off'
    ),
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
    ['x3d1x']: _.get(client, 'etat_civil.statut', ''),
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
      'etat_civil.assimilation.c.revenus_professionnels',
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
    ['x4dn14x']: _.get(
      client,
      'options.imposition_individuelle.imposition',
      ''
    ),
    ['x4dn13x']: _.get(
      client,
      'options.imposition_individuelle.is_declaration_revocation',
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
    ['x4d3x']: _.get(client, 'options.partenaires.declaration_partenariat', ''),
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
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.conjoint_partenaire.total_abcd',
      ''
    ),
    ['x5d27x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_exoneres.contribuable.total_abcd',
      ''
    ),
    ['x5d26x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.conjoint_partenaire.total_abcd',
      ''
    ),
    ['x5d25x']: _.get(
      client,
      'benefice_commercial.determination_benefice_commercial.revenus_non_exoneres.contribuable.total_abcd',
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
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.conjoint_partenaire.total_abcd'
    ),
    ['x5d60x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_exo.contribuable.total_abcd'
    ),
    ['x5d59x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.conjoint_partenaire.total_abcd'
    ),
    ['x5d58x']: _.get(
      client,
      'benefice_commercial.determination_benefice_agricole_et_forestier.rev_non_exo.contribuable.total_abcd'
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
    ['x6d40x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.depenses_e'
    ),
    ['x6d39x']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses_e'),
    ['x6d38x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses_e'
    ),
    ['x6d37x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses_e'),
    ['x6d36x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.montant_brut_e'
    ),
    ['x6d35x']: _.get(client, 'ben_prov.rev_exo.contribuable.montant_brut_e'),
    ['x6d34x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.montant_brut_e'
    ),
    ['x6d33x']: _.get(
      client,
      'ben_prov.rev_non_exo.contribuable.montant_brut_e'
    ),
    ['x6d32x']: _.get(client, 'ben_prov.rev_exo.conjoint_partenaire.total1'),
    ['x6d31x']: _.get(client, 'ben_prov.rev_exo.contribuable.total1'),
    ['x6d30x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.total1'
    ),
    ['x6d29x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.total1'),
    ['x6d28x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.depenses_d'
    ),
    ['x6d27x']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses_d'),
    ['x6d26x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses_d'
    ),
    ['x6d25x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses_d'),
    ['x6d24x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.montant_brut_d'
    ),
    ['x6d23x']: _.get(client, 'ben_prov.rev_exo.contribuable.montant_brut_d'),
    ['x6d22x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.montant_brut_d'
    ),
    ['x6d21x']: _.get(
      client,
      'ben_prov.rev_non_exo.contribuable.montant_brut_d'
    ),
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
    ['x6d12x']: _.get(
      client,
      'ben_prov.rev_exo.conjoint_partenaire.depenses_a'
    ),
    ['x6d11x']: _.get(client, 'ben_prov.rev_exo.contribuable.depenses_a'),
    ['x6d10x']: _.get(
      client,
      'ben_prov.rev_non_exo.conjoint_partenaire.depenses_a'
    ),
    ['x6d9x']: _.get(client, 'ben_prov.rev_non_exo.contribuable.depenses_a'),
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
    ['x7d785x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.conjoint_partenaire.frequence.par_mois_semaine'
    ),
    ['x7d783x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu2.contribuable.frequence.par_mois_semaine'
    ),
    ['x7d781x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.conjoint_partenaire.frequence.par_mois_semaine'
    ),
    ['x7d779x']: _.get(
      client,
      'occup_salariee.plusieurs_lieux.lieu1.contribuable.frequence.par_mois_semaine'
    ),
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
    ['x7d762x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.totalABCDE',
      ''
    ),
    ['x7d761x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.totalABCDE',
      ''
    ),
    ['x7d760x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.totalABCDE',
      ''
    ),
    ['x7d759x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.totalABCDE',
      ''
    ),
    ['x7d758x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.a_deduire.total_deduction',
      ''
    ),
    ['x7d757x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.a_deduire.total_deduction',
      ''
    ),
    ['x7d756x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.a_deduire.total_deduction',
      ''
    ),
    ['x7d755x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.a_deduire.total_deduction',
      ''
    ),
    ['x7d729x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.totalABCDE',
      ''
    ),
    ['x7d728x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.totalABCDE',
      ''
    ),
    ['x7d727x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.totalABCDE',
      ''
    ),
    ['x7d726x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.totalABCDE',
      ''
    ),
    ['x7d721x']: _.get(
      client,
      'occup_salariee.rev_exo.conjoint_partenaire.totalABCD',
      ''
    ),
    ['x7d720x']: _.get(
      client,
      'occup_salariee.rev_exo.contribuable.totalABCD',
      ''
    ),
    ['x7d719x']: _.get(
      client,
      'occup_salariee.rev_non_exo.conjoint_partenaire.totalABCD',
      ''
    ),
    ['x7d718x']: _.get(
      client,
      'occup_salariee.rev_non_exo.contribuable.totalABCD',
      ''
    ),
    // Page 8
    ['x8d846x']: _.get(client, 'pension.abattement_extra_pro.rente_date', ''),
    ['x8d843_44x']: _.get(
      client,
      'pension.rev_exo.total',
      ''
    ),
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
    ),
    // Page 12
    ['x12d1227x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.article_133_total',
      ''
    ),
    ['x12d1226x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.article_133',
      ''
    ),
    ['x12d1225x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.article_133',
      ''
    ),
    ['x12d1224x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.article_132_pourcentage_25_total',
      ''
    ),
    ['x12d1223x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.article_132_pourcentage_25',
      ''
    ),
    ['x12d1222x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.article_132_pourcentage_25',
      ''
    ),
    ['x12d1221x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.article_132_pourcentage_50_total',
      ''
    ),
    ['x12d1220x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.article_132_pourcentage_50',
      ''
    ),
    ['x12d1219x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.article_132_pourcentage_50',
      ''
    ),
    ['x12d1218x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.article_132_etalement_total',
      ''
    ),
    ['x12d1217x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.article_132_etalement',
      ''
    ),
    ['x12d1216x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.article_132_etalement',
      ''
    ),
    ['x12d1215x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.totaux',
      ''
    ),
    ['x12d1214x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.totaux',
      ''
    ),
    ['x12d1213x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.r4',
      ''
    ),
    ['x12d1212x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.r4',
      ''
    ),
    ['x12d1211x']: _.get(
      client,
      'rev_extraordinaires_ord.nature_revenus.r4',
      ''
    ),
    ['x12d1210x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.r3',
      ''
    ),
    ['x12d1209x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.r3',
      ''
    ),
    ['x12d1208x']: _.get(
      client,
      'rev_extraordinaires_ord.nature_revenus.r3',
      ''
    ),
    ['x12d1207x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.r2',
      ''
    ),
    ['x12d1206x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.r2',
      ''
    ),
    ['x12d1205x']: _.get(
      client,
      'rev_extraordinaires_ord.nature_revenus.r2',
      ''
    ),
    ['x12d1204x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.conjoint_partenaire.r1',
      ''
    ),
    ['x12d1203x']: _.get(
      client,
      'rev_extraordinaires_ord.rev_non_expo.table.contribuable.r1',
      ''
    ),
    ['x12d1202x']: _.get(
      client,
      'rev_extraordinaires_ord.nature_revenus.r1',
      ''
    ),
    ['x12d1201x']: _.get(client, 'rev_extraordinaires_ord.is_demande', 'Off'),
    // Page 13
    ['x13d1343x']: _.get(client, 'arrerages.table.r6.charges2', ''),
    ['x13d1342x']: _.get(client, 'arrerages.table.r6.charges1', ''),
    ['x13d1341x']: _.get(client, 'arrerages.table.r6.deduction', ''),
    ['x13d1340x']: _.get(client, 'arrerages.table.r6.nature_rente', ''),
    ['x13d1339x']: _.get(client, 'arrerages.table.r6.adresse', ''),
    ['x13d1338x']: _.get(client, 'arrerages.table.r5.charges2', ''),
    ['x13d1337x']: _.get(client, 'arrerages.table.r5.charges1', ''),
    ['x13d1336x']: _.get(client, 'arrerages.table.r5.deduction', ''),
    ['x13d1335x']: _.get(client, 'arrerages.table.r5.nature_rente', ''),
    ['x13d1334x']: _.get(client, 'arrerages.table.r5.adresse', ''),
    ['x13d1333x']: _.get(client, 'arrerages.table.r4.charges2', ''),
    ['x13d1332x']: _.get(client, 'arrerages.table.r4.charges1', ''),
    ['x13d1331x']: _.get(client, 'arrerages.table.r4.deduction', ''),
    ['x13d1330x']: _.get(client, 'arrerages.table.r4.nature_rente', ''),
    ['x13d1329x']: _.get(client, 'arrerages.table.r4.adresse', ''),
    ['x13d1328x']: _.get(client, 'arrerages.table.r3.charges2', ''),
    ['x13d1327x']: _.get(client, 'arrerages.table.r3.charges1', ''),
    ['x13d1326x']: _.get(client, 'arrerages.table.r3.deduction', ''),
    ['x13d1325x']: _.get(client, 'arrerages.table.r3.nature_rente', ''),
    ['x13d1324x']: _.get(client, 'arrerages.table.r3.adresse', ''),
    ['x13d1323x']: _.get(client, 'arrerages.table.r2.charges2', ''),
    ['x13d1322x']: _.get(client, 'arrerages.table.r2.charges1', ''),
    ['x13d1321x']: _.get(client, 'arrerages.table.r2.deduction', ''),
    ['x13d1320x']: _.get(client, 'arrerages.table.r2.nature_rente', ''),
    ['x13d1319x']: _.get(client, 'arrerages.table.r2.adresse', ''),
    ['x13d1318x']: _.get(client, 'arrerages.table.r1.charges2', ''),
    ['x13d1317x']: _.get(client, 'arrerages.table.r1.charges1', ''),
    ['x13d1316x']: _.get(client, 'arrerages.table.r1.deduction', ''),
    ['x13d1315x']: _.get(client, 'arrerages.table.r1.nature_rente', ''),
    ['x13d1314x']: _.get(client, 'arrerages.table.r1.adresse', ''),
    ['x13d1313x']: _.get(
      client,
      'arrerages.contribuable.paiements.decision_avant_total',
      ''
    ),
    ['x13d1312x']: _.get(
      client,
      'arrerages.conjoint_partenaire.paiements.decision_avant',
      ''
    ),
    ['x13d1311x']: _.get(
      client,
      'arrerages.contribuable.paiements.decision_avant',
      ''
    ),
    ['x13d1310x']: _.get(client, 'arrerages.is_demande', ''),
    ['x13d1309x']: _.get(
      client,
      'arrerages.contribuable.paiements.decision_apres_total',
      ''
    ),
    ['x13d1308x']: _.get(
      client,
      'arrerages.conjoint_partenaire.paiements.decision_apres',
      ''
    ),
    ['x13d1307x']: _.get(
      client,
      'arrerages.contribuable.paiements.decision_apres',
      ''
    ),
    ['x13d1306x']: _.get(
      client,
      'arrerages.contribuable.paiements.occasion_total',
      ''
    ),
    ['x13d1305x']: _.get(
      client,
      'arrerages.conjoint_partenaire.paiements.occasion',
      ''
    ),
    ['x13d1304x']: _.get(
      client,
      'arrerages.contribuable.paiements.occasion',
      ''
    ),
    ['x13d1303x']: _.get(
      client,
      'arrerages.contribuable.obligation_particuliere_total',
      ''
    ),
    ['x13d1302x']: _.get(
      client,
      'arrerages.conjoint_partenaire.obligation_particuliere',
      ''
    ),
    ['x13d1301x']: _.get(
      client,
      'arrerages.contribuable.obligation_particuliere',
      ''
    ),
    // Page 14
    ['x14d1477x']: _.get(
      client,
      'depenses_speciales14.majoration_plafond.conjoint_partenaire.nombre_enfants',
      ''
    ),
    ['x14d1476x']: _.get(
      client,
      'depenses_speciales14.majoration_plafond.contribuable.nombre_enfants',
      ''
    ),
    ['x14d1475x']: _.get(
      client,
      'depenses_speciales14.majoration_plafond.conjoint_partenaire.is_investissements',
      ''
    ),
    ['x14d1474x']: _.get(
      client,
      'depenses_speciales14.majoration_plafond.contribuable.is_investissements',
      ''
    ),
    ['x14d1473x']: _.get(
      client,
      'depenses_speciales14.majoration_plafond.conjoint_partenaire.is_acquisition',
      ''
    ),
    ['x14d1472x']: _.get(
      client,
      'depenses_speciales14.majoration_plafond.contribuable.is_acquisition',
      ''
    ),
    ['x14d1471x']: _.get(
      client,
      'depenses_speciales14.montant_moins_eleve',
      ''
    ),
    ['x14d1470x']: _.get(client, 'depenses_speciales14.plafond_672', ''),
    ['x14d1469x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.total',
      ''
    ),
    ['x14d1468x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.total',
      ''
    ),
    ['x14d1467x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r8',
      ''
    ),
    ['x14d1466x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r8',
      ''
    ),
    ['x14d1465x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r8.risque',
      ''
    ),
    ['x14d1464x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r8.entreprise',
      ''
    ),
    ['x14d1463x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r7',
      ''
    ),
    ['x14d1462x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r7',
      ''
    ),
    ['x14d1461x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r7.risque',
      ''
    ),
    ['x14d1460x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r7.entreprise',
      ''
    ),
    ['x14d1459x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r6',
      ''
    ),
    ['x14d1458x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r6',
      ''
    ),
    ['x14d1457x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r6.risque',
      ''
    ),
    ['x14d1456x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r6.entreprise',
      ''
    ),
    ['x14d1455x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r5',
      ''
    ),
    ['x14d1454x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r5',
      ''
    ),
    ['x14d1453x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r5.risque',
      ''
    ),
    ['x14d1452x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r5.entreprise',
      ''
    ),
    ['x14d1451x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r4',
      ''
    ),
    ['x14d1450x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r4',
      ''
    ),
    ['x14d1449x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r4.risque',
      ''
    ),
    ['x14d1448x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r4.entreprise',
      ''
    ),
    ['x14d1447x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r3',
      ''
    ),
    ['x14d1446x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r3',
      ''
    ),
    ['x14d1445x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r3.risque',
      ''
    ),
    ['x14d1444x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r3.entreprise',
      ''
    ),
    ['x14d1443x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r2',
      ''
    ),
    ['x14d1442x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r2',
      ''
    ),
    ['x14d1441x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r2.risque',
      ''
    ),
    ['x14d1440x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r2.entreprise',
      ''
    ),
    ['x14d1439x']: _.get(
      client,
      'depenses_speciales14.primes_table2.conjoint_partenaire.r1',
      ''
    ),
    ['x14d1438x']: _.get(
      client,
      'depenses_speciales14.primes_table2.contribuable.r1',
      ''
    ),
    ['x14d1437x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r1.risque',
      ''
    ),
    ['x14d1436x']: _.get(
      client,
      'depenses_speciales14.primes_table1.r1.entreprise',
      ''
    ),
    ['x14d1435x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r7',
      ''
    ),
    ['x14d1434x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r7',
      ''
    ),
    ['x14d1433x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r7.montant',
      ''
    ),
    ['x14d1432x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r7.relation',
      ''
    ),
    ['x14d1431x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r7.adresse',
      ''
    ),
    ['x14d1430x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r6',
      ''
    ),
    ['x14d1429x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r6',
      ''
    ),
    ['x14d1428x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r6.montant',
      ''
    ),
    ['x14d1427x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r6.relation',
      ''
    ),
    ['x14d1426x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r6.adresse',
      ''
    ),
    ['x14d1425x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r5',
      ''
    ),
    ['x14d1424x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r5',
      ''
    ),
    ['x14d1423x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r5.montant',
      ''
    ),
    ['x14d1422x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r5.relation',
      ''
    ),
    ['x14d1421x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r5.adresse',
      ''
    ),
    ['x14d1420x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r4',
      ''
    ),
    ['x14d1419x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r4',
      ''
    ),
    ['x14d1418x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r4.montant',
      ''
    ),
    ['x14d1417x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r4.relation',
      ''
    ),
    ['x14d1416x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r4.adresse',
      ''
    ),
    ['x14d1415x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r3',
      ''
    ),
    ['x14d1414x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r3',
      ''
    ),
    ['x14d1413x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r3.montant',
      ''
    ),
    ['x14d1412x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r3.relation',
      ''
    ),
    ['x14d1411x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r3.adresse',
      ''
    ),
    ['x14d1410x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r2',
      ''
    ),
    ['x14d1409x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r2',
      ''
    ),
    ['x14d1408x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r2.montant',
      ''
    ),
    ['x14d1407x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r2.relation',
      ''
    ),
    ['x14d1406x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r2.adresse',
      ''
    ),
    ['x14d1405x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.conjoint_partenaire.r1',
      ''
    ),
    ['x14d1404x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table2.contribuable.r1',
      ''
    ),
    ['x14d1403x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r1.montant',
      ''
    ),
    ['x14d1402x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r1.relation',
      ''
    ),
    ['x14d1401x']: _.get(
      client,
      'depenses_speciales14.interets_debiteurs_table1.r1.adresse',
      ''
    ),
    // Page 15
    ['x15d1554x']: _.get(
      client,
      'depenses_speciales15.total_depenses_speciales_1',
      ''
    ),
    ['x15d1553x']: _.get(
      client,
      'depenses_speciales15.total_depenses_speciales',
      ''
    ),
    ['x15d1552x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.conjoint_partenaire.plafond_672_1344',
      ''
    ),
    ['x15d1551x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.contribuable.plafond_672_1344',
      ''
    ),
    ['x15d1550x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.conjoint_partenaire.cotisations_versees_total',
      ''
    ),
    ['x15d1549x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.contribuable.cotisations_versees_total',
      ''
    ),
    ['x15d1548x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.conjoint_partenaire.cotisations_versees4',
      ''
    ),
    ['x15d1547x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.contribuable.cotisations_versees4',
      ''
    ),
    ['x15d1546x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[3].debut_contrat',
      ''
    ),
    ['x15d1545x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[3].souscripteur',
      ''
    ),
    ['x15d1544x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[3].caisse',
      ''
    ),
    ['x15d1543x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.conjoint_partenaire.cotisations_versees3',
      ''
    ),
    ['x15d1542x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.contribuable.cotisations_versees3',
      ''
    ),
    ['x15d1541x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[2].debut_contrat',
      ''
    ),
    ['x15d1540x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[2].souscripteur',
      ''
    ),
    ['x15d1539x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[2].caisse',
      ''
    ),
    ['x15d1538x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.conjoint_partenaire.cotisations_versees2',
      ''
    ),
    ['x15d1537x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.contribuable.cotisations_versees2',
      ''
    ),
    ['x15d1536x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[1].debut_contrat',
      ''
    ),
    ['x15d1535x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[1].souscripteur',
      ''
    ),
    ['x15d1534x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[1].caisse',
      ''
    ),
    ['x15d1533x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.conjoint_partenaire.cotisations_versees1',
      ''
    ),
    ['x15d1532x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t2.contribuable.cotisations_versees1',
      ''
    ),
    ['x15d1531x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[0].debut_contrat',
      ''
    ),
    ['x15d1530x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[0].souscripteur',
      ''
    ),
    ['x15d1529x']: _.get(
      client,
      'depenses_speciales15.epargne_logement_t1[0].caisse',
      ''
    ),
    ['x15d1528x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.plafond_3200_total',
      ''
    ),
    ['x15d1527x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.plafond_3200',
      ''
    ),
    ['x15d1526x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.plafond_3200',
      ''
    ),
    ['x15d1525x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.primes_versees_total',
      ''
    ),
    ['x15d1524x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.primes_versees_total',
      ''
    ),
    ['x15d1523x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.primes_versees_4',
      ''
    ),
    ['x15d1522x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.primes_versees_4',
      ''
    ),
    ['x15d1521x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[3].fin_contrat',
      ''
    ),
    ['x15d1520x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[3].debut_contrat',
      ''
    ),
    ['x15d1519x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[3].entreprise',
      ''
    ),
    ['x15d1518x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.primes_versees_3',
      ''
    ),
    ['x15d1517x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.primes_versees_3',
      ''
    ),
    ['x15d1516x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[2].fin_contrat',
      ''
    ),
    ['x15d1515x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[2].debut_contrat',
      ''
    ),
    ['x15d1514x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[2].entreprise',
      ''
    ),
    ['x15d1513x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.primes_versees_2',
      ''
    ),
    ['x15d1512x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.primes_versees_2',
      ''
    ),
    ['x15d1511x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[1].fin_contrat',
      ''
    ),
    ['x15d1510x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[1].debut_contrat',
      ''
    ),
    ['x15d1509x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[1].entreprise',
      ''
    ),
    ['x15d1508x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.conjoint_partenaire.primes_versees_1',
      ''
    ),
    ['x15d1507x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t2.contribuable.primes_versees_1',
      ''
    ),
    ['x15d1506x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[0].fin_contrat',
      ''
    ),
    ['x15d1505x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[0].debut_contrat',
      ''
    ),
    ['x15d1504x']: _.get(
      client,
      'depenses_speciales15.prevoyance_vieillesse_t1[0].entreprise',
      ''
    ),
    ['x15d1503x']: _.get(
      client,
      'depenses_speciales15.cotisations_payees.total',
      ''
    ),
    ['x15d1502x']: _.get(
      client,
      'depenses_speciales15.cotisations_payees.conjoint_partenaire.cotisations',
      ''
    ),
    ['x15d1501x']: _.get(
      client,
      'depenses_speciales15.cotisations_payees.contribuable.cotisations',
      ''
    ),
    // Page 16
    ['x16d1653x']: _.get(client, 'depenses_speciales.total_des_depenses', ''),
    ['x16d1652x']: _.get(
      client,
      'depenses_speciales.pertes_exploitation.pertes_reportables.rev_exo.total_pertes_total',
      ''
    ),
    ['x16d1651x']: _.get(
      client,
      'depenses_speciales.pertes_exploitation.pertes_reportables.rev_exo.conjoint_partenaire.total_pertes',
      ''
    ),
    ['x16d1650x']: _.get(
      client,
      'depenses_speciales.pertes_exploitation.pertes_reportables.rev_exo.contribuable.total_pertes',
      ''
    ),
    ['x16d1649x']: _.get(
      client,
      'depenses_speciales.pertes_exploitation.pertes_reportables.rev_non_exo.total_pertes_total',
      ''
    ),
    ['x16d1648x']: _.get(
      client,
      'depenses_speciales.pertes_exploitation.pertes_reportables.rev_non_exo.conjoint_partenaire.total_pertes',
      ''
    ),
    ['x16d1647x']: _.get(
      client,
      'depenses_speciales.pertes_exploitation.pertes_reportables.rev_non_exo.contribuable.total_pertes',
      ''
    ),
    ['x16d1646x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.total_plus_total',
      ''
    ),
    ['x16d1645x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.total_liberalites',
      ''
    ),
    ['x16d1644x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.total_liberalites',
      ''
    ),
    ['x16d1643x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.r6',
      ''
    ),
    ['x16d1642x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.r6',
      ''
    ),
    ['x16d1641x']: _.get(
      client,
      'depenses_speciales.liberalites.beneficiaire.r6',
      ''
    ),
    ['x16d1640x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.r5',
      ''
    ),
    ['x16d1639x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.r5',
      ''
    ),
    ['x16d1638x']: _.get(
      client,
      'depenses_speciales.liberalites.beneficiaire.r5',
      ''
    ),
    ['x16d1637x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.r4',
      ''
    ),
    ['x16d1636x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.r4',
      ''
    ),
    ['x16d1635x']: _.get(
      client,
      'depenses_speciales.liberalites.beneficiaire.r4',
      ''
    ),
    ['x16d1634x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.r3',
      ''
    ),
    ['x16d1633x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.r3',
      ''
    ),
    ['x16d1632x']: _.get(
      client,
      'depenses_speciales.liberalites.beneficiaire.r3',
      ''
    ),
    ['x16d1631x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.r2',
      ''
    ),
    ['x16d1630x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.r2',
      ''
    ),
    ['x16d1629x']: _.get(
      client,
      'depenses_speciales.liberalites.beneficiaire.r2',
      ''
    ),
    ['x16d1628x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.conjoint_partenaire.r1',
      ''
    ),
    ['x16d1627x']: _.get(
      client,
      'depenses_speciales.liberalites.liberalites_2019.contribuable.r1',
      ''
    ),
    ['x16d1626x']: _.get(
      client,
      'depenses_speciales.liberalites.beneficiaire.r1',
      ''
    ),
    ['x16d1625x']: _.get(
      client,
      'depenses_speciales.liberalites.report_2018.total',
      ''
    ),
    ['x16d1624x']: _.get(
      client,
      'depenses_speciales.liberalites.report_2018.conjoint_partenaire',
      ''
    ),
    ['x16d1623x']: _.get(
      client,
      'depenses_speciales.liberalites.report_2018.contribuable',
      ''
    ),
    ['x16d1622x']: _.get(
      client,
      'depenses_speciales.liberalites.report_2017.total',
      ''
    ),
    ['x16d1621x']: _.get(
      client,
      'depenses_speciales.liberalites.report_2017.conjoint_partenaire',
      ''
    ),
    ['x16d1620x']: _.get(
      client,
      'depenses_speciales.liberalites.report_2017.contribuable',
      ''
    ),
    ['x16d1619x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.contributions_total',
      ''
    ),
    ['x16d1618x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.conjoint_partenaire.contributions',
      ''
    ),
    ['x16d1617x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.contributions',
      ''
    ),
    ['x16d1616x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_exo.contribuable.cotisations_total',
      ''
    ),
    ['x16d1615x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_exo.conjoint_partenaire.cotisations',
      ''
    ),
    ['x16d1614x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_exo.contribuable.cotisations',
      ''
    ),
    ['x16d1613x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.cotisations_total',
      ''
    ),
    ['x16d1612x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.conjoint_partenaire.cotisations',
      ''
    ),
    ['x16d1611x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.cotisations',
      ''
    ),
    ['x16d1610x']: _.get(
      client,
      'depenses_speciales.cotisations_obligatoires.rev_exo.total',
      ''
    ),
    ['x16d1609x']: _.get(
      client,
      'depenses_speciales.cotisations_obligatoires.rev_exo.conjoint_partenaire.prelevements',
      ''
    ),
    ['x16d1608x']: _.get(
      client,
      'depenses_speciales.cotisations_obligatoires.rev_exo.contribuable.prelevements',
      ''
    ),
    ['x16d1607x']: _.get(
      client,
      'depenses_speciales.cotisations_obligatoires.rev_non_exo.total',
      ''
    ),
    ['x16d1606x']: _.get(
      client,
      'depenses_speciales.cotisations_obligatoires.rev_non_exo.conjoint_partenaire.prelevements',
      ''
    ),
    ['x16d1605x']: _.get(
      client,
      'depenses_speciales.cotisations_obligatoires.rev_non_exo.contribuable.prelevements',
      ''
    ),
    ['x16d1603x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.conjoint_partenaire.affiliation.is_oui_non',
      ''
    ),
    ['x16d1601x']: _.get(
      client,
      'depenses_speciales.regimes_complementaires.rev_non_exo.contribuable.affiliation.is_oui_non',
      ''
    ),
    // Page 17
    ['x17d1728x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.conjoint_partenaire.montant_annuel',
      ''
    ),
    ['x17d1727x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.contribuable.montant_annuel',
      ''
    ),
    ['x17d1726x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.conjoint_partenaire.pendant_mois',
      ''
    ),
    ['x17d1725x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.contribuable.pendant_mois',
      ''
    ),
    ['x17d1724x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.conjoint_partenaire.montant_mensuel',
      ''
    ),
    ['x17d1723x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.contribuable.montant_mensuel',
      ''
    ),
    ['x17d1722x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.conjoint_partenaire.nom',
      ''
    ),
    ['x17d1721x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.contribuable.nom',
      ''
    ),
    ['x17d1720x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires2.is_frais_domestiques',
      ''
    ),
    ['x17d1719x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires1.conjoint_partenaire.taux',
      ''
    ),
    ['x17d1717x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires1.conjoint_partenaire.is_en_annexe_deja_presente',
      ''
    ),
    ['x17d1716x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires1.contribuable.taux',
      ''
    ),
    ['x17d1714x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires1.contribuable.is_en_annexe_deja_presente',
      ''
    ),
    ['x17d1713x']: _.get(
      client,
      'charges_extraordinaires_17.abattements_forfaitaires1.is_invalidite',
      ''
    ),
    ['x17d1712x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r8',
      ''
    ),
    ['x17d1711x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r7',
      ''
    ),
    ['x17d1710x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r6',
      ''
    ),
    ['x17d1709x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r5',
      ''
    ),
    ['x17d1708x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r4',
      ''
    ),
    ['x17d1707x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r3',
      ''
    ),
    ['x17d1706x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r2',
      ''
    ),
    ['x17d1705x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.table.r1',
      ''
    ),
    ['x17d1704x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.detail_charges.total',
      ''
    ),
    ['x17d1703x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.detail_charges.conjoint_partenaire',
      ''
    ),
    ['x17d1702x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.detail_charges.contribuable',
      ''
    ),
    ['x17d1701x']: _.get(
      client,
      'charges_extraordinaires_17.abattement.is_abattement1',
      ''
    ),
    // Page 18
    // Page 18
    ['x18dn1843x']: _.get(
      client,
      'charges_extraordinaires_18.declaration.observations.f3',
      ''
    ),
    ['x18dn1842x']: _.get(
      client,
      'charges_extraordinaires_18.declaration.observations.f2',
      ''
    ),
    ['x18dn1841x']: _.get(
      client,
      'charges_extraordinaires_18.declaration.observations.f1',
      ''
    ),
    ['x18dn1840x']: _.get(
      client,
      'charges_extraordinaires_18.declaration.references.f2',
      ''
    ),
    ['x18dn1839x']: _.get(
      client,
      'charges_extraordinaires_18.declaration.references.f1',
      ''
    ),
    ['x18dn1x']: _.get(
      client,
      'charges_extraordinaires_18.declaration.reponse',
      ''
    ),
    ['x18d1842x']: _.get(
      client,
      'charges_extraordinaires_18.is_abattement',
      ''
    ),
    ['x18d1828x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[3].formation',
      ''
    ),
    ['x18d1827x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[3].montant',
      ''
    ),
    ['x18d1826x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[3].date_de_naissance',
      ''
    ),
    ['x18d1825_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[3].nom',
      ''
    ),
    ['x18d1825_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[3].prenom',
      ''
    ),
    ['x18d1824x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[2].formation',
      ''
    ),
    ['x18d1823x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[2].montant',
      ''
    ),
    ['x18d1822x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[2].date_de_naissance',
      ''
    ),
    ['x18d1821_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[2].nom',
      ''
    ),
    ['x18d1821_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[2].prenom',
      ''
    ),
    ['x18d1820x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[1].formation',
      ''
    ),
    ['x18d1819x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[1].montant',
      ''
    ),
    ['x18d1818x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[1].date_de_naissance',
      ''
    ),
    ['x18d1817_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[1].nom',
      ''
    ),
    ['x18d1817_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[1].prenom',
      ''
    ),
    ['x18d1816x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[0].formation',
      ''
    ),
    ['x18d1815x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[0].montant',
      ''
    ),
    ['x18d1814x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[0].date_de_naissance',
      ''
    ),
    ['x18d1813_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[0].nom',
      ''
    ),
    ['x18d1813_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_plus_21[0].prenom',
      ''
    ),
    ['x18d1812x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[3].montant',
      ''
    ),
    ['x18d1811x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[3].date_de_naissance',
      ''
    ),
    ['x18d1810_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[3].nom',
      ''
    ),
    ['x18d1810_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[3].prenom',
      ''
    ),
    ['x18d1809x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[2].montant',
      ''
    ),
    ['x18d1808x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[2].date_de_naissance',
      ''
    ),
    ['x18d1807_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[2].nom',
      ''
    ),
    ['x18d1807_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[2].prenom',
      ''
    ),
    ['x18d1806x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[1].montant',
      ''
    ),
    ['x18d1805x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[1].date_de_naissance',
      ''
    ),
    ['x18d1804_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[1].nom',
      ''
    ),
    ['x18d1804_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[1].prenom',
      ''
    ),
    ['x18d1803x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[0].montant',
      ''
    ),
    ['x18d1802x']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[0].date_de_naissance',
      ''
    ),
    ['x18d1801_ax']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[0].nom',
      ''
    ),
    ['x18d1801_bx']: _.get(
      client,
      'charges_extraordinaires_18.enfants_moins_21[0].prenom',
      ''
    ),
    // Page 19
    ['x19d1955x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat11.conjoint_partenaire.tantiemes',
      ''
    ),
    ['x19d1954x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat11.contribuable.tantiemes',
      ''
    ),
    ['x19d1953x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat10.total',
      ''
    ),
    ['x19d1952x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat10.conjoint_partenaire.retenue_impot',
      ''
    ),
    ['x19d1951x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat10.contribuable.retenue_impot',
      ''
    ),
    ['x19d1950x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat9.total',
      ''
    ),
    ['x19d1949x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat9.conjoint_partenaire.impot_etranger_annexe',
      ''
    ),
    ['x19d1948x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat9.contribuable.impot_etranger_annexe',
      ''
    ),
    ['x19d1947x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat8.total',
      ''
    ),
    ['x19d1946x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat8.conjoint_partenaire.impot_etranger_conv',
      ''
    ),
    ['x19d1945x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat8.contribuable.impot_etranger_conv',
      ''
    ),
    ['x19d1944x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat7.total',
      ''
    ),
    ['x19d1943x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat7.conjoint_partenaire.revenus_capitaux',
      ''
    ),
    ['x19d1942x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat7.contribuable.revenus_capitaux',
      ''
    ),
    ['x19d1941x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat6.conjoint_partenaire.pensions',
      ''
    ),
    ['x19d1940x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat6.contribuable.pensions',
      ''
    ),
    ['x19d1939x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat5.conjoint_partenaire.salaires',
      ''
    ),
    ['x19d1938x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat5.contribuable.salaires',
      ''
    ),
    ['x19d1937x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat4.total',
      ''
    ),
    ['x19d1936x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat4.conjoint_partenaire.abat_speciale_agricole',
      ''
    ),
    ['x19d1935x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat4.contribuable.abat_speciale_agricole',
      ''
    ),
    ['x19d1934x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat4.is_certificat',
      ''
    ),
    ['x19d1933x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat3.report_14_total',
      ''
    ),
    ['x19d1932x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat3.conjoint_partenaire.report_14',
      ''
    ),
    ['x19d1931x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat3.contribuable.report_14',
      ''
    ),
    ['x19d1930x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat3.is_report_14',
      ''
    ),
    ['x19d1929x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.report_92_total',
      ''
    ),
    ['x19d1928x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.conjoint_partenaire.report_92',
      ''
    ),
    ['x19d1927x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.contribuable.report_92',
      ''
    ),
    ['x19d1926x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.is_report_92',
      ''
    ),
    ['x19d1925x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.report_91_total',
      ''
    ),
    ['x19d1924x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.conjoint_partenaire.report_91',
      ''
    ),
    ['x19d1923x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.contribuable.report_91',
      ''
    ),
    ['x19d1922x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat2.is_report_91',
      ''
    ),
    ['x19d1921x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.conjoint_partenaire.montant_deduit',
      ''
    ),
    ['x19d1920x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.contribuable.montant_deduit',
      ''
    ),
    ['x19d1919x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.conjoint_partenaire.montant_non_deduit',
      ''
    ),
    ['x19d1918x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.contribuable.montant_non_deduit',
      ''
    ),
    ['x19d1917x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.conjoint_partenaire.is_benef_pro_liberale',
      ''
    ),
    ['x19d1916x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.contribuable.is_benef_pro_liberale',
      ''
    ),
    ['x19d1915x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.conjoint_partenaire.is_benef_agricole',
      ''
    ),
    ['x19d1914x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.conjoint_partenaire.is_benefice_commercial',
      ''
    ),
    ['x19d1913x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.contribuable.is_benef_agricole',
      ''
    ),
    ['x19d1912x']: _.get(
      client,
      'retenues_impot_diverses_demandes.cat1.contribuable.is_benefice_commercial',
      ''
    ),
    // Page 20
    ['x20d2002x']: _.get(client, 'revenu_imposable.date', ''),
    ['x20d2001x']: _.get(client, 'revenu_imposable.lieu', ''),
    ['x20d2038x']: _.get(client, 'revenu_imposable.total_cal', ''),
    ['x20d2036x']: _.get(client, 'revenu_imposable.total.c4', ''),
    ['x20d2035x']: _.get(client, 'revenu_imposable.total.c3', ''),
    ['x20d2034x']: _.get(client, 'revenu_imposable.total.c2', ''),
    ['x20d2033x']: _.get(client, 'revenu_imposable.total.c1', '')
  }
}
