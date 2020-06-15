module.exports = function(info) {
    return {
        enfants: {
            a: [
                {
                    nom: info['2d1'],
                    prenom: info['2d2'],
                    date_de_naissance: info['2d3'],
                    demande_moderation: info['2d']
                },
                {
                    nom: info['2d5'],
                    prenom: info['2d6'],
                    date_de_naissance: info['2d7'],
                    demande_moderation: info['2d']
                },
                {
                    nom: info['2d9'],
                    prenom: info['2d10'],
                    date_de_naissance: info['2d11'],
                    demande_moderation: info['2d']
                },
                {
                    nom: info['2d13'],
                    prenom: info['2d14'],
                    date_de_naissance: info['2d15'],
                    demande_moderation: info['2d']
                }
            ],
            b: [
                {
                    nom: info['2d17'],
                    prenom: info['2d18'],
                    date_de_naissance: info['2d19'],
                    demande_moderation: info['2d'],
                    specification_formation: info['2d21']
                },
                {
                    nom: info['2d22'],
                    prenom: info['2d23'],
                    date_de_naissance: info['2d24'],
                    demande_moderation: info['2d'],
                    specification_formation: info['2d26']
                },
                {
                    nom: info['2d27'],
                    prenom: info['2d28'],
                    date_de_naissance: info['2d29'],
                    demande_moderation: info['2d'],
                    specification_formation: info['2d31']
                }
            ],
            c: {
                nom: info['2d32'],
                prenom: info['2d33'],
                date_de_naissance: info['2d34'],
                demande_moderation: info['2d']
            },
            demande_cim: {
                is_demande_cim: info['2d'],
                table: [
                    {
                        nom_prenom: info['2d37'],
                        montant_mensuel_allocation: info['2d38']
                    },
                    {
                        nom_prenom: info['2d39'],
                        montant_mensuel_allocation: info['2d40']
                    },
                    {
                        nom_prenom: info['2d41'],
                        montant_mensuel_allocation: info['2d42']
                    }
                ],
                moyens_subsistance: [
                    {
                        subsistance1: info['2d43']
                    },
                    {
                        subsistance2: info['2d44']
                    }
                ]
            },
            demande_bonification_impot: {
                is_demande_bonification_impot: info['2d'],
                table: [
                    {
                        nom_prenom: info['2d46'],
                        date_de_naissance: info['2d47']
                    },
                    {
                        nom_prenom: info['2d48'],
                        date_de_naissance: info['2d49']
                    }
                ]
            }
        }
    }
}