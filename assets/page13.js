module.exports = function (info) {
    return {
        arrerages: {
            is_demande: info['13d'],
            contribuable: {
                obligation_particuliere: info['13d'],
                paiements: {
                    occasion: info['13d'],
                    decision_apres: info['13d'],
                    decision_avant: info['13d']
                }
            },
            conjoint_partenaire: {
                obligation_particuliere: info['13d'],
                paiements: {
                    occasion: info['13d'],
                    decision_apres: info['13d'],
                    decision_avant: info['13d']
                }
            },
            is_demande_conjointe: info['13d'],
            table: {
                r1: {
                    adresse: info['13d'],
                    nature_rente: info['13d'],
                    deduction: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r2: {
                    adresse: info['13d'],
                    nature_rente: info['13d'],
                    deduction: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r3: {
                    adresse: info['13d'],
                    nature_rente: info['13d'],
                    deduction: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r4: {
                    adresse: info['13d'],
                    nature_rente: info['13d'],
                    deduction: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r5: {
                    adresse: info['13d'],
                    nature_rente: info['13d'],
                    deduction: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r6: {
                    adresse: info['13d'],
                    nature_rente: info['13d'],
                    deduction: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                }
            }
        }
    }
}