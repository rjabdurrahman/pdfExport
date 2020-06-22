module.exports = function(info){
    return {
        demande_pour: {
            abattement:{
                is_abattement: info['17d'],
                contrib: {
                    le_detail: info['17d']
                },
                joint_contrib: {
                    le_detail: info['17d']
                },
                cal: info['17d'],
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
            abatt_forfaitaires: {
                is_invalidite: info['17d'],
                is_frais: info['17d'],
                contrib: {
                    is_en_annexe: info['17d'],
                    is_deja_presente: info['17d'],
                    taux: info['17d'],
                    nom_du: info['17d'],
                    montant1: info['17d'],
                    pendant: info['17d'],
                    montant2: info['17d']
                },
                joint_contrib: {
                    is_en_annexe: info['17d'],
                    is_deja_presente: info['17d'],
                    taux: info['17d'],
                    nom_du: info['17d'],
                    montant1: info['17d'],
                    pendant: info['17d'],
                    montant2: info['17d']
                }
            }
        }
    }
}