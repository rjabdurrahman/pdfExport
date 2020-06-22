module.exports = function (info) {
    return {
        revenu_imposable: {
            rev_non_exo: {
                contrib: {
                    benefice_com: info['20d'],
                    benefice_agri: info['20d'],
                    profession: info['20d'],
                    salariee: info['20d'],
                    rentes: info['20d'],
                    mobiliers: info['20d'],
                    de_biens: info['20d'],
                    divers: info['20d'],
                    total: info['20d']
                },
                joint_contrib: {
                    benefice_com: info['20d'],
                    benefice_agri: info['20d'],
                    profession: info['20d'],
                    salariee: info['20d'],
                    rentes: info['20d'],
                    mobiliers: info['20d'],
                    de_biens: info['20d'],
                    divers: info['20d'],
                    total: info['20d']
                },
                dep_spe: info['20d'],
                rev_imp: info['20d']
            },
            rev_exo: {
                contrib: {
                    benefice_com: info['20d'],
                    benefice_agri: info['20d'],
                    profession: info['20d'],
                    salariee: info['20d'],
                    rentes: info['20d'],
                    mobiliers: info['20d'],
                    de_biens: info['20d'],
                    divers: info['20d'],
                    total: info['20d']
                },
                joint_contrib: {
                    benefice_com: info['20d'],
                    benefice_agri: info['20d'],
                    profession: info['20d'],
                    salariee: info['20d'],
                    rentes: info['20d'],
                    mobiliers: info['20d'],
                    de_biens: info['20d'],
                    divers: info['20d'],
                    total: info['20d']
                }
            },
            les_declarations: {
                d2: info['20d'],
                le: info['20d']
            },
            administration: {
                abattement1: info['20d'],
                abattement2: info['20d'],
                abattement3: info['20d'],
                abattement4: info['20d'],
                abattement5: info['20d'],
                ajuste: info['20d'],
                extraordinaires: info['20d'],
                bareme: info['20d'],
                monoparental: info['20d']
            }
        }
    }
}