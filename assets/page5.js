
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
                        total_abcd: info['5d25'],
                        exoneration: info['5d30'],
                        total: info['5d34']
                    },
                    conjoint_partenaire: {
                        benefice_entreprise: info['5d2'],
                        parts_benefice: info['5d6'],
                        recettes: info['5d10'],
                        depenses_forfaitaires: info['5d14'],
                        depenses_annexe: info['5d18'],
                        benefice_cessation: info['5d22'],
                        total_abcd : info['5d26'],
                        exoneration: info['5d31'],
                        total: info['5d35']
                    },
                    exonerationTotal: info['5d32']
                },
                revenus_exoneres: {
                    contribuable: {
                        benefice_entreprise: info['5d3'],
                        parts_benefice: info['5d7'],
                        recettes: info['5d11'],
                        depenses_forfaitaires: info['5d15'],
                        depenses_annexe: info['5d19'],
                        benefice_cessation: info['5d23'],
                        total_abcd : info['5d27'],
                        total: info['5d36']
                    },
                    conjoint_partenaire: {
                        benefice_entreprise: info['5d4'],
                        parts_benefice: info['5d8'],
                        recettes: info['5d12'],
                        depenses_forfaitaires: info['5d16'],
                        depenses_annexe: info['5d20'],
                        benefice_cessation: info['5d24'],
                        total_abcd : info['5d28'],
                        total: info['5d37']
                    },
                    total: info['5d29']
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
                        exoneration: info['5d66'],
                        total_abcd: info['5d58'],
                        total: info['5d70']
                    },
                    conjoint_partenaire: {
                        benefice_agricole: info['5d39'],
                        parts_benefice: info['5d43'],
                        recettes: info['5d47'],
                        depenses: info['5d51'],
                        benefice_cessation: info['5d55'],
                        investissements: info['5d64'],
                        exoneration: info['5d67'],
                        total_abcd: info['5d59'],
                        total: info['5d71']
                    },
                    investissements_total: info['5d65'],
                    exoneration_total: info['5d68']
                },
                rev_exo: {
                    contribuable: {
                        benefice_agricole: info['5d40'],
                        parts_benefice: info['5d44'],
                        recettes: info['5d48'],
                        depenses: info['5d52'],
                        benefice_cessation: info['5d56'],
                        total_abcd: info['5d60'],
                        total: info['5d72']
                    },
                    conjoint_partenaire: {
                        benefice_agricole: info['5d41'],
                        parts_benefice: info['5d45'],
                        recettes: info['5d49'],
                        depenses: info['5d53'],
                        benefice_cessation: info['5d57'],
                        total_abcd: info['5d61'],
                        total: info['5d73']
                    },
                    total: info['5d62']
                },
                etat_partie: info['5d69']
            }
        }
    }
}