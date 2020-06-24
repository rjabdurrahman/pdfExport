module.exports = function (info) {
    return {
        occup_salariee: {
            rev_non_exo: {
                contribuable: {
                    premier_contrat: info['7d701'],
                    deuxieme_contrat: info['7d705'],
                    prestations: info['7d709'],
                    autres: info['7d714'],
                    autres_texte: info['7d713'],
                    salaire_brut: info['7d722'],
                    a_deduire: {
                        salaires: info['7d7'],
                        supplements: info['7d7'],
                        autres_exemptions: info['7d7'],
                        autres_exemptions_texte: info['7d7'],
                        frais_obtention: info['7d7'],
                        frais_de_deplacement: info['7d7'],
                        design_lieu_travail: info['7d7']
                    }
                },
                conjoint_partenaire: {
                    premier_contrat: info['7d7'],
                    deuxieme_contrat: info['7d7'],
                    prestations: info['7d7'],
                    autres: info['7d7'],
                    autres_texte: info['7d7'],
                    salaire_brut: info['7d7'],
                    a_deduire: {
                        salaires: info['7d7'],
                        supplements: info['7d7'],
                        autres_exemptions: info['7d7'],
                        autres_exemptions_texte: info['7d7'],
                        frais_obtention: info['7d7'],
                        frais_de_deplacement: info['7d7'],
                        design_lieu_travail: info['7d7']
                    }
                }
            },
            rev_exo: {
                contribuable: {
                    premier_contrat: info['7d7'],
                    deuxieme_contrat: info['7d7'],
                    prestations: info['7d7'],
                    autres: info['7d7'],
                    autres_texte: info['7d7'],
                    salaire_brut: info['7d7'],
                    a_deduire: {
                        salaires: info['7d7'],
                        supplements: info['7d7'],
                        autres_exemptions: info['7d7'],
                        autres_exemptions_texte: info['7d7'],
                        frais_obtention: info['7d7'],
                        frais_de_deplacement: info['7d7'],
                        design_lieu_travail: info['7d7']
                    }
                },
                conjoint_partenaire: {
                    premier_contrat: info['7d7'],
                    deuxieme_contrat: info['7d7'],
                    prestations: info['7d7'],
                    autres: info['7d7'],
                    autres_texte: info['7d7'],
                    salaire_brut: info['7d7'],
                    a_deduire: {
                        salaires: info['7d7'],
                        supplements: info['7d7'],
                        autres_exemptions: info['7d7'],
                        autres_exemptions_texte: info['7d7'],
                        frais_obtention: info['7d7'],
                        frais_de_deplacement: info['7d7'],
                        design_lieu_travail: info['7d7']
                    }
                }
            }
        },
        plusieurs_lieux: {
            lieu1: {
                contribuable: {
                    localite: info['7d7'],
                    periode: {
                        du: info['7d7'],
                        au: info['7d7']
                    },
                    frequence: {
                        jour: info['7d7'],
                        is_par_semaine: info['7d7'],
                        is_par_mois: info['7d7']
                    }
                },
                conjoint_partenaire: {
                    localite: info['7d7'],
                    periode: {
                        du: info['7d7'],
                        au: info['7d7']
                    },
                    frequence: {
                        jour: info['7d7'],
                        is_par_semaine: info['7d7'],
                        is_par_mois: info['7d7']
                    }
                }
            },
            lieu2: {
                contribuable: {
                    localite: info['7d7'],
                    periode: {
                        du: info['7d7'],
                        au: info['7d7']
                    },
                    frequence: {
                        jour: info['7d7'],
                        is_par_semaine: info['7d7'],
                        is_par_mois: info['7d7']
                    }
                },
                conjoint_partenaire: {
                    localite: info['7d7'],
                    periode: {
                        du: info['7d7'],
                        au: info['7d7']
                    },
                    frequence: {
                        jour: info['7d7'],
                        is_par_semaine: info['7d7'],
                        is_par_mois: info['7d7']
                    }
                }
            }
        }
    }
}