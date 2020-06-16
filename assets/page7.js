module.exports = function (info) {
    return {
        occup_salariee: {
            rev_non_expo: {
                contribuable: {
                    a: info['7d'],
                    b: info['7d'],
                    c: info['7d'],
                    d: info['7d'],
                    d_extra: info['7d'],
                    e: info['7d'],
                    a_deduire: {
                        a: {
                            Salaires: info['7d'],
                            Suppléments: info['7d'],
                            Autres: info['7d']
                        },
                        a_extra: info['7d'],
                        b: info['7d'],
                        c: info['7d'],
                        deductions: info['7d']
                    }
                },
                conjoint_partenaire: {
                    a: info['7d'],
                    b: info['7d'],
                    c: info['7d'],
                    d: info['7d'],
                    e: info['7d'],
                    a_deduire: {
                        a: {
                            Salaires: info['7d'],
                            Suppléments: info['7d'],
                            Autres: info['7d']
                        },
                        b: info['7d'],
                        c: info['7d'],
                        deductions: info['7d']
                    }

                }
            },
            rev_expo: {
                contribuable: {
                    a: info['7d'],
                    b: info['7d'],
                    c: info['7d'],
                    d: info['7d'],
                    e: info['7d'],
                    a_deduire: {
                        a: {
                            Salaires: info['7d'],
                            Suppléments: info['7d'],
                            Autres: info['7d']
                        },
                        b: info['7d'],
                        c: info['7d'],
                        deductions: info['7d']
                    }
                },
                conjoint_partenaire: {
                    a: info['7d'],
                    b: info['7d'],
                    c: info['7d'],
                    d: info['7d'],
                    e: info['7d'],
                    a_deduire: {
                        a: {
                            Salaires: info['7d'],
                            Suppléments: info['7d'],
                            Autres: info['7d']
                        },
                        b: info['7d'],
                        c: info['7d'],
                        deductions: info['7d']
                    }

                }
            }
        },
        plusieurs: {
            er_lieu1: {
                contribuable: {
                    localite: info['7d'],
                    periode: {
                        du: info['7d'],
                        au: info['7d']
                    },
                    frequency: {
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
                    frequency: {
                        jour: info['7d'],
                        is_par_semaine: info['7d'],
                        is_par_mois: info['7d']
                    }
                }
            },
            er_lieu2: {
                contribuable: {
                    localite: info['7d'],
                    periode: {
                        du: info['7d'],
                        au: info['7d']
                    },
                    frequency: {
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
                    frequency: {
                        jour: info['7d'],
                        is_par_semaine: info['7d'],
                        is_par_mois: info['7d']
                    }
                }
            }
        }
    }
}