module.exports = function (info) {
    return {
        arrerages: {
            is_demande: info['13d1310'],
            contribuable: {
                obligation_particuliere: info['13d1301'],
                paiements: {
                    occasion: info['13d1304'],
                    decision_apres: info['13d1307'],
                    decision_avant: info['13d1311']
                }
            },
            conjoint_partenaire: {
                obligation_particuliere: info['13d1302'],
                paiements: {
                    occasion: info['13d1305'],
                    decision_apres: info['13d1308'],
                    decision_avant: info['13d1312']
                }
            },
            is_demande_conjointe: info['13d13'],
            table: {
                r1: {
                    adresse: info['13d1314'],
                    nature_rente: info['13d1315'],
                    deduction: info['13d1316'],
                    charges1: info['13d1317'],
                    charges2: info['13d1318']
                },
                r2: {
                    adresse: info['13d1319'],
                    nature_rente: info['13d1320'],
                    deduction: info['13d1321'],
                    charges1: info['13d1322'],
                    charges2: info['13d1323']
                },
                r3: {
                    adresse: info['13d1324'],
                    nature_rente: info['13d1325'],
                    deduction: info['13d1326'],
                    charges1: info['13d1327'],
                    charges2: info['13d1328']
                },
                r4: {
                    adresse: info['13d1329'],
                    nature_rente: info['13d1330'],
                    deduction: info['13d1331'],
                    charges1: info['13d1332'],
                    charges2: info['13d1333']
                },
                r5: {
                    adresse: info['13d1334'],
                    nature_rente: info['13d1335'],
                    deduction: info['13d1336'],
                    charges1: info['13d1337'],
                    charges2: info['13d1338']
                },
                r6: {
                    adresse: info['13d1339'],
                    nature_rente: info['13d1340'],
                    deduction: info['13d1341'],
                    charges1: info['13d1342'],
                    charges2: info['13d1343']
                }
            }
        }
    }
}