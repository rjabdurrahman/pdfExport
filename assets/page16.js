module.exports = function (info) {
    return {
        dep_spe3: {
            a: {
                rev_non_exo: {
                    contrib: {
                        prelevements: info['16d']
                    },
                    jon_contrib: {
                        prelevements: info['16d']
                    },
                    cal: info['16d']
                },
                rev_exo: {
                    contrib: {
                        prelevements: info['16d']
                    },
                    jon_contrib: {
                        prelevements: info['16d']
                    },
                    cal: info['16d']
                }
            },
            b: {
                rev_non_exo: {
                    contrib: {
                        cotisations: info['16d'],
                        contributions: info['16d'],
                        Affiliation: {
                            is_oui: info['16d'],
                            is_non: info['16d']
                        }
                    },
                    jon_contrib: {
                        cotisations: info['16d'],
                        contributions: info['16d'],
                        Affiliation: {
                            is_oui: info['16d'],
                            is_non: info['16d']
                        }
                    },
                    cal1: info['16d'],
                    cal2: info['16d'],
                    cal2: info['16d']
                },
                rev_exo: {
                    contrib: {
                        cotisations: info['16d']
                    },
                    jon_contrib: {
                        cotisations: info['16d']
                    },
                    cal: info['16d']
                }
            },
            c: {
                report17: {
                    contrib: info['16d'],
                    jon_contrib: info['16d'],
                    cal: info['16d']
                },
                report18: {
                    contrib: info['16d'],
                    jon_contrib: info['16d'],
                    cal: info['16d']
                },
                table: {
                    r1: {
                        eneficiaire: info['16d'],
                        liberalites1: info['16d'],
                        liberalites2: info['16d']
                    },
                    r2: {
                        eneficiaire: info['16d'],
                        liberalites1: info['16d'],
                        liberalites2: info['16d']
                    },
                    r3: {
                        eneficiaire: info['16d'],
                        liberalites1: info['16d'],
                        liberalites2: info['16d']
                    },
                    r4: {
                        eneficiaire: info['16d'],
                        liberalites1: info['16d'],
                        liberalites2: info['16d']
                    },
                    r5: {
                        eneficiaire: info['16d'],
                        liberalites1: info['16d'],
                        liberalites2: info['16d']
                    },
                    r6: {
                        eneficiaire: info['16d'],
                        liberalites1: info['16d'],
                        liberalites2: info['16d']
                    },
                    r7: {
                        total1: info['16d'],
                        total2: info['16d'],
                        cal: info['16d']
                    }
                }
            },
            d: {
                rev_non_exo: {
                    contrib: {
                        reportables: info['16d']
                    },
                    jon_contrib: {
                        reportables: info['16d']
                    },
                    cal: info['16d']
                },
                rev_exo: {
                    contrib: {
                        reportables: info['16d']
                    },
                    jon_contrib: {
                        reportables: info['16d']
                    },
                    cal: info['16d']
                },
                total_des_depenses: info['16d']
            }

        }

    }
}