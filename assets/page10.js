module.exports = function (info) {
    return {
        location: {
            rev_non_exo: {
                contribuable: {
                    revenu_location: info['10d'],
                    parts_revenu: info['10d'],
                    revenu_concession: info['10d'],
                    revenu_redevances: info['10d'],
                    perte_location: info['10d'],
                    f: {
                        interets_debiteurs: info['10d'],
                        part_non_deduite: info['10d'],
                        total: info['10d']
                    }
                },
                conjoint_partenaire: {
                    revenu_location: info['10d'],
                    parts_revenu: info['10d'],
                    revenu_concession: info['10d'],
                    revenu_redevances: info['10d'],
                    perte_location: info['10d'],
                    f: {
                        interets_debiteurs: info['10d'],
                        part_non_deduite: info['10d'],
                        total: info['10d']
                    }
                },
                totalCal: info['10d']
            },
            rev_exo: {
                contribuable: {
                    revenu_location: info['10d'],
                    parts_revenu: info['10d'],
                    revenu_concession: info['10d'],
                    revenu_redevances: info['10d'],
                    perte_location: info['10d'],
                    f: {
                        interets_debiteurs: info['10d'],
                        part_non_deduite: info['10d'],
                        total: info['10d']
                    }
                },
                conjoint_partenaire: {
                    revenu_location: info['10d'],
                    parts_revenu: info['10d'],
                    revenu_concession: info['10d'],
                    revenu_redevances: info['10d'],
                    perte_location: info['10d'],
                    f: {
                        interets_debiteurs: info['10d'],
                        part_non_deduite: info['10d'],
                        total: info['10d']
                    }
                },
                totalCal: info['10d']
            },
            interets_debiteurs: {
                table1: {
                    r1: {
                        etablissement: info['10d'],
                        relation: info['10d'],
                        dette: info['10d']
                    },
                    r2: {
                        etablissement: info['10d'],
                        relation: info['10d'],
                        dette: info['10d']
                    },
                    r3: {
                        etablissement: info['10d'],
                        relation: info['10d'],
                        dette: info['10d']
                    }
                },

                table2: {
                    contribuable: {
                        interets_debiteurs1: info['10d'],
                        interets_debiteurs2: info['10d'],
                        interets_debiteurs3: info['10d']
                    },
                    conjoint_partenaire: {
                        interets_debiteurs1: info['10d'],
                        interets_debiteurs2: info['10d'],
                        interets_debiteurs3: info['10d']
                    }
                },

                habitationA: {
                    habitation: info['10d'],
                    numero: info['10d'],
                    rue: info['10d'],
                    date_occupation: info['10d'],
                    interets: {
                        contribuable: info['10d'],
                        conjoint_partenaire: info['10d']
                    }
                },
                habitationB: {
                    habitation: info['10d'],
                    numero: info['10d'],
                    rue: info['10d'],
                    date_occupation: info['10d'],
                    interets: {
                        contribuable: info['10d'],
                        conjoint_partenaire: info['10d']
                    }
                }
            }
        }
    }
}