module.exports = function (info) {
    return {
        signaletique: {
            numero_de_dossier: info['1d9'],
            contribuable: {
                nom: info['1d1'],
                prenom: info['1d3'],
                date_de_naissance: info['1d5'],
                lieu_de_naissance: info['1d7'],
                profession: info['1d10'],
                telephone: info['1d12'],
                courriel: info['1d14'],
                domicile: {
                    actuel: {
                        numero: info['1d16'],
                        rue: info['1d17'],
                        code_postal: info['1d20'],
                        localite: info['1d21'],
                        pays: info['1d24']
                    },
                    ancien: {
                        du_au: info['1d26'],
                        numero: info['1d28'],
                        rue: info['1d29'],
                        code_postal: info['1d32'],
                        localite: info['1d33'],
                        pays: info['1d36']
                    }
                }
            },
            conjoint_partenaire: {
                nom: info['1d2'],
                prenom: info['1d4'],
                date_de_naissance: info['1d6'],
                lieu_de_naissance: info['1d8'],
                profession: info['1d11'],
                telephone: info['1d13'],
                courriel: info['1d15'],
                domicile: {
                    actuel: {
                        numero: info['1d18'],
                        rue: info['1d19'],
                        code_postal: info['1d22'],
                        localite: info['1d23'],
                        pays: info['1d25']
                    },
                    ancien: {
                        du_au: info['1d27'],
                        numero: info['1d30'],
                        rue: info['1d31'],
                        code_postal: info['1d34'],
                        localite: info['1d35'],
                        pays: info['1d37']
                    }
                }
            },
            coordonnees_bancaires: {
                titulaire_du_compte: info['1d38'],
                code_iban: info['1d39'],
                swift_bic: info['1d40']
            }
        }
    }
}