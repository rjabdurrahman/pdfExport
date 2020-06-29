module.exports = function(info){
    return {
        etat_civil: {
            status: info['3d1'],
            is_depuis_le: info['3d5'],
            separe_e: {
                is_dispense_legale: info['3d6'] ? info['3d6'] : 'Off',
                is_jugement_separation: info['3d7'] ? info['3d7'] : 'Off',
                is_dispense_autorite_judiciaire: info['3d8'] ? info['3d8'] : 'Off',
                is_le: info['3d10']
            },
            non_residents: {
                contribuable: {
                    nom_prenom: info['3d11'],
                    date_de_naissance: info['3d13'],
                    numero: info['3d15'],
                    rue: info['3d16'],
                    code_postal: info['3d19'],
                    localite: info['3d20']
                },
                conjoint_partenaire: {
                    nom_prenom: info['3d12'],
                    date_de_naissance: info['3d14'],
                    numero: info['3d17'],
                    rue: info['3d18'],
                    code_postal: info['3d21'],
                    localite: info['3d22']
                }
            },
            assimilation: {
                a: {
                    revenus_mondiaux: info['3d23'] ? info['3d23'] : 'Off'
                },
                b: {
                    revenus_nets_annuels: info['3d24'] ? info['3d24'] : 'Off'
                },
                c: {
                    revenus_professionels: info['3d25'] ? info['3d25'] : 'Off'
                },
                calculation: {
                    total_revenus_non_exoneres: info['3d26'],
                    total_revenus_non_exoneres_et_exoneres: info['3d27'],
                    pourcentage: info['3d28']
                }
            }
        }
    }
}