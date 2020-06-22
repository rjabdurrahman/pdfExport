module.exports = function(info){
    return {
        dep_spe2: {
            c: {
                contrib: {
                    cotisations: info['15d']
                },
                jon_contrib: {
                    cotisations: info['15d']
                },
                cal: info['15d']
            },
            table_d:{
                r1: {
                    entreprise: info['15d'],
                    debut: info['15d'],
                    fin: info['15d'],
                    primes1: info['15d'],
                    primes2: info['15d']
                },
                r2: {
                    entreprise: info['15d'],
                    debut: info['15d'],
                    fin: info['15d'],
                    primes1: info['15d'],
                    primes2: info['15d']
                },
                r3: {
                    entreprise: info['15d'],
                    debut: info['15d'],
                    fin: info['15d'],
                    primes1: info['15d'],
                    primes2: info['15d']
                },
                r4: {
                    entreprise: info['15d'],
                    debut: info['15d'],
                    fin: info['15d'],
                    primes1: info['15d'],
                    primes2: info['15d']
                },
                r5: {
                    total1: info['15d'],
                    total2: info['15d']
                },
                r6: {
                    plafond: info['15d']
                },
                r7: {
                    cal: info['15d']
                }
            },
            table_e: {
                r1: {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut: info['15d'],
                    cotisations1: info['15d'],
                    cotisations2: info['15d']
                },
                r2: {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut: info['15d'],
                    cotisations1: info['15d'],
                    cotisations2: info['15d']
                },
                r3: {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut: info['15d'],
                    cotisations1: info['15d'],
                    cotisations2: info['15d']
                },
                r4: {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut: info['15d'],
                    cotisations1: info['15d'],
                    cotisations2: info['15d']
                },
                r5: {
                    total1: info['15d'],
                    total2: info['15d']
                },
                r6: {
                    plafond: info['15d']
                },
                r7: {
                    total_des: info['15d']
                },
                r8: {
                    montant: info['15d']
                }
            }
        }
    }
}