
module.exports = function(info){
    return {
        ben_prov: {
            rev_non_exo: {
                contribuable: {
                    benefice: info['6d1'],
                    recettes: info['6d5'],
                    depenses: info['6d9'],
                    parts_benefice: info['6d13'],
                    benefice_cessation: info['6d17'],
                    montant_brut: info['6d21'],
                    depenses: info['6d25'],
                    total1: info['6d29'],
                    montant_brut: info['6d33'],
                    depenses: info['6d37'],
                    total2: info['6d41'],
                    total3: info['6d50'],
                    exoneration: info['6d46']
                },
                conjoint_partenaire: {
                    benefice: info['6d2'],
                    recettes: info['6d6'],
                    depenses: info['6d10'],
                    parts_benefice: info['6d14'],
                    benefice_cessation: info['6d18'],
                    montant_brut: info['6d22'],
                    depenses: info['6d26'],
                    total1: info['6d30'],
                    montant_brut: info['6d34'],
                    depenses: info['6d38'],
                    total2: info['6d42'],
                    total3: info['6d51'],
                    exoneration: info['6d47']
                }
            },
            rev_exo: {
                contribuable: {
                    benefice: info['6d3'],
                    recettes: info['6d7'],
                    depenses: info['6d11'],
                    parts_benefice: info['6d15'],
                    benefice_cessation: info['6d19'],
                    montant_brut: info['6d23'],
                    depenses: info['6d27'],
                    total1: info['6d31'],
                    montant_brut: info['6d35'],
                    depenses: info['6d39'],
                    total2: info['6d43'],
                    total3: info['6d52']
                },
                conjoint_partenaire: {
                    benefice: info['6d4'],
                    recettes: info['6d8'],
                    depenses: info['6d12'],
                    parts_benefice: info['6d16'],
                    benefice_cessation: info['6d20'],
                    montant_brut: info['6d24'],
                    depenses: info['6d28'],
                    total1: info['6d32'],
                    montant_brut: info['6d36'],
                    depenses: info['6d40'],
                    total2: info['6d44'],
                    total3: info['6d53']
                }
            },
            etat_partie: info['6d49']
        }
    }
}