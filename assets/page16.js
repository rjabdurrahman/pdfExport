module.exports = function (info) {
    return {
        depenses_speciales: {
            cotisations_obligatoires: {
                rev_non_exo: {
                    contribuable: {
                        prelevements: info['16d']
                    },
                    conjoint_partenaire: {
                        prelevements: info['16d']
                    }
                },
                rev_exo: {
                    contribuable: {
                        prelevements: info['16d']
                    },
                    conjoint_partenaire: {
                        prelevements: info['16d']
                    }
                }
            },
            regimes_complementaires: {
                rev_non_exo: {
                    contribuable: {
                        cotisations: info['16d'],
                        contributions: info['16d'],
                        affiliation: {
                            is_oui: info['16d'],
                            is_non: info['16d']
                        }
                    },
                    conjoint_partenaire: {
                        cotisations: info['16d'],
                        contributions: info['16d'],
                        affiliation: {
                            is_oui: info['16d'],
                            is_non: info['16d']
                        }
                    }
                },
                rev_exo: {
                    contribuable: {
                        cotisations: info['16d']
                    },
                    conjoint_partenaire: {
                        cotisations: info['16d']
                    }
                }
            },
            liberalites: {
                report_2017: {
                    contribuable: info['16d'],
                    conjoint_partenaire: info['16d']
                },
                report_2018: {
                    contribuable: info['16d'],
                    conjoint_partenaire: info['16d']
                },
                beneficiaire: {
                    r1: info['16d'],
                    r2: info['16d'],
                    r3: info['16d'],
                    r4: info['16d'],
                    r5: info['16d'],
                    r6: info['16d']
                },
                liberalites_2019: {
                    contribuable: {
                        r1: info['14d'],
                        r2: info['14d'],
                        r3: info['14d'],
                        r4: info['14d'],
                        r5: info['14d'],
                        r6: info['14d'],
                        total_liberalites: info['14d']
                    },
                    conjoint_partenaire: {
                        r1: info['14d'],
                        r2: info['14d'],
                        r3: info['14d'],
                        r4: info['14d'],
                        r5: info['14d'],
                        r6: info['14d'],
                        total_liberalites: info['14d']
                    }
                }
            },
            pertes_exploitation: {
                pertes_reportables: {
                    rev_non_exo: {
                        contribuable: {
                            total_pertes: info['16d']
                        },
                        conjoint_partenaire: {
                            total_pertes: info['16d']
                        }
                    },
                    rev_exo: {
                        contribuable: {
                            total_pertes: info['16d']
                        },
                        conjoint_partenaire: {
                            total_pertes: info['16d']
                        }
                    }
                }
            }

        }

    }
}