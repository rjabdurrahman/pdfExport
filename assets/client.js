let data = {
    signaletique: {
        numero_de_dossier: '',
        contribuable: {
            nom: '',
            prenom: '',
            date_de_naissance: '',
            lieu_de_naissance: '',
            profession: '',
            telephone: '',
            courriel: '',
            domicile: {
                actuel: {
                    numero: '',
                    rue: '',
                    code_postal: '',
                    localite: '',
                    pays: ''
                },
                ancien: {
                    du_au: '',
                    numero: '',
                    rue: '',
                    code_postal: '',
                    localite: '',
                    pays: ''
                }
            }
        },
        conjoint_partenaire: {
            nom: '',
            prenom: '',
            date_de_naissance: '',
            lieu_de_naissance: '',
            profession: '',
            telephone: '',
            courriel: '',
            domicile: {
                actuel: {
                    numero: '',
                    rue: '',
                    code_postal: '',
                    localite: '',
                    pays: ''
                },
                ancien: {
                    du_au: '',
                    numero: '',
                    rue: '',
                    code_postal: '',
                    localite: '',
                    pays: ''
                }
            }
        },
        coordonnes_bancaires: {
            titulaire_du_compte: '',
            code_iban: '',
            swift_bic: ''
        }
    }
}

module.exports = data;