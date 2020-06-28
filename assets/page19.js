module.exports = function (info) {
    return {
        retenues_impot_diverses_demandes: {
            cat1: {
                contribuable: {
                    is_benefice_commercial: info['19d19'],
                    is_benef_agricole: info['19d19'],
                    is_benef_pro_liberale: info['19d19'],
                    montant_non_deduit: info['19d1918'],
                    montant_deduit: info['19d1920']
                },
                conjoint_partenaire: {
                    is_benefice_commercial: info['19d19'],
                    is_benef_agricole: info['19d19'],
                    is_benef_pro_liberale: info['19d19'],
                    montant_non_deduit: info['19d1919'],
                    montant_deduit: info['19d1921']
                }
            },
            cat2: {
                is_report_91: info['19d19'],
                is_report_92: info['19d19'],
                contribuable: {
                    report_91: info['19d1923'],
                    report_92: info['19d1927']
                },
                conjoint_partenaire: {
                    report_91: info['19d1924'],
                    report_92: info['19d1928']
                }
            },
            cat3: {
                is_report_14: info['19d19'],
                contribuable: {
                    report_14: info['19d1931']
                },
                conjoint_partenaire: {
                    report_14: info['19d1932']
                }
            },
            cat4: {
                is_certificat: info['19d19'],
                contribuable: {
                    abat_speciale_agricole: info['19d1935']
                },
                conjoint_partenaire: {
                    abat_speciale_agricole: info['19d1936']
                }
            },
            cat5: {
                contribuable: {
                    salaires: info['19d1938']
                },
                conjoint_partenaire: {
                    salaires: info['19d1939']
                }
            },
            cat6: {
                contribuable: {
                    pensions: info['19d1940']
                },
                conjoint_partenaire: {
                    pensions: info['19d1941']
                }
            },
            cat7: {
                contribuable: {
                    revenus_capitaux: info['19d1942']
                },
                conjoint_partenaire: {
                    revenus_capitaux: info['19d1943']
                }
            },
            cat8: {
                contribuable: {
                    impot_etranger_conv: info['19d1945']
                },
                conjoint_partenaire: {
                    impot_etranger_conv: info['19d1946']
                }
            },
            cat9: {
                contribuable: {
                    impot_etranger_annexe: info['19d1948']
                },
                conjoint_partenaire: {
                    impot_etranger_annexe: info['19d1949']
                }
            },
            cat10: {
                contribuable: {
                    retenue_impot: info['19d1951']
                },
                conjoint_partenaire: {
                    retenue_impot: info['19d1952']
                }
            },
            cat11: {
                contribuable: {
                    tantiemes: info['19d1954']
                },
                conjoint_partenaire: {
                    tantiemes: info['19d1955']
                }
            }
        }
    }
}