module.exports = function(info){
    return {
        charges_extraordinaires_17: {
            abattement:{
                is_abattement: info['17d'],
                detail_charges: {
                    contribuable: info['17d'],
                    conjoint_partenaire: info['17d']
                },
                table: {
                    r1: info['17d'],
                    r2: info['17d'],
                    r3: info['17d'],
                    r4: info['17d'],
                    r5: info['17d'],
                    r6: info['17d'],
                    r7: info['17d'],
                    r8: info['17d']
                }
                
            },
            abattements_forfaitaires1: {
                is_invalidite: info['17d'],
                contribuable: {
                    is_en_annexe: info['17d'],
                    is_deja_presente: info['17d'],
                    taux: info['17d']
                },
                conjoint_partenaire: {
                    is_en_annexe: info['17d'],
                    is_deja_presente: info['17d'],
                    taux: info['17d']
                }
            },
            abattements_forfaitaires2: {
                is_frais_domestiques: info['17d'],
                contribuable: {
                    nom: info['17d'],
                    montant_mensuel: info['17d'],
                    pendant_mois: info['17d'],
                    montant_annuel: info['17d']
                },
                conjoint_partenaire: {
                    nom: info['17d'],
                    montant_mensuel: info['17d'],
                    pendant_mois: info['17d'],
                    montant_annuel: info['17d']
                }
            }
        },
        charges_extraordinaires_18: {
            is_abattement: info['18d'],
            enfants_moins_21: [
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4']
                },
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4']
                },
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4']
                },
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4']
                }
            ],
            enfants_plus_21: [
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4'],
                    formation: info['18d']
                },
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4'],
                    formation: info['18d']
                },
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4'],
                    formation: info['18d']
                },
                {
                    nom: info['18d1'],
                    prenom: info['18d2'],
                    date_de_naissance: info['18d3'],
                    montant: info['18d4'],
                    formation: info['18d']
                }
            ],
            mobilite_durable: {
                contribuable: [
                    {
                        is_voiture: info['18d'],
                        voiture: info['18d']
                    },
                    {
                        is_cycle: info['18d'],
                        cycle: info['18d']
                    },
                    {
                        is_voiture_electrique: info['18d'],
                        voiture_electrique: info['18d']
                    }
                ]
            },
            is_investissement: info['18d']
        }
    }
}