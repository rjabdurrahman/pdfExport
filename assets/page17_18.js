module.exports = function (info) {
    return {
        charges_extraordinaires_17: {
            abattement: {
                is_abattement1: info['17d1701'] ? info['17d1701'] : 'Off',
                detail_charges: {
                    contribuable: info['17d1702'],
                    conjoint_partenaire: info['17d1703'],
                    total: info['17d1704']
                },
                table: {
                    r1: info['17d1705'],
                    r2: info['17d1706'],
                    r3: info['17d1707'],
                    r4: info['17d1708'],
                    r5: info['17d1709'],
                    r6: info['17d1710'],
                    r7: info['17d1711'],
                    r8: info['17d1712']
                }

            },
            abattements_forfaitaires1: {
                is_invalidite: info['17d1713'] ? info['17d1713'] : 'Off',
                contribuable: {
                    is_en_annexe_deja_presente: info['17d1714'],
                    taux: info['17d1716']
                },
                conjoint_partenaire: {
                    is_en_annexe_deja_presente: info['17d1717'],
                    taux: info['17d1719']
                }
            },
            abattements_forfaitaires2: {
                is_frais_domestiques: info['17d1720'] ? info['17d1720'] : 'Off',
                contribuable: {
                    nom: info['17d1721'],
                    montant_mensuel: info['17d1723'],
                    pendant_mois: info['17d1725'],
                    type_frais: {
                        domesticite: {
                            annee_entiere: info['17dc73'],
                            n_1: info['17dc1'],
                            n_2: info['17dc2'],
                            n_3: info['17dc3'],
                            n_4: info['17dc4'],
                            n_5: info['17dc5'],
                            n_6: info['17dc6'],
                            n_7: info['17dc7'],
                            n_8: info['17dc8'],
                            n_9: info['17dc9'],
                            n_10: info['17dc10'],
                            n_11: info['17dc11'],
                            n_12: info['17dc12']
                        },
                        aides_et_soins: {
                            annee_entiere: info['17dc75'],
                            n_1: info['17dc25'],
                            n_2: info['17dc26'],
                            n_3: info['17dc27'],
                            n_4: info['17dc28'],
                            n_5: info['17dc29'],
                            n_6: info['17dc30'],
                            n_7: info['17dc31'],
                            n_8: info['17dc32'],
                            n_9: info['17dc33'],
                            n_10: info['17dc34'],
                            n_11: info['17dc35'],
                            n_12: info['17dc36']
                        },
                        garde_enfants: {
                            annee_entiere: info['17dc77'],
                            n_1: info['17dc49'],
                            n_2: info['17dc50'],
                            n_3: info['17dc51'],
                            n_4: info['17dc52'],
                            n_5: info['17dc53'],
                            n_6: info['17dc54'],
                            n_7: info['17dc55'],
                            n_8: info['17dc56'],
                            n_9: info['17dc57'],
                            n_10: info['17dc58'],
                            n_11: info['17dc59'],
                            n_12: info['17dc60']
                        }
                    },
                    montant_annuel: info['17d1727']
                },
                conjoint_partenaire: {
                    nom: info['17d1722'],
                    montant_mensuel: info['17d1724'],
                    pendant_mois: info['17d1726'],
                    type_frais: {
                        domesticite: {
                            annee_entiere: info['17dc74'],
                            n_1: info['17dc13'],
                            n_2: info['17dc14'],
                            n_3: info['17dc15'],
                            n_4: info['17dc16'],
                            n_5: info['17dc17'],
                            n_6: info['17dc18'],
                            n_7: info['17dc19'],
                            n_8: info['17dc20'],
                            n_9: info['17dc21'],
                            n_10: info['17dc22'],
                            n_11: info['17dc23'],
                            n_12: info['17dc24']
                        },
                        aides_et_soins: {
                            annee_entiere: info['17dc76'],
                            n_1: info['17dc37'],
                            n_2: info['17dc38'],
                            n_3: info['17dc39'],
                            n_4: info['17dc40'],
                            n_5: info['17dc41'],
                            n_6: info['17dc42'],
                            n_7: info['17dc43'],
                            n_8: info['17dc44'],
                            n_9: info['17dc45'],
                            n_10: info['17dc46'],
                            n_11: info['17dc47'],
                            n_12: info['17dc48']
                        },
                        garde_enfants: {
                            annee_entiere: info['17dc78'],
                            n_1: info['17dc61'],
                            n_2: info['17dc62'],
                            n_3: info['17dc63'],
                            n_4: info['17dc64'],
                            n_5: info['17dc65'],
                            n_6: info['17dc66'],
                            n_7: info['17dc67'],
                            n_8: info['17dc68'],
                            n_9: info['17dc69'],
                            n_10: info['17dc70'],
                            n_11: info['17dc71'],
                            n_12: info['17dc72']
                        }
                    },
                    montant_annuel: info['17d1728']
                }
            }
        },
        charges_extraordinaires_18: {
            is_abattement: info['18d1842'] ? info['18d1842'] : 'Off',
            enfants_moins_21: [
                {
                    nom: info['18d1801_a'],
                    prenom: info['18d1801_b'],
                    date_de_naissance: info['18d1802'],
                    montant: info['18d1803']
                },
                {
                    nom: info['18d1804_a'],
                    prenom: info['18d1804_b'],
                    date_de_naissance: info['18d1805'],
                    montant: info['18d1806']
                },
                {
                    nom: info['18d1807_a'],
                    prenom: info['18d1807_b'],
                    date_de_naissance: info['18d1808'],
                    montant: info['18d1809']
                },
                {
                    nom: info['18d1810_a'],
                    prenom: info['18d1810_b'],
                    date_de_naissance: info['18d1811'],
                    montant: info['18d1812']
                }
            ],
            enfants_plus_21: [
                {
                    nom: info['18d1813_a'],
                    prenom: info['18d1813_b'],
                    date_de_naissance: info['18d1814'],
                    montant: info['18d1815'],
                    formation: info['18d1816']
                },
                {
                    nom: info['18d1817_a'],
                    prenom: info['18d1817_b'],
                    date_de_naissance: info['18d1818'],
                    montant: info['18d1819'],
                    formation: info['18d1820']
                },
                {
                    nom: info['18d1821_a'],
                    prenom: info['18d1821_b'],
                    date_de_naissance: info['18d1822'],
                    montant: info['18d1823'],
                    formation: info['18d1824']
                },
                {
                    nom: info['18d1825_a'],
                    prenom: info['18d1825_b'],
                    date_de_naissance: info['18d1826'],
                    montant: info['18d1827'],
                    formation: info['18d1828']
                }
            ],
            mobilite_durable: {
                contribuable: [
                    {
                        is_voiture: info['18d1836'] ? info['18d1836'] : 'Off',
                        voiture: info['18d1829']
                    },
                    {
                        is_cycle: info['18d1838'] ? info['18d1838'] : 'Off',
                        cycle: info['18d1831']
                    },
                    {
                        is_voiture_electrique: info['18d1840'] ? info['18d1840'] : 'Off',
                        voiture_electrique: info['18d1833']
                    }
                ],
                conjoint_partenaire: [
                    {
                        is_voiture: info['18d1837'] ? info['18d1837'] : 'Off',
                        voiture: info['18d1830']
                    },
                    {
                        is_cycle: info['18d1839'] ? info['18d1839'] : 'Off',
                        cycle: info['18d1832']
                    },
                    {
                        is_voiture_electrique: info['18d1841'] ? info['18d1841'] : 'Off',
                        voiture_electrique: info['18d1834']
                    }
                ]
            },
            is_investissement: info['18d1835'] ? info['18d1835'] : 'Off',
            declaration: {
                reponse: info['18dn1'],
                references: {
                    f1: info['18dn1839'],
                    f2: info['18dn1840']
                },
                observations: {
                    f1: info['18dn1841'],
                    f2: info['18dn1842']
                }
            }
        }
    }
}