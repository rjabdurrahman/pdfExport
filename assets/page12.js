module.exports = function (info) {
    return {
        rev_extra_ord: {
            is_demande: info['12d'],
            nature: {
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
                        r5: info['12d'],
                        r6: info['12d'],
                        r7: info['12d'],
                        r8: info['12d'],
                        r9: info['12d']
                    },
                    conjoint_partenaire: {
                        r1: info['12d'],
                        r2: info['12d'],
                        r3: info['12d'],
                        r4: info['12d'],
                        r5: info['12d'],
                        r6: info['12d'],
                        r7: info['12d'],
                        r8: info['12d'],
                        r9: info['12d']
                    },
                    r5cal: info['12d'],
                    r6cal: info['12d'],
                    r7cal: info['12d'],
                    r8cal: info['12d'],
                    r9cal: info['12d']
                }
            }
        }
    }
}