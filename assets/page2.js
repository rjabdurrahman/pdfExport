module.exports = function(info) {
    return {
        enfants: {
            a: [
                {
                    nom: info['2d1'],
                    prenom: info['2d2'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d']
                },
                {
                    nom: info['2d'],
                    prenom: info['2d'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d']
                },
                {
                    nom: info['2d'],
                    prenom: info['2d'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d']
                },
                {
                    nom: info['2d'],
                    prenom: info['2d'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d']
                }
            ],
            b: [
                {
                    nom: info['2d'],
                    prenom: info['2d'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d'],
                    specification_formation: info['2d']
                },
                {
                    nom: info['2d'],
                    prenom: info['2d'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d'],
                    specification_formation: info['2d']
                },
                {
                    nom: info['2d'],
                    prenom: info['2d'],
                    date_de_naissance: info['2d'],
                    demande_moderation: info['2d'],
                    specification_formation: info['2d']
                }
            ],
            c: {
                nom: info['2d'],
                prenom: info['2d'],
                date_de_naissance: info['2d'],
                demande_moderation: info['2d']
            }, demande_cim: {
                is_demande_cim: info['2d'],
                table: [
                    {
                        nom_prenom: info['2d'],
                        montant_mensuel_allocation: info['2d']
                    },
                    {
                        nom_prenom: info['2d'],
                        montant_mensuel_allocation: info['2d']
                    },
                    {
                        nom_prenom: info['2d'],
                        montant_mensuel_allocation: info['2d']
                    }
                ],
                moyens_subsistance: [
                    {
                        subsistance1: info['2d']
                    },
                    {
                        subsistance2: info['2d']
                    }
                ]
            },
            demande_bonification_impot: {
                is_demande_bonification_impot: info['2d'],
                table: [
                    {
                        nom_prenom: info['2d'],
                        date_de_naissance: info['2d']
                    },
                    {
                        nom_prenom: info['2d'],
                        date_de_naissance: info['2d']
                    }
                ]
            }
        }
    }
}