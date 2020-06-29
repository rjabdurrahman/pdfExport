module.exports = function(info){
    return {
        depenses_speciales14: {
            interets_debiteurs_table1:{
                r1: {
                    adresse: info['14d1401'],
                    relation: info['14d1402'],
                    montant: info['14d1403']
                },
                r2: {
                    adresse: info['14d1406'],
                    relation: info['14d1407'],
                    montant: info['14d1408']
                },
                r3: {
                    adresse: info['14d1411'],
                    relation: info['14d1412'],
                    montant: info['14d1413']
                },
                r4: {
                    adresse: info['14d1416'],
                    relation: info['14d1417'],
                    montant: info['14d1418']
                },
                r5: {
                    adresse: info['14d1421'],
                    relation: info['14d1422'],
                    montant: info['14d1423']
                },
                r6: {
                    adresse: info['14d1426'],
                    relation: info['14d1427'],
                    montant: info['14d1428']
                },
                r7: {
                    adresse: info['14d1431'],
                    relation: info['14d1432'],
                    montant: info['14d1433']
                }
            },
            interets_debiteurs_table2: {
                contribuable: {
                    r1: info['14d1404'],
                    r2: info['14d1409'],
                    r3: info['14d1414'],
                    r4: info['14d1419'],
                    r5: info['14d1424'],
                    r6: info['14d1429'],
                    r7: info['14d1434']
                },
                conjoint_partenaire: {
                    r1: info['14d1405'],
                    r2: info['14d1410'],
                    r3: info['14d1415'],
                    r4: info['14d1420'],
                    r5: info['14d1425'],
                    r6: info['14d1430'],
                    r7: info['14d1435']
                }
            },
            primes_table1: {
                r1: {
                    entreprise: info['14d1436'],
                    risque: info['14d1437']
                },
                r2: {
                    entreprise: info['14d1440'],
                    risque: info['14d1441']
                },
                r3: {
                    entreprise: info['14d1444'],
                    risque: info['14d1445']
                },
                r4: {
                    entreprise: info['14d1448'],
                    risque: info['14d1449']
                },
                r5: {
                    entreprise: info['14d1452'],
                    risque: info['14d1453']
                },
                r6: {
                    entreprise: info['14d1456'],
                    risque: info['14d1457']
                },
                r7: {
                    entreprise: info['14d1460'],
                    risque: info['14d1461']
                },
                r8: {
                    entreprise: info['14d1464'],
                    risque: info['14d1465']
                }
            },
            primes_table2: {
                contribuable: {
                    r1: info['14d1438'],
                    r2: info['14d1442'],
                    r3: info['14d1446'],
                    r4: info['14d1450'],
                    r5: info['14d1454'],
                    r6: info['14d1458'],
                    r7: info['14d1462'],
                    r8: info['14d1466']
                },
                conjoint_partenaire: {
                    r1: info['14d1439'],
                    r2: info['14d1443'],
                    r3: info['14d1447'],
                    r4: info['14d1451'],
                    r5: info['14d1455'],
                    r6: info['14d1459'],
                    r7: info['14d1463'],
                    r8: info['14d1467']
                }
            },
            plafond_672: info['14d1470'],
            montant_moins_eleve: info['14d1471'],
            majoration_plafond: {
                contribuable: {
                    is_acquisition: info['14d1472'] ? info['14d1472'] : 'Off',
                    is_investissements: info['14d1474'] ? info['14d1474'] : 'Off',
                    nombre_enfants: info['14d1476'] 
                },
                conjoint_partenaire: {
                    is_acquisition: info['14d1473'] ? info['14d1473'] : 'Off',
                    is_investissements: info['14d1475'] ? info['14d1475'] : 'Off',
                    nombre_enfants: info['14d1477'] 
                }
            }
        }
    }
}