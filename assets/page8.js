module.exports = function (info) {
    return {
        pension: {
            rev_non_exo: {
                contribuable: {
                    a: {
                        pensions: info['8d801'],
                        pensions_extra: info['8d805'],
                        total: info['8d809']
                    },
                    b: {
                        rentes: info['8d813'],
                        exemption: info['8d817']
                    },
                    c: {
                        arrerages: info['8d821'],
                        exemption: info['8d825']
                    },
                    totalBC: info['8d829'],
                    totalABC: info['8d833'],
                    a_deduire: {
                        frais_obtention: info['8d837'],
                        totalABC: info['8d841']
                    }
                },
                conjoint_partenaire: {
                    a: {
                        pensions: info['8d802'],
                        pensions_extra: info['8d806'],
                        total: info['8d810']
                    },
                    b: {
                        rentes: info['8d814'],
                        exemption: info['8d818']
                    },
                    c: {
                        arrerages: info['8d822'],
                        exemption: info['8d826']
                    },
                    totalBC: info['8d830'],
                    totalABC: info['8d834'],
                    a_deduire: {
                        frais_obtention: info['8d838'],
                        totalABC: info['8d842']
                    }
                }
            },
            rev_exo: {
                contribuable: {
                    a: {
                        pensions: info['8d803'],
                        pensions_extra: info['8d807'],
                        total: info['8d811']
                    },
                    b: {
                        rentes: info['8d815'],
                        exemption: info['8d819']
                    },
                    c: {
                        arrerages: info['8d823'],
                        exemption: info['8d827']
                    },
                    totalBC: info['8d831'],
                    totalABC: info['8d835'],
                    a_deduire: {
                        frais_obtention: info['8d839'],
                        totalABC: info['8d843']
                    }
                },
                conjoint_partenaire: {
                    a: {
                        pensions: info['8d804'],
                        pensions_extra: info['8d808'],
                        total: info['8d812']
                    },
                    b: {
                        rentes: info['8d816'],
                        exemption: info['8d820']
                    },
                    c: {
                        arrerages: info['8d824'],
                        exemption: info['8d828']
                    },
                    totalBC: info['8d832'],
                    totalABC: info['8d836'],
                    a_deduire: {
                        frais_obtention: info['8d840'],
                        totalABC: info['8d844']
                    }
                }
            },
            abattement_extra_pro: {
                is_demande: info['8d845'],
                rente_date: info['8d846']  
            } 
        }
    }
}