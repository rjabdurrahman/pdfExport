module.exports = function (info) {
    return {
        retenues_impot_diverses_demandes: {
            cat1: {
                contribuable: {
                    is_benefice_commercial: info['19d'],
                    is_benef_agricole: info['19d'],
                    is_benef_pro_liberale: info['19d'],
                    montant_non_deduit: info['19d'],
                    montant_deduit: info['19d']
                },
                conjoint_partenaire: {
                    is_benefice_commercial: info['19d'],
                    is_benef_agricole: info['19d'],
                    is_benef_pro_liberale: info['19d'],
                    montant_non_deduit: info['19d'],
                    montant_deduit: info['19d']
                }
            },
            cat2: {
                is_report_91: info['19d'],
                is_report_92: info['19d'],
                contribuable: {
                    report_91: info['19d'],
                    report_92: info['19d']
                },
                conjoint_partenaire: {
                    report_91: info['19d'],
                    report_92: info['19d']
                }
            },
            cat3: {
                is_report_14: info['19d'],
                contribuable: {
                    report_14: info['19d']
                },
                conjoint_partenaire: {
                    report_14: info['19d']
                }
            },
            cat4: {
                is_certificat: info['19d'],
                contribuable: {
                    abat_speciale_agricole: info['19d']
                },
                conjoint_partenaire: {
                    abat_speciale_agricole: info['19d']
                }
            },
            cat5: {
                contribuable: {
                    salaires: info['19d']
                },
                conjoint_partenaire: {
                    salaires: info['19d']
                }
            },
            cat6: {
                contribuable: {
                    pensions: info['19d']
                },
                conjoint_partenaire: {
                    pensions: info['19d']
                }
            },
            cat7: {
                contribuable: {
                    revenus_capitaux: info['19d']
                },
                conjoint_partenaire: {
                    revenus_capitaux: info['19d']
                }
            },
            cat8: {
                contribuable: {
                    impot_etranger_conv: info['19d']
                },
                conjoint_partenaire: {
                    impot_etranger_conv: info['19d']
                }
            },
            cat9: {
                contribuable: {
                    impot_etranger_annexe: info['19d']
                },
                conjoint_partenaire: {
                    impot_etranger_annexe: info['19d']
                }
            },
            cat10: {
                contribuable: {
                    retenue_impot: info['19d']
                },
                conjoint_partenaire: {
                    retenue_impot: info['19d']
                }
            },
            cat11: {
                contribuable: {
                    tantiemes: info['19d']
                },
                conjoint_partenaire: {
                    tantiemes: info['19d']
                }
            }
        }
    }
}