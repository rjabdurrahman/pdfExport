app.controller('EnfantsControler', function ($scope, $http) {
    let clientId = location.hash.replace('#/enfants?id=', '');
    $scope.client = {};
    $http({
        method: 'GET',
        url: `/api/client/${clientId}`
    }).then(function(res) {
        $scope.client = res.data.enfants;
        $scope.$applyAsync();
    }).catch(function(err) {
        console.log(err);
    })
    console.log($scope.client);
    $scope.infantUpdate = function () {
        let infantForm = document.forms['enfants'];
        console.log(clientId);
        //console.log(infantForm['d_48'].value);
        //console.log(getChValue(infantForm['d_50'].checked));
        let client_infant = {
            enfants: {
                a: [
                    {
                        nom: infantForm['d_1'].value,
                        prenom: infantForm['d_2'].value,
                        date_de_naissance: infantForm['d_3'].value,
                        demande_moderation: getChValue(infantForm['d_4'].checked)
                    },
                    {
                        nom: infantForm['d_5'].value,
                        prenom: infantForm['d_6'].value,
                        date_de_naissance: infantForm['d_7'].value,
                        demande_moderation: getChValue(infantForm['d_8'].value)
                    },
                    {
                        nom: infantForm['d_9'].value,
                        prenom: infantForm['d_10'].value,
                        date_de_naissance: infantForm['d_11'].value,
                        demande_moderation: getChValue(infantForm['d_12'].value)
                    },
                    {
                        nom: infantForm['d_13'].value,
                        prenom: infantForm['d_14'].value,
                        date_de_naissance: infantForm['d_15'].value,
                        demande_moderation: getChValue(infantForm['d_16'].value)
                    }
                ],
                b: [
                    {
                        nom: infantForm['d_17'].value,
                        prenom: infantForm['d_18'].value,
                        date_de_naissance: infantForm['d_19'].value,
                        demande_moderation: getChValue(infantForm['d_20'].value),
                        specification_formation: infantForm['d_21'].value
                    },
                    {
                        nom: infantForm['d_22'].value,
                        prenom: infantForm['d_23'].value,
                        date_de_naissance: infantForm['d_24'].value,
                        demande_moderation: getChValue(infantForm['d_25'].value),
                        specification_formation: infantForm['d_26'].value
                    },
                    {
                        nom: infantForm['d_27'].value,
                        prenom: infantForm['d_28'].value,
                        date_de_naissance: infantForm['d_29'].value,
                        demande_moderation: getChValue(infantForm['d_30'].value),
                        specification_formation: infantForm['d_31'].value
                    }
                ],
                c: {
                    nom: infantForm['d_32'].value,
                    prenom: infantForm['d_33'].value,
                    date_de_naissance: infantForm['d_34'].value,
                    demande_moderation: getChValue(infantForm['d_35'].value)
                },
                demande_cim: {
                    is_demande_cim: getChValue(infantForm['d_49'].value),
                    table: [
                        {
                            nom_prenom: infantForm['d_36'].value,
                            montant_mensuel_allocation: infantForm['d_37'].value
                        },
                        {
                            nom_prenom: infantForm['d_38'].value,
                            montant_mensuel_allocation: infantForm['d_39'].value
                        },
                        {
                            nom_prenom: infantForm['d_40'].value,
                            montant_mensuel_allocation: infantForm['d_41'].value
                        }
                    ],
                    moyens_subsistance: [
                        {
                            subsistance1: infantForm['d_42'].value
                        },
                        {
                            subsistance2: infantForm['d_43'].value
                        }
                    ]
                },
                demande_bonification_impot: {
                    is_demande_bonification_impot: getChValue(infantForm['d_50'].value),
                    rignt_form_val: infantForm['d_48'].value,
                    table: [
                        {
                            nom_prenom: infantForm['d_44'].value,
                            date_de_naissance: infantForm['d_45'].value
                        },
                        {
                            nom_prenom: infantForm['d_46'].value,
                            date_de_naissance: infantForm['d_47'].value
                        }
                    ]
                }
            }
        }

        $http({
            method: 'POST',
            url: `/api/identupdate/${clientId}`,
            data: client_infant
        }).then(function(res) {
            notify('Updated Successfully!', 1);
        }).catch(function(err) {
            notify('Something Went Wrong', 2);
        })
    }

});