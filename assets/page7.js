module.exports = function (info) {
    return {
        occup_salariee: {
            rev_non_exo: {
                contribuable: {
                    premier_contrat: info['7d'],
                    deuxieme_contrat: info['7d'],
                    prestations: info['7d'],
                    autres: info['7d'],
                    autres_texte: info['7d'],
                    salaire_brut: info['7d'],
                    a_deduire: {
                        salaires: info['7d'],
                        supplements: info['7d'],
                        autres_exemptions: info['7d'],
                        autres_exemptions_texte: info['7d'],
                        frais_obtention: info['7d'],
                        frais_de_deplacement: info['7d'],
                        design_lieu_travail: info['7d']
                    }
                },
                conjoint_partenaire: {
                    premier_contrat: info['7d'],
                    deuxieme_contrat: info['7d'],
                    prestations: info['7d'],
                    autres: info['7d'],
                    autres_texte: info['7d'],
                    salaire_brut: info['7d'],
                    a_deduire: {
                        salaires: info['7d'],
                        supplements: info['7d'],
                        autres_exemptions: info['7d'],
                        autres_exemptions_texte: info['7d'],
                        frais_obtention: info['7d'],
                        frais_de_deplacement: info['7d'],
                        design_lieu_travail: info['7d']
                    }
                }
            },
            rev_exo: {
                contribuable: {
                    premier_contrat: info['7d'],
                    deuxieme_contrat: info['7d'],
                    prestations: info['7d'],
                    autres: info['7d'],
                    autres_texte: info['7d'],
                    salaire_brut: info['7d'],
                    a_deduire: {
                        salaires: info['7d'],
                        supplements: info['7d'],
                        autres_exemptions: info['7d'],
                        autres_exemptions_texte: info['7d'],
                        frais_obtention: info['7d'],
                        frais_de_deplacement: info['7d'],
                        design_lieu_travail: info['7d']
                    }
                },
                conjoint_partenaire: {
                    premier_contrat: info['7d'],
                    deuxieme_contrat: info['7d'],
                    prestations: info['7d'],
                    autres: info['7d'],
                    autres_texte: info['7d'],
                    salaire_brut: info['7d'],
                    a_deduire: {
                        salaires: info['7d'],
                        supplements: info['7d'],
                        autres_exemptions: info['7d'],
                        autres_exemptions_texte: info['7d'],
                        frais_obtention: info['7d'],
                        frais_de_deplacement: info['7d'],
                        design_lieu_travail: info['7d']
                    }
                }
            }
        },
        plusieurs_lieux: {
            lieu1: {
                contribuable: {
                    localite: info['7d'],
                    periode: {
                        du: info['7d'],
                        au: info['7d']
                    },
                    frequence: {
                        jour: info['7d'],
                        is_par_semaine: info['7d'],
                        is_par_mois: info['7d']
                    }
                },
                conjoint_partenaire: {
                    localite: info['7d'],
                    periode: {
                        du: info['7d'],
                        au: info['7d']
                    },
                    frequence: {
                        jour: info['7d'],
                        is_par_semaine: info['7d'],
                        is_par_mois: info['7d']
                    }
                }
            },
            lieu2: {
                contribuable: {
                    localite: info['7d'],
                    periode: {
                        du: info['7d'],
                        au: info['7d']
                    },
                    frequence: {
                        jour: info['7d'],
                        is_par_semaine: info['7d'],
                        is_par_mois: info['7d']
                    }
                },
                conjoint_partenaire: {
                    localite: info['7d'],
                    periode: {
                        du: info['7d'],
                        au: info['7d']
                    },
                    frequence: {
                        jour: info['7d'],
                        is_par_semaine: info['7d'],
                        is_par_mois: info['7d']
                    }
                }
            }
        }
    }
}