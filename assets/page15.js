module.exports = function (info) {
    return {
        depenses_speciales15: {
            cotisations_payees: {
                contribuable: {
                    cotisations: info['15d1501']
                },
                conjoint_partenaire: {
                    cotisations: info['15d1502']
                },
                total: info['15d1503']
            },
            prevoyance_vieillesse_t1: [
                {
                    entreprise: info['15d1504'],
                    debut_contrat: info['15d1505'],
                    fin_contrat: info['15d1506']
                },
                {
                    entreprise: info['15d1509'],
                    debut_contrat: info['15d1510'],
                    fin_contrat: info['15d1511']
                },
                {
                    entreprise: info['15d1514'],
                    debut_contrat: info['15d1515'],
                    fin_contrat: info['15d1516']
                },
                {
                    entreprise: info['15d1519'],
                    debut_contrat: info['15d1520'],
                    fin_contrat: info['15d1521']
                }
            ],
            prevoyance_vieillesse_t2: {
                contribuable: {
                    primes_versees_1: info['15d1507'],
                    primes_versees_2: info['15d1512'],
                    primes_versees_3: info['15d1517'],
                    primes_versees_4: info['15d1522'],
                    primes_versees_total: info['15d1524'],
                    plafond_3200: info['15d1526'],
                    plafond_3200_total: info['15d1528']
                },
                conjoint_partenaire: {
                    primes_versees_1: info['15d1508'],
                    primes_versees_2: info['15d1513'],
                    primes_versees_3: info['15d1518'],
                    primes_versees_4: info['15d1523'],
                    primes_versees_total: info['15d1525'],
                    plafond_3200: info['15d1527']
                }
            },
            epargne_logement_t1: [
                {
                    caisse: info['15d1529'],
                    souscripteur: info['15d1530'],
                    debut_contrat: info['15d1531'],
                },
                {
                    caisse: info['15d1534'],
                    souscripteur: info['15d1535'],
                    debut_contrat: info['15d1536'],
                },
                {
                    caisse: info['15d1539'],
                    souscripteur: info['15d1540'],
                    debut_contrat: info['15d1541'],
                },
                {
                    caisse: info['15d1544'],
                    souscripteur: info['15d1545'],
                    debut_contrat: info['15d1546'],
                }
            ],
            prevoyance_vieillesse_111ter_t1: [
                {
                    entreprise: info['15d18'],
                    debut_contrat: info['15d19'],
                    fin_contrat: info['15d20']
                },
                {
                    entreprise: info['15d23'],
                    debut_contrat: info['15d24'],
                    fin_contrat: info['15d25']
                }
            ],
            prevoyance_vieillesse_111ter_t2: {
                contribuable: {
                    primes_payees_1: info['15d21'],
                    primes_payees_2: info['15d26'],
                    primes_payees_total: info['15d21_26'],
                    total: info['15d_28_29']
                },
                conjoint_partenaire: {
                    primes_payees_1: info['15d22'],
                    primes_payees_2: info['15d27'],
                    primes_payees_total: info['15d22_27']
                }
            },
            epargne_logement_t2: {
                contribuable: {
                    cotisations_versees1: info['15d1532'],
                    cotisations_versees2: info['15d1537'],
                    cotisations_versees3: info['15d1542'],
                    cotisations_versees4: info['15d1547'],
                    plafond_672_1344: info['15d1551'],
                    cotisations_versees_total: info['15d1549']
                },
                conjoint_partenaire: {
                    cotisations_versees1: info['15d1533'],
                    cotisations_versees2: info['15d1538'],
                    cotisations_versees3: info['15d1543'],
                    cotisations_versees4: info['15d1548'],
                    plafond_672_1344: info['15d1552'],
                    cotisations_versees_total: info['15d1550']
                }
            },
            total_depenses_speciales: info['15d1553'],
            total_depenses_speciales_1: info['15d1554']
        }
    }
}