module.exports = function (info) {
    return {
        rev_nets_divers: {
            rev_non_exo: {
                contribuable: {
                    revenu_cession: info['11d'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d'],
                        benefice_cession: info['11d']
                    },
                    revenu_prestations: {
                        recettes: info['11d'],
                        frais_obtention: info['11d']
                    },
                    remboursement: info['11d'],
                    autre_remboursement: info['11d'],
                    total: info['11d']
                },
                conjoint_partenaire: {
                    revenu_cession: info['11d'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d'],
                        benefice_cession: info['11d']
                    },
                    revenu_prestations: {
                        recettes: info['11d'],
                        frais_obtention: info['11d']
                    },
                    remboursement: info['11d'],
                    autre_remboursement: info['11d'],
                    total: info['11d']
                },
                totalCal: info['11d']
            },
            rev_exo: {
                contribuable: {
                    revenu_cession: info['11d'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d'],
                        benefice_cession: info['11d']
                    },
                    revenu_prestations: {
                        recettes: info['11d'],
                        frais_obtention: info['11d']
                    },
                    remboursement: info['11d'],
                    autre_remboursement: info['11d'],
                    total: info['11d']
                },
                conjoint_partenaire: {
                    revenu_cession: info['11d'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d'],
                        benefice_cession: info['11d']
                    },
                    revenu_prestations: {
                        recettes: info['11d'],
                        frais_obtention: info['11d']
                    },
                    remboursement: info['11d'],
                    autre_remboursement: info['11d'],
                    total: info['11d']
                },
                totalCal: info['11d']
            },
            acquisitions_et_cessions: {
                table: {
                    r1: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation: info['11d'],
                        superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r2: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation: info['11d'],
                        superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r3: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation: info['11d'],
                        superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r4: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation: info['11d'],
                        superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r5: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation: info['11d'],
                        superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    }
                }
            }
        }
    }
}