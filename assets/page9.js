module.exports = function (info) {
    return {
        capitaux: {
            rev_non_exo: {
                contribuable: {
                    revenus_passibles: info['9d'],
                    c: {
                        produits_valeurs_double_imp: info['9d'],
                        produits_valeurs_non_vises: info['9d'],
                        revenus_alloues: info['9d'],
                        interets_obligations: info['9d']
                    },
                    autres_revenus: info['9d'],
                    totalBCD: info['9d'],
                    a_deduire: {
                        frais_obtention: info['9d'],
                        tranche: info['9d'],
                        totalBCD_deductions: info['9d']
                    }
                },
                conjoint_partenaire: {
                    revenus_passibles: info['9d'],
                    c: {
                        produits_valeurs_double_imp: info['9d'],
                        produits_valeurs_non_vises: info['9d'],
                        revenus_alloues: info['9d'],
                        interets_obligations: info['9d']
                    },
                    autres_revenus: info['9d'],
                    totalBCD: info['9d'],
                    a_deduire: {
                        frais_obtention: info['9d'],
                        tranche: info['9d'],
                        totalBCD_deductions: info['9d']
                    }
                },
                totalBCD_cal: info['9d']
            },
            rev_exo: {
                contribuable: {
                    c: {
                        produits_valeurs_double_imp: info['9d'],
                        produits_valeurs_non_vises: info['9d'],
                        revenus_alloues: info['9d'],
                        interets_obligations: info['9d']
                    },
                    autres_revenus: info['9d'],
                    totalBCD: info['9d'],
                    a_deduire: {
                        frais_obtention: info['9d'],
                        tranche: info['9d'],
                        totalBCD_deductions: info['9d']
                    }
                },
                conjoint_partenaire: {
                    c: {
                        produits_valeurs_double_imp: info['9d'],
                        produits_valeurs_non_vises: info['9d'],
                        revenus_alloues: info['9d'],
                        interets_obligations: info['9d']
                    },
                    autres_revenus: info['9d'],
                    totalBCD: info['9d'],
                    a_deduire: {
                        frais_obtention: info['9d'],
                        tranche: info['9d'],
                        totalBCD_deductions: info['9d']
                    }
                },
                totalBCD_cal: info['9d']
            }
        }
    }
}