module.exports = function (info) {
    return {
        rev_extraordinaires_ord: {
            is_demande: info['12d'],
            nature_revenus: {
                r1: info['12d'],
                r2: info['12d'],
                r3: info['12d'],
                r4: info['12d']
            },
            rev_non_expo: {
                table: {
                    contribuable: {
                        r1: info['12d'],
                        r2: info['12d'],
                        r3: info['12d'],
                        r4: info['12d'],
                        article_132_etalement: info['12d'],
                        article_132_pourcentage_50: info['12d'],
                        article_132_pourcentage_25: info['12d'],
                        article_133: info['12d']
                    },
                    conjoint_partenaire: {
                        r1: info['12d'],
                        r2: info['12d'],
                        r3: info['12d'],
                        r4: info['12d'],
                        article_132_etalement: info['12d'],
                        article_132_pourcentage_50: info['12d'],
                        article_132_pourcentage_25: info['12d'],
                        article_133: info['12d']
                    }
                }
            }
        }
    }
}