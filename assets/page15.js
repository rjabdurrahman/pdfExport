module.exports = function (info) {
    return {
        depenses_speciales: {
            cotisations_payees: {
                contribuable: {
                    cotisations: info['15d']
                },
                conjoint_partenaire: {
                    cotisations: info['15d']
                }
            },
            prevoyance_vieillesse_t1: [
                {
                    entreprise: info['15d'],
                    debut_contrat: info['15d'],
                    fin_contrat: info['15d']
                },
                {
                    entreprise: info['15d'],
                    debut_contrat: info['15d'],
                    fin_contrat: info['15d']
                },
                {
                    entreprise: info['15d'],
                    debut_contrat: info['15d'],
                    fin_contrat: info['15d']
                },
                {
                    entreprise: info['15d'],
                    debut_contrat: info['15d'],
                    fin_contrat: info['15d']
                }
            ],
            prevoyance_vieillesse_t2: {
                contribuable: {
                    primes_versees_1: info['14d'],
                    primes_versees_2: info['14d'],
                    primes_versees_3: info['14d'],
                    primes_versees_4: info['14d'],
                    plafond_3200: info['14d']
                },
                conjoint_partenaire: {
                    primes_versees_1: info['14d'],
                    primes_versees_2: info['14d'],
                    primes_versees_3: info['14d'],
                    primes_versees_4: info['14d'],
                    plafond_3200: info['14d']
                }
            },
            epargne_logement_t1: [
                {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut_contrat: info['15d'],
                },
                {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut_contrat: info['15d'],
                },
                {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut_contrat: info['15d'],
                },
                {
                    caisse: info['15d'],
                    souscripteur: info['15d'],
                    debut_contrat: info['15d'],
                }
            ],
            epargne_logement_t2: {
                contribuable: {
                    cotisations_versees1: info['14d'],
                    cotisations_versees2: info['14d'],
                    cotisations_versees3: info['14d'],
                    cotisations_versees4: info['14d'],
                    plafond_672_1344: info['14d']
                },
                conjoint_partenaire: {
                    cotisations_versees1: info['14d'],
                    cotisations_versees2: info['14d'],
                    cotisations_versees3: info['14d'],
                    cotisations_versees4: info['14d'],
                    plafond_672_1344: info['14d']
                }
            },
            last: info['14d']
        }
    }
}