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
                    totalABCD:info['7d718'],
                    totalABCDE:info['7d726'],
                    salaire_brut: info['7d722'],
                    a_deduire: {
                        salaires: info['7d730'],
                        supplements: info['7d734'],
                        autres_exemptions: info['7d738'],
                        autres_exemptions_texte: info['7d742'],
                        frais_obtention: info['7d743'],
                        frais_de_deplacement: info['7d747'],
                        design_lieu_travail: info['7d751'],
                        total_deduction:info['7d755'],
                        totalABCDE:info['7d759']
                    }
                },
                conjoint_partenaire: {
                    premier_contrat: info['7d702'],
                    deuxieme_contrat: info['7d706'],
                    prestations: info['7d710'],
                    autres: info['7d715'],
                    totalABCD:info['7d719'],
                    totalABCDE:info['7d727'],
                    autres_texte: info['7d713'],
                    salaire_brut: info['7d723'],
                    a_deduire: {
                        salaires: info['7d731'],
                        supplements: info['7d735'],
                        autres_exemptions: info['7d739'],
                        autres_exemptions_texte: info['7d742'],
                        frais_obtention: info['7d744'],
                        frais_de_deplacement: info['7d748'],
                        design_lieu_travail: info['7d752'],
                        total_deduction:info['7d756'],
                        totalABCDE:info['7d760']
                    }
                }
            },
            rev_exo: {
                contribuable: {
                    premier_contrat: info['7d703'],
                    deuxieme_contrat: info['7d707'],
                    prestations: info['7d711'],
                    autres: info['7d716'],
                    totalABCD:info['7d720'],
                    totalABCDE:info['7d728'],
                    autres_texte: info['7d713'],
                    salaire_brut: info['7d724'],
                    a_deduire: {
                        salaires: info['7d732'],
                        supplements: info['7d736'],
                        autres_exemptions: info['7d740'],
                        autres_exemptions_texte: info['7d742'],
                        frais_obtention: info['7d745'],
                        frais_de_deplacement: info['7d749'],
                        design_lieu_travail: info['7d753'],
                        total_deduction:info['7d757'],
                        totalABCDE:info['7d761']
                    }
                },
                conjoint_partenaire: {
                    premier_contrat: info['7d704'],
                    deuxieme_contrat: info['7d708'],
                    prestations: info['7d712'],
                    autres: info['7d717'],
                    totalABCD:info['7d721'],
                    totalABCDE:info['7d729'],
                    autres_texte: info['7d713'],
                    salaire_brut: info['7d725'],
                    a_deduire: {
                        salaires: info['7d733'],
                        supplements: info['7d737'],
                        autres_exemptions: info['7d741'],
                        autres_exemptions_texte: info['7d742'],
                        frais_obtention: info['7d746'],
                        frais_de_deplacement: info['7d750'],
                        design_lieu_travail: info['7d754'],
                        total_deduction:info['7d758'],
                        totalABCDE:info['7d762']
                    }
                }
            },
            plusieurs_lieux: {
                lieu1: {
                    contribuable: {
                        localite: info['7d763'],
                        periode: {
                            du: info['7d765'],
                            au: info['7d766']
                        },
                        frequence: {
                            jour: info['7d769'],
                            par_mois_semaine: info['7d779']
                        }
                    },
                    conjoint_partenaire: {
                        localite: info['7d764'],
                        periode: {
                            du: info['7d767'],
                            au: info['7d768']
                        },
                        frequence: {
                            jour: info['7d770'],
                            par_mois_semaine: info['7d781']
                        }
                    }
                },
                lieu2: {
                    contribuable: {
                        localite: info['7d771'],
                        periode: {
                            du: info['7d773'],
                            au: info['7d774']
                        },
                        frequence: {
                            jour: info['7d777'],
                            par_mois_semaine: info['7d783']
                        }
                    },
                    conjoint_partenaire: {
                        localite: info['7d772'],
                        periode: {
                            du: info['7d775'],
                            au: info['7d776']
                        },
                        frequence: {
                            jour: info['7d778'],
                            par_mois_semaine: info['7d785']
                        }
                    }
                }
            }
        }
    }
}