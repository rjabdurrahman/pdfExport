var app = angular.module('pdfApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/clients_list.html',
            controller: 'ClientsListControler',
            activetab: 'home'
        })
        .when('/client', {
            templateUrl: 'pages/client.html',
            controller: 'ClientControler',
            activetab: 'client'
        })
        .otherwise({ redirectTo: '/' });
});

app.run(function($rootScope, $http) {
    $rootScope.submitClient = function(e) {
        let clientForm = document.forms['client'];
        let client = {
            nom: clientForm['nom'].value,
            prenom: clientForm['prenom'].value
        }
        $http({
            method: 'POST',
            url: '/api/addclient',
            data: client
        }).then(function(res) {
            notify('Client Added Successfully!', 1);
            // loadClients();
            closeAddClientModal();
            $rootScope.$applyAsync();
        }).catch(function(err) {
            notify('Something Went Wrong!', 2);
        })
    }
});

app.controller('ClientsListControler', function($scope, $http) {
    $scope.clients = [];

    function loadClients() {
        $http({
            method: 'GET',
            url: '/api/clients'
        }).then(function(res) {
            $scope.clients = res.data;
            $scope.$applyAsync();
        }).catch(function(err) {
            console.log(err);
        })
    };
    loadClients();
});

app.controller('ClientControler', function($scope, $http) {
    let clientId = location.hash.replace('#/client?id=', '');
    $scope.client = {};
    $http({
        method: 'GET',
        url: `/api/client/${clientId}`
    }).then(function(res) {
        $scope.client = res.data.signaletique;
        $scope.$applyAsync();
    }).catch(function(err) {
        console.log(err);
    })

    $scope.submitClientIdnUpdate = function(e) {
        let identForm = document.forms['identification'];
        let client_signaletique = {
            signaletique: {
                numero_de_dossier: identForm['d_9'].value,
                contribuable: {
                    nom: identForm['d_1'].value,
                    prenom: identForm['d_3'].value,
                    date_de_naissance: identForm['d_5'].value,
                    lieu_de_naissance: identForm['d_7'].value,
                    profession: identForm['d_10'].value,
                    telephone: identForm['d_12'].value,
                    courriel: identForm['d_14'].value,
                    domicile: {
                        actuel: {
                            numero: identForm['d_16'].value,
                            rue: identForm['d_17'].value,
                            code_postal: identForm['d_20'].value,
                            localite: identForm['d_21'].value,
                            pays: identForm['d_24'].value
                        },
                        ancien: {
                            du_au: identForm['d_26'].value,
                            numero: identForm['d_28'].value,
                            rue: identForm['d_29'].value,
                            code_postal: identForm['d_32'].value,
                            localite: identForm['d_33'].value,
                            pays: identForm['d_36'].value
                        }
                    }
                },
                conjoint_partenaire: {
                    nom: identForm['d_2'].value,
                    prenom: identForm['d_4'].value,
                    date_de_naissance: identForm['d_6'].value,
                    lieu_de_naissance: identForm['d_8'].value,
                    profession: identForm['d_11'].value,
                    telephone: identForm['d_13'].value,
                    courriel: identForm['d_15'].value,
                    domicile: {
                        actuel: {
                            numero: identForm['d_18'].value,
                            rue: identForm['d_19'].value,
                            code_postal: identForm['d_22'].value,
                            localite: identForm['d_23'].value,
                            pays: identForm['d_25'].value
                        },
                        ancien: {
                            du_au: identForm['d_27'].value,
                            numero: identForm['d_30'].value,
                            rue: identForm['d_31'].value,
                            code_postal: identForm['d_34'].value,
                            localite: identForm['d_35'].value,
                            pays: identForm['d_37'].value
                        }
                    }
                },
                coordonnes_bancaires: {
                    titulaire_du_compte: identForm['d_38'].value,
                    code_iban: identForm['d_39'].value,
                    swift_bic: identForm['d_40'].value
                }
            }
        }
        $http({
            method: 'POST',
            url: `/api/identupdate/${clientId}`,
            data: client_signaletique
        }).then(function(res) {
            notify('Updated Successfully!', 1);
        }).catch(function(err) {
            notify('Something Went Wrong', 2);
        })
    }
});