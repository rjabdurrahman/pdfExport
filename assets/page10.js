module.exports = function (info) {
    return {
        location: {
            rev_non_exo: {
                contribuable: {
                    revenu_location: info['10d1001'],
                    parts_revenu: info['10d1005'],
                    revenu_concession: info['10d1009'],
                    revenu_redevances: info['10d1013'],
                    perte_location: info['10d1017'],
                    f: {
                        interets_debiteurs: info['10d1021'],
                        part_non_deduite: info['10d1025'],
                        total: info['10d1029']
                    }
                },
                conjoint_partenaire: {
                    revenu_location: info['10d1002'],
                    parts_revenu: info['10d1006'],
                    revenu_concession: info['10d1010'],
                    revenu_redevances: info['10d1014'],
                    perte_location: info['10d1018'],
                    f: {
                        interets_debiteurs: info['10d1022'],
                        part_non_deduite: info['10d1026'],
                        total: info['10d1030']
                    }
                },
                totalCal: info['10d1031']
            },
            rev_exo: {
                contribuable: {
                    revenu_location: info['10d1003'],
                    parts_revenu: info['10d1007'],
                    revenu_concession: info['10d1011'],
                    revenu_redevances: info['10d1015'],
                    perte_location: info['10d1019'],
                    f: {
                        interets_debiteurs: info['10d1023'],
                        part_non_deduite: info['10d1027'],
                        total: info['10d1032']
                    }
                },
                conjoint_partenaire: {
                    revenu_location: info['10d1004'],
                    parts_revenu: info['10d1008'],
                    revenu_concession: info['10d1012'],
                    revenu_redevances: info['10d1016'],
                    perte_location: info['10d1020'],
                    f: {
                        interets_debiteurs: info['10d1024'],
                        part_non_deduite: info['10d1028'],
                        total: info['10d1033']
                    }
                },
                totalCal: info['10d1034']
            },
            interets_debiteurs: {
                table1: {
                    r1: {
                        etablissement: info['10d1035'],
                        relation: info['10d1036'],
                        dette: info['10d1037']
                    },
                    r2: {
                        etablissement: info['10d1040'],
                        relation: info['10d1041'],
                        dette: info['10d1042']
                    },
                    r3: {
                        etablissement: info['10d1045'],
                        relation: info['10d1046'],
                        dette: info['10d1047']
                    }
                },

                table2: {
                    contribuable: {
                        interets_debiteurs1: info['10d1038'],
                        interets_debiteurs2: info['10d1043'],
                        interets_debiteurs3: info['10d1049']
                    },
                    conjoint_partenaire: {
                        interets_debiteurs1: info['10d1039'],
                        interets_debiteurs2: info['10d1044'],
                        interets_debiteurs3: info['10d1050']
                    }
                },

                habitationA: {
                    habitation: info['10d1051'],
                    numero: info['10d1053'],
                    rue: info['10d1054'],
                    date_occupation: info['10d1057'],
                    interets: {
                        contribuable: info['10d1059'],
                        conjoint_partenaire: info['10d1060']
                    }
                },
                habitationB: {
                    habitation: info['10d1052'],
                    numero: info['10d1055'],
                    rue: info['10d1056'],
                    date_occupation: info['10d1058'],
                    interets: {
                        contribuable: info['10d1061'],
                        conjoint_partenaire: info['10d1062']
                    }
                }
            }
        }
    }
}