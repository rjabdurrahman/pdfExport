module.exports = function () {
    return {
        pension: {
            rev_non_exo: {
                contribuable: {
                    a: {
                        pensions: info['8d'],
                        pensions_extra: info['8d'],
                        total: info['8d']
                    },
                    b: {
                        rentes: info['8d'],
                        exemption: info['8d']
                    },
                    c: {
                        arrerages: info['8d'],
                        exemption: info['8d']
                    },
                    totalBC: info['8d'],
                    totalABC: info['8d'],
                    a_deduire: {
                        frais_obtention: info['8d'],
                        totalABC: info['8d']
                    }
                },
                conjoint_partenaire: {
                    a: {
                        pensions: info['8d'],
                        pensions_extra: info['8d'],
                        total: info['8d']
                    },
                    b: {
                        rentes: info['8d'],
                        exemption: info['8d']
                    },
                    c: {
                        arrerages: info['8d'],
                        exemption: info['8d']
                    },
                    totalBC: info['8d'],
                    totalABC: info['8d'],
                    a_deduire: {
                        frais_obtention: info['8d'],
                        totalABC: info['8d']
                    }
                }
            },
            rev_exo: {
                contribuable: {
                    a: {
                        pensions: info['8d'],
                        pensions_extra: info['8d'],
                        total: info['8d']
                    },
                    b: {
                        rentes: info['8d'],
                        exemption: info['8d']
                    },
                    c: {
                        arrerages: info['8d'],
                        exemption: info['8d']
                    },
                    totalBC: info['8d'],
                    totalABC: info['8d'],
                    a_deduire: {
                        frais_obtention: info['8d'],
                        totalABC: info['8d']
                    }
                },
                conjoint_partenaire: {
                    a: {
                        pensions: info['8d'],
                        pensions_extra: info['8d'],
                        total: info['8d']
                    },
                    b: {
                        rentes: info['8d'],
                        exemption: info['8d']
                    },
                    c: {
                        arrerages: info['8d'],
                        exemption: info['8d']
                    },
                    totalBC: info['8d'],
                    totalABC: info['8d'],
                    a_deduire: {
                        frais_obtention: info['8d'],
                        totalABC: info['8d']
                    }
                }
            },
            abattement_extra_pro: {
                is_demande: info['8d'],
                rente_date: info['8d']  
            } 
        }
    }
}