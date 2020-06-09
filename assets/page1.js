module.exports = function (info) {
    return {
        signaletique: {
            numero_de_dossier: info['1d9'],
            contribuable: {
                nom: info['1d1'],
                prenom: info['1d3'],
                date_de_naissance: info['1d5'],
                lieu_de_naissance: info['1d7'],
                profession: info['1d1'],
                telephone: info['1d1'],
                courriel: info['1d1'],
                domicile: {
                    actuel: {
                        numero: info['1d1'],
                        rue: info['1d1'],
                        code_postal: info['1d1'],
                        localite: info['1d1'],
                        pays: info['1d1']
                    },
                    ancien: {
                        du_au: info['1d1'],
                        numero: info['1d1'],
                        rue: info['1d1'],
                        code_postal: info['1d1'],
                        localite: info['1d1'],
                        pays: info['1d1']
                    }
                }
            },
            conjoint_partenaire: {
                nom: info['1d1'],
                prenom: info['1d1'],
                date_de_naissance: info['1d1'],
                lieu_de_naissance: info['1d1'],
                profession: info['1d1'],
                telephone: info['1d1'],
                courriel: info['1d1'],
                domicile: {
                    actuel: {
                        numero: info['1d1'],
                        rue: info['1d1'],
                        code_postal: info['1d1'],
                        localite: info['1d1'],
                        pays: info['1d1']
                    },
                    ancien: {
                        du_au: info['1d1'],
                        numero: info['1d1'],
                        rue: info['1d1'],
                        code_postal: info['1d1'],
                        localite: info['1d1'],
                        pays: info['1d1']
                    }
                }
            },
            coordonnes_bancaires: {
                titulaire_du_compte: info['1d1'],
                code_iban: info['1d1'],
                swift_bic: info['1d1']
            }
        }
    }
}