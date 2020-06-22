
module.exports = function(info){
    return {
        options: {
            epoux_contribuable: {
                is_imposition_collective: info['4d']
            },
            partenaires: {
                is_imposition_collective: info['4d'],
                is_date_declaration_partenariat: info['4d3'],
                is_annexe: info['4d'],
                is_deja_presente: info['4d']
            },
            imposition_individuelle: {
                is_confirmation_choix: info['4d'],
                is_courrier: info['4d'],
                is_myguichet_lu: info['4d'],
                is_annee_imposition: info['4d'],
                is_imposition_collective: info['4d'],
                is_imposition_individuelle_pure: info['4d'],
                is_imposition_individuelle_reallocation: info['4d']
            },
            informations_complementaires: {
                contribuable: {
                    date_de_naissance: info['4d13'],
                    numero_dossier_individuel: info['4d15'],
                    titulaire_du_compte: info['4d17'],
                    code_iban: info['4d19'],
                    swift_bic: info['4d21'],
                    taux_avances_communes: info['4d23'],
                    taux_revenu_imposable: info['4d25']
                },
                conjoint_partenaire: {
                    date_de_naissance: info['4d14'],
                    numero_dossier_individuel: info['4d16'],
                    titulaire_du_compte: info['4d18'],
                    code_iban: info['4d20'],
                    swift_bic: info['4d22'],
                    taux_avances_communes: info['4d24'],
                    taux_revenu_imposable: info['4d26']
                }
            },
            signature: {
                lieu: info['4d27'],
                date: info['4d28']
            }
        }
    }
}