
module.exports = function(info){
    return {
        ben_comrcial: {
            drter_ben_com: {
                rev_non_expo: {
                    contribuable: {
                        benefice_entreprise: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses_forfaitaires: info['5d'],
                        depenses_annexe: info['5d'],
                        benefice_cessation: info['5d'],
                        exoneration: info['5d']
                    },
                    conjoint_partenaire: {
                        benefice_entreprise: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses_forfaitaires: info['5d'],
                        depenses_annexe: info['5d'],
                        benefice_cessation: info['5d'],
                        exoneration: info['5d']
                    }
                },
                rev_expo: {
                    contribuable: {
                        benefice_entreprise: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses_forfaitaires: info['5d'],
                        depenses_annexe: info['5d'],
                        benefice_cessation: info['5d']
                    },
                    conjoint_partenaire: {
                        benefice_entreprise: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses_forfaitaires: info['5d'],
                        depenses_annexe: info['5d'],
                        benefice_cessation: info['5d']
                    }
                },
                etat_partie: info['5d']
            },
            deter_ben_agri: {
                rev_non_expo: {
                    contribuable: {
                        benefice_agricole: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses: info['5d'],
                        benefice_cessation: info['5d'],
                        investissements: info['5d'],
                        exoneration: info['5d']
                    },
                    conjoint_partenaire: {
                        benefice_agricole: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses: info['5d'],
                        benefice_cessation: info['5d'],
                        investissements: info['5d'],
                        exoneration: info['5d']
                    }
                },
                rev_expo: {
                    contribuable: {
                        benefice_agricole: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses: info['5d'],
                        benefice_cessation: info['5d']
                    },
                    conjoint_partenaire: {
                        benefice_agricole: info['5d'],
                        parts_benefice: info['5d'],
                        recettes: info['5d'],
                        depenses: info['5d'],
                        benefice_cessation: info['5d']
                    }
                },
                etat_partie: info['5d']
            }
        }
    }
}