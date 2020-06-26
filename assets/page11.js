module.exports = function (info) {
    return {
        rev_nets_divers: {
            rev_non_exo: {
                contribuable: {
                    revenu_cession: info['11d1101'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d1105'],
                        benefice_cession: info['11d1109']
                    },
                    revenu_prestations: {
                        recettes: info['11d1113'],
                        frais_obtention: info['11d1117']
                    },
                    remboursement: info['11d1121'],
                    autre_remboursement: info['11d1125'],
                    total: info['11d1129']
                },
                conjoint_partenaire: {
                    revenu_cession: info['11d1102'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d1106'],
                        benefice_cession: info['11d1110']
                    },
                    revenu_prestations: {
                        recettes: info['11d1114'],
                        frais_obtention: info['11d1118']
                    },
                    remboursement: info['11d1122'],
                    autre_remboursement: info['11d1126'],
                    total: info['11d1130']
                },
                totalCal: info['11d1131']
            },
            rev_exo: {
                contribuable: {
                    revenu_cession: info['11d1103'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d1107'],
                        benefice_cession: info['11d1111']
                    },
                    revenu_prestations: {
                        recettes: info['11d1115'],
                        frais_obtention: info['11d1119']
                    },
                    remboursement: info['11d1123'],
                    autre_remboursement: info['11d1127'],
                    total: info['11d1132']
                },
                conjoint_partenaire: {
                    revenu_cession: info['11d1104'],
                    revenu_plus_values: {
                        benefice_speculation: info['11d1108'],
                        benefice_cession: info['11d1112']
                    },
                    revenu_prestations: {
                        recettes: info['11d1116'],
                        frais_obtention: info['11d1120']
                    },
                    remboursement: info['11d1124'],
                    autre_remboursement: info['11d1128'],
                    total: info['11d1133']
                },
                totalCal: info['11d1134']
            },
            acquisitions_et_cessions: {
                table: {
                    r1: {
                        acquisition: info['11d1135'],
                        cession: info['11d1136'],
                        nature_bien: info['11d1137'],
                        situation: info['11d1138'],
                        superficie: info['11d1139'],
                        adresse: info['11d1140'],
                        prix: info['11d1141']
                    },
                    r2: {
                        acquisition: info['11d1142'],
                        cession: info['11d1143'],
                        nature_bien: info['11d1144'],
                        situation: info['11d1145'],
                        superficie: info['11d1146'],
                        adresse: info['11d1147'],
                        prix: info['11d1148']
                    },
                    r3: {
                        acquisition: info['11d1149'],
                        cession: info['11d1150'],
                        nature_bien: info['11d1151'],
                        situation: info['11d1152'],
                        superficie: info['11d1153'],
                        adresse: info['11d1154'],
                        prix: info['11d1155']
                    },
                    r4: {
                        acquisition: info['11d1156'],
                        cession: info['11d1157'],
                        nature_bien: info['11d1158'],
                        situation: info['11d1159'],
                        superficie: info['11d1160'],
                        adresse: info['11d1161'],
                        prix: info['11d1162']
                    },
                    r5: {
                        acquisition: info['11d1163'],
                        cession: info['11d1164'],
                        nature_bien: info['11d1165'],
                        situation: info['11d1166'],
                        superficie: info['11d1167'],
                        adresse: info['11d1168'],
                        prix: info['11d1169']
                    }
                }
            }
        }
    }
}