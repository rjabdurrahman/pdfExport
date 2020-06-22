module.exports = function(info){
    return {
        depenses_speciales: {
            interets_debiteurs_table1:{
                r1: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                },
                r2: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                },
                r3: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                },
                r4: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                },
                r5: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                },
                r6: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                },
                r7: {
                    adresse: info['14d'],
                    relation: info['14d'],
                    montant: info['14d']
                }
            },
            interets_debiteurs_table2: {
                contribuable: {
                    r1: info['14d'],
                    r2: info['14d'],
                    r3: info['14d'],
                    r4: info['14d'],
                    r5: info['14d'],
                    r6: info['14d'],
                    r7: info['14d']
                },
                conjoint_partenaire: {
                    r1: info['14d'],
                    r2: info['14d'],
                    r3: info['14d'],
                    r4: info['14d'],
                    r5: info['14d'],
                    r6: info['14d'],
                    r7: info['14d']
                }
            },
            primes_table1: {
                r1: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r2: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r3: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r4: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r5: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r6: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r7: {
                    entreprise: info['14d'],
                    risque: info['14d']
                },
                r8: {
                    entreprise: info['14d'],
                    risque: info['14d']
                }
            },
            primes_table2: {
                contribuable: {
                    r1: info['14d'],
                    r2: info['14d'],
                    r3: info['14d'],
                    r4: info['14d'],
                    r5: info['14d'],
                    r6: info['14d'],
                    r7: info['14d'],
                    r8: info['14d']
                },
                conjoint_partenaire: {
                    r1: info['14d'],
                    r2: info['14d'],
                    r3: info['14d'],
                    r4: info['14d'],
                    r5: info['14d'],
                    r6: info['14d'],
                    r7: info['14d'],
                    r8: info['14d']
                }
            },
            plafond_672: info['14d'],
            montant_moins_eleve: info['14d'],
            majoration_plafond: {
                contribuable: {
                    is_acquisition: info['14d'],
                    is_investissements: info['14d'],
                    nombre_enfants: info['14d'] 
                },
                conjoint_partenaire: {
                    is_acquisition: info['14d'],
                    is_investissements: info['14d'],
                    nombre_enfants: info['14d'] 
                }
            }
        }
    }
}