module.exports = function (info) {
    return {
        capitaux: {
            rev_non_exo: {
                contribuable: {
                    revenus_passibles: info['9d901'],
                    c: {
                        produits_valeurs_double_imp: info['9d903'],
                        produits_valeurs_non_vises: info['9d907'],
                        revenus_alloues: info['9d911'],
                        interets_obligations: info['9d915']
                    },
                    autres_revenus: info['9d919'],
                    totalBCD: info['9d923'],
                    a_deduire: {
                        frais_obtention: info['9d927'],
                        tranche: info['9d931'],
                        totalBCD_deductions: info['9d935']
                    }
                },
                conjoint_partenaire: {
                    revenus_passibles: info['9d902'],
                    c: {
                        produits_valeurs_double_imp: info['9d904'],
                        produits_valeurs_non_vises: info['9d908'],
                        revenus_alloues: info['9d912'],
                        interets_obligations: info['9d916']
                    },
                    autres_revenus: info['9d920'],
                    totalBCD: info['9d924'],
                    a_deduire: {
                        frais_obtention: info['9d928'],
                        tranche: info['9d932'],
                        totalBCD_deductions: info['9d936']
                    }
                },
                totalBCD_cal: info['9d937']
            },
            rev_exo: {
                contribuable: {
                    c: {
                        produits_valeurs_double_imp: info['9d905'],
                        produits_valeurs_non_vises: info['9d909'],
                        revenus_alloues: info['9d913'],
                        interets_obligations: info['9d917']
                    },
                    autres_revenus: info['9d921'],
                    totalBCD: info['9d925'],
                    a_deduire: {
                        frais_obtention: info['9d929'],
                        tranche: info['9d933'],
                        totalBCD_deductions: info['9d938']
                    }
                },
                conjoint_partenaire: {
                    c: {
                        produits_valeurs_double_imp: info['9d906'],
                        produits_valeurs_non_vises: info['9d910'],
                        revenus_alloues: info['9d914'],
                        interets_obligations: info['9d918']
                    },
                    autres_revenus: info['9d922'],
                    totalBCD: info['9d926'],
                    a_deduire: {
                        frais_obtention: info['9d930'],
                        tranche: info['9d934'],
                        totalBCD_deductions: info['9d939']
                    }
                },
                totalBCD_cal: info['9d940']
            }
        }
    }
}