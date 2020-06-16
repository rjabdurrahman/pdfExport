module.exports = function (info) {
    return {
        rev_nets_divers: {
            rev_non_expo: {
                contribuable: {
                    a: info['11d'],
                    b: info['11d'],
                    c: info['11d'],
                    d: info['11d'],
                    e: info['11d'],
                    f: info['11d']
                },
                conjoint_partenaire: {
                    a: info['11d'],
                    b: {
                        speculation: info['11d'],
                        cession: info['11d']
                    },
                    c: {
                        recettes: info['11d'],
                        frais: info['11d']
                    },
                    d: info['11d'],
                    e: {
                        autre: info['11d'],
                        revenu: info['11d']
                    }
                },
                totalCal: info['11d']
            },
            rev_expo: {
                contribuable: {
                    a: info['11d'],
                    b: info['11d'],
                    c: info['11d'],
                    d: info['11d'],
                    e: info['11d'],
                    f: info['11d']
                },
                conjoint_partenaire: {
                    a: info['11d'],
                    b: {
                        speculation: info['11d'],
                        cession: info['11d']
                    },
                    c: {
                        recettes: info['11d'],
                        frais: info['11d']
                    },
                    d: info['11d'],
                    e: {
                        autre: info['11d'],
                        revenu: info['11d']
                    }
                },
                totalCal: info['11d']
            },
            interets: {
                table: {
                    r1: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation : info['11d'],
                        Superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r2: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation : info['11d'],
                        Superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r3: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation : info['11d'],
                        Superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r4: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation : info['11d'],
                        Superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    },
                    r5: {
                        acquisition: info['11d'],
                        cession: info['11d'],
                        nature: info['11d'],
                        situation : info['11d'],
                        Superficie: info['11d'],
                        adresse: info['11d'],
                        prix: info['11d']
                    }
                }
            }
        }
    }
}