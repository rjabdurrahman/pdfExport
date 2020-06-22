module.exports = function (info) {
    return {
        arrerages: {
            is_demande: info['13d'],
            contribuable: {
                obligation: info['13d'],
                payes: {
                    loccasion: info['13d'],
                    loccasioncal: info['13d'],
                    fixes1: info['13d'],
                    fixes1cal: info['13d'],
                    fixes2: info['13d'],
                    fixes2cal: info['13d']
                }

            },
            conjoint_partenaire: {
                dus: info['13d'],
                duscal: info['13d'],
                payes: {
                    loccasion: info['13d'],
                    loccasioncal: info['13d'],
                    fixes1: info['13d'],
                    fixes1cal: info['13d'],
                    fixes2: info['13d'],
                    fixes2cal: info['13d']
                }
            },
            table: {
                r1: {
                    adresse: info['13d'],
                    nature: info['13d'],
                    deduit: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r2: {
                    adresse: info['13d'],
                    nature: info['13d'],
                    deduit: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r3: {
                    adresse: info['13d'],
                    nature: info['13d'],
                    deduit: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r4: {
                    adresse: info['13d'],
                    nature: info['13d'],
                    deduit: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r5: {
                    adresse: info['13d'],
                    nature: info['13d'],
                    deduit: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                },
                r6: {
                    adresse: info['13d'],
                    nature: info['13d'],
                    deduit: info['13d'],
                    charges1: info['13d'],
                    charges2: info['13d']
                }
            }
        }
    }
}