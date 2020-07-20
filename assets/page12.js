module.exports = function (info) {
    return {
        rev_extraordinaires_ord: {
            is_demande: info['12d1201'] ? info['12d1201'] : 'Off',
            nature_revenus: {
                r1: info['12d1202'],
                r2: info['12d1205'],
                r3: info['12d1208'],
                r4: info['12d1211']
            },
            rev_non_expo: {
                table: {
                    contribuable: {
                        r1: info['12d1203'],
                        r2: info['12d1206'],
                        r3: info['12d1209'],
                        r4: info['12d1212'],
                        totaux: info['12d1214'],
                        article_132_etalement: info['12d1216'],
                        article_132_pourcentage_50: info['12d1219'],
                        article_132_pourcentage_25: info['12d1222'],
                        article_133: info['12d1225']
                    },
                    conjoint_partenaire: {
                        r1: info['12d1204'],
                        r2: info['12d1207'],
                        r3: info['12d1210'],
                        r4: info['12d1213'],
                        totaux: info['12d1215'],
                        article_132_etalement: info['12d1217'],
                        article_132_pourcentage_50: info['12d1220'],
                        article_132_pourcentage_25: info['12d1223'],
                        article_133: info['12d1226']
                    },
                    article_132_etalement_total: info['12d1218'],
                    article_132_pourcentage_50_total: info['12d1221'],
                    article_132_pourcentage_25_total: info['12d1224'],
                    article_133_total: info['12d1227']

                }
            }
        }
    }
}