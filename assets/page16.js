module.exports = function (info) {
    return {
        depenses_speciales: {
            cotisations_obligatoires: {
                rev_non_exo: {
                    contribuable: {
                        prelevements: info['16d1605']
                    },
                    conjoint_partenaire: {
                        prelevements: info['16d1606']
                    },
                    total: info['16d1607']
                },
                rev_exo: {
                    contribuable: {
                        prelevements: info['16d1608']
                    },
                    conjoint_partenaire: {
                        prelevements: info['16d1609']
                    },
                    total: info['16d1610']
                }
            },
            regimes_complementaires: {
                rev_non_exo: {
                    contribuable: {
                        cotisations: info['16d1611'],
                        cotisations_total: info['16d1613'],
                        contributions: info['16d1617'],
                        contributions_total: info['16d1619'],
                        affiliation: {
                            is_oui: info['16d1601'] ? info['16d1601'] : 'Off',
                            is_non: info['16d1602'] ? info['16d1602'] : 'Off'
                        }
                    },
                    conjoint_partenaire: {
                        cotisations: info['16d1612'],
                        contributions: info['16d1618'],
                        affiliation: {
                            is_oui: info['16d1603'] ? info['16d1603'] : 'Off',
                            is_non: info['16d1604'] ? info['16d1604'] : 'Off'
                        }
                    }
                },
                rev_exo: {
                    contribuable: {
                        cotisations: info['16d1614'],
                        cotisations_total: info['16d1616']
                    },
                    conjoint_partenaire: {
                        cotisations: info['16d1615']
                    }
                }
            },
            liberalites: {
                report_2017: {
                    contribuable: info['16d1620'],
                    conjoint_partenaire: info['16d1621'],
                    total: info['16d1622']
                },
                report_2018: {
                    contribuable: info['16d1623'],
                    conjoint_partenaire: info['16d1624'],
                    total: info['16d1625']
                },
                beneficiaire: {
                    r1: info['16d1626'],
                    r2: info['16d1629'],
                    r3: info['16d1632'],
                    r4: info['16d1635'],
                    r5: info['16d1638'],
                    r6: info['16d1641']
                },
                liberalites_2019: {
                    contribuable: {
                        r1: info['16d1627'],
                        r2: info['16d1630'],
                        r3: info['16d1633'],
                        r4: info['16d1636'],
                        r5: info['16d1639'],
                        r6: info['16d1642'],
                        total_liberalites: info['16d1644']
                    },
                    conjoint_partenaire: {
                        r1: info['16d1628'],
                        r2: info['16d1631'],
                        r3: info['16d1634'],
                        r4: info['16d1637'],
                        r5: info['16d1640'],
                        r6: info['16d1643'],
                        total_liberalites: info['16d1645']
                    },
                    total_plus_total: info['16d1646']
                }
            },
            pertes_exploitation: {
                pertes_reportables: {
                    rev_non_exo: {
                        contribuable: {
                            total_pertes: info['16d1647']
                        },
                        conjoint_partenaire: {
                            total_pertes: info['16d1648']
                        },
                        total_pertes_total: info['16d1649']
                    },
                    rev_exo: {
                        contribuable: {
                            total_pertes: info['16d1650']
                        },
                        conjoint_partenaire: {
                            total_pertes: info['16d1651']
                        },
                        total_pertes_total: info['16d1652']
                    }
                }
            }

        }

    }
}