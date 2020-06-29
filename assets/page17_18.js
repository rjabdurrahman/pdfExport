module.exports = function(info){
    return {
        charges_extraordinaires_17: {
            abattement:{
                is_abattement1: info['17d1701'] ? info['17d1701'] : 'Off',
                detail_charges: {
                    contribuable: info['17d1702'],
                    conjoint_partenaire: info['17d1703']
                },
                table: {
                    r1: info['17d1705'],
                    r2: info['17d1706'],
                    r3: info['17d1707'],
                    r4: info['17d1708'],
                    r5: info['17d1709'],
                    r6: info['17d1710'],
                    r7: info['17d1711'],
                    r8: info['17d1712']
                }
                
            },
            abattements_forfaitaires1: {
                is_invalidite: info['17d1713'] ? info['17d1713'] : 'Off',
                contribuable: {
                    is_en_annexe: info['17d1714'] ? info['17d1714'] : 'Off',
                    is_deja_presente: info['17d1715'] ? info['17d1715'] : 'Off',
                    taux: info['17d1716']
                },
                conjoint_partenaire: {
                    is_en_annexe: info['17d1717'] ? info['17d1717'] : 'Off',
                    is_deja_presente: info['17d1718'] ? info['17d1718'] : 'Off',
                    taux: info['17d1719']
                }
            },
            abattements_forfaitaires2: {
                is_frais_domestiques: info['17d1720'] ? info['17d1720'] : 'Off',
                contribuable: {
                    nom: info['17d1721'],
                    montant_mensuel: info['17d1723'],
                    pendant_mois: info['17d1725'],
                    montant_annuel: info['17d1727']
                },
                conjoint_partenaire: {
                    nom: info['17d1722'],
                    montant_mensuel: info['17d1724'],
                    pendant_mois: info['17d1726'],
                    montant_annuel: info['17d1728']
                }
            }
        },
        charges_extraordinaires_18: {
            is_abattement: info['18d1842'] ? info['18d1842'] : 'Off',
            enfants_moins_21: [
                {
                    nom: info['18d1801'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1802'],
                    montant: info['18d1803']
                },
                {
                    nom: info['18d1804'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1805'],
                    montant: info['18d1806']
                },
                {
                    nom: info['18d1807'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1808'],
                    montant: info['18d1809']
                },
                {
                    nom: info['18d1810'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1811'],
                    montant: info['18d1812']
                }
            ],
            enfants_plus_21: [
                {
                    nom: info['18d1813'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1814'],
                    montant: info['18d1815'],
                    formation: info['18d1816']
                },
                {
                    nom: info['18d1817'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1818'],
                    montant: info['18d1819'],
                    formation: info['18d1820']
                },
                {
                    nom: info['18d1821'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1822'],
                    montant: info['18d1823'],
                    formation: info['18d1824']
                },
                {
                    nom: info['18d1825'],
                    prenom: info['18d18'],
                    date_de_naissance: info['18d1826'],
                    montant: info['18d1827'],
                    formation: info['18d1828']
                }
            ],
            mobilite_durable: {
                contribuable: [
                    {
                        is_voiture: info['18d1836'] ? info['18d1836'] : 'Off',
                        voiture: info['18d1829']
                    },
                    {
                        is_cycle: info['18d1838'] ? info['18d1838'] : 'Off',
                        cycle: info['18d1831']
                    },
                    {
                        is_voiture_electrique: info['18d1840'] ? info['18d1840'] : 'Off',
                        voiture_electrique: info['18d1833']
                    }
                ],
                conjoint_partenaire: [
                    {
                        is_voiture: info['18d1837'] ? info['18d1837'] : 'Off',
                        voiture: info['18d1830']
                    },
                    {
                        is_cycle: info['18d1839'] ? info['18d1839'] : 'Off',
                        cycle: info['18d1832']
                    },
                    {
                        is_voiture_electrique: info['18d1841'] ? info['18d1841'] : 'Off',
                        voiture_electrique: info['18d1834']
                    }
                ]
            },
            is_investissement: info['18d1835'] ? info['18d1835'] : 'Off'
        }
    }
}