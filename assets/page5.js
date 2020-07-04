
module.exports = function(info){
    return {
        benefice_commercial: {
            determination_benefice_commercial: {
                revenus_non_exoneres: {
                    contribuable: {
                        benefice_entreprise: info['5d1'],
                        parts_benefice: info['5d5'],
                        recettes: info['5d9'],
                        depenses_forfaitaires: info['5d13'],
                        depenses_annexe: info['5d17'],
                        benefice_cessation: info['5d21'],
                        totalABCD : 
                        (Number(info['5d1']) + Number(info['5d5']) + Number(info['5d9']) 
                        - Number(info['5d13']) - Number(info['5d17']) + Number(info['5d21'])) || '',
                        exoneration: info['5d30']
                    },
                    conjoint_partenaire: {
                        benefice_entreprise: info['5d2'],
                        parts_benefice: info['5d6'],
                        recettes: info['5d10'],
                        depenses_forfaitaires: info['5d14'],
                        depenses_annexe: info['5d18'],
                        benefice_cessation: info['5d22'],
                        exoneration: info['5d31']
                    }
                },
                revenus_exoneres: {
                    contribuable: {
                        benefice_entreprise: info['5d3'],
                        parts_benefice: info['5d7'],
                        recettes: info['5d11'],
                        depenses_forfaitaires: info['5d15'],
                        depenses_annexe: info['5d19'],
                        benefice_cessation: info['5d23']
                    },
                    conjoint_partenaire: {
                        benefice_entreprise: info['5d4'],
                        parts_benefice: info['5d8'],
                        recettes: info['5d12'],
                        depenses_forfaitaires: info['5d16'],
                        depenses_annexe: info['5d20'],
                        benefice_cessation: info['5d24']
                    }
                },
                etat_partie: info['5d33']
            },
            determination_benefice_agricole_et_forestier: {
                rev_non_exo: {
                    contribuable: {
                        benefice_agricole: info['5d38'],
                        parts_benefice: info['5d42'],
                        recettes: info['5d46'],
                        depenses: info['5d50'],
                        benefice_cessation: info['5d54'],
                        investissements: info['5d63'],
                        exoneration: info['5d66']
                    },
                    conjoint_partenaire: {
                        benefice_agricole: info['5d39'],
                        parts_benefice: info['5d43'],
                        recettes: info['5d47'],
                        depenses: info['5d51'],
                        benefice_cessation: info['5d55'],
                        investissements: info['5d64'],
                        exoneration: info['5d67']
                    }
                },
                rev_exo: {
                    contribuable: {
                        benefice_agricole: info['5d40'],
                        parts_benefice: info['5d44'],
                        recettes: info['5d48'],
                        depenses: info['5d52'],
                        benefice_cessation: info['5d56']
                    },
                    conjoint_partenaire: {
                        benefice_agricole: info['5d41'],
                        parts_benefice: info['5d45'],
                        recettes: info['5d49'],
                        depenses: info['5d53'],
                        benefice_cessation: info['5d57']
                    }
                },
                etat_partie: info['5d69']
            }
        }
    }
}