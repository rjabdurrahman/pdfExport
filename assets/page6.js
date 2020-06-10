
module.exports = function(info){
    return {
        ben_prov: {
            rev_non_expo: {
                contribuable: {
                    benefice: info['6d'],
                    recettes: info['6d'],
                    depenses: info['6d'],
                    parts_benefice: info['6d'],
                    benefice_cessation: info['6d'],
                    d_montant_brut: info['6d'],
                    d_depenses: info['6d'],
                    e_montant_brut: info['6d'],
                    e_depenses: info['6d'],
                    exoneration: info['6d']
                },
                conjoint_partenaire: {
                    benefice: info['6d'],
                    recettes: info['6d'],
                    depenses: info['6d'],
                    parts_benefice: info['6d'],
                    benefice_cessation: info['6d'],
                    d_montant_brut: info['6d'],
                    d_depenses: info['6d'],
                    e_montant_brut: info['6d'],
                    e_depenses: info['6d'],
                    exoneration: info['6d']
                }
            },
            rev_expo: {
                contribuable: {
                    benefice: info['6d'],
                    recettes: info['6d'],
                    depenses: info['6d'],
                    parts_benefice: info['6d'],
                    benefice_cessation: info['6d'],
                    d_montant_brut: info['6d'],
                    d_depenses: info['6d'],
                    e_montant_brut: info['6d'],
                    e_depenses: info['6d']
                },
                conjoint_partenaire: {
                    benefice: info['6d'],
                    recettes: info['6d'],
                    depenses: info['6d'],
                    parts_benefice: info['6d'],
                    benefice_cessation: info['6d'],
                    d_montant_brut: info['6d'],
                    d_depenses: info['6d'],
                    e_montant_brut: info['6d'],
                    e_depenses: info['6d']
                }
            },
            etat_partie: info['6d']
        }
    }
}