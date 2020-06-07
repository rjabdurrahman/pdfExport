var app = angular.module('pdfApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/clients_list.html',
            controller: 'ClientsListControler',
            activetab: 'home'
        })
        .when('/info', {
            templateUrl: 'pages/info.html',
            controller: 'ClientControler',
            // css: 'css/page1.css',
            activetab: 'page1'
        })
        .when('/identification', {
            templateUrl: 'pages/identification.html',
            controller: 'ClientControler',
            // css: 'css/page1.css',
            activetab: 'page1'
        })
        .when('/enfants', {
            templateUrl: 'pages/enfants.html',
            controller: 'EnfantsControler',
            activetab: 'page2'
        })
        .when('/etat_civil', {
            templateUrl: 'pages/etat_civil.html',
            controller: 'EnfantsControler',
            activetab: 'page3'
        })
        .when('/expouse', {
            templateUrl: 'pages/expouse.html',
            controller: 'EnfantsControler',
            activetab: 'page4'
        })
        .when('/page5', {
            templateUrl: 'pages/page5.html',
            controller: 'EnfantsControler',
            activetab: 'page5'
        })
        .when('/page6', {
            templateUrl: 'pages/page6.html',
            controller: 'EnfantsControler',
            activetab: 'page6'
        })
        .when('/page7', {
            templateUrl: 'pages/page7.html',
            controller: 'EnfantsControler',
            activetab: 'page7'
        })
        .when('/page8', {
            templateUrl: 'pages/page8.html',
            controller: 'EnfantsControler',
            activetab: 'page8'
        })
        .when('/page9', {
            templateUrl: 'pages/page9.html',
            controller: 'EnfantsControler',
            activetab: 'page9'
        })
        .when('/page10', {
            templateUrl: 'pages/page10.html',
            controller: 'EnfantsControler',
            activetab: 'page10'
        })
        .when('/page11', {
            templateUrl: 'pages/page11.html',
            controller: 'EnfantsControler',
            activetab: 'page11'
        })
        .when('/page12', {
            templateUrl: 'pages/page12.html',
            controller: 'EnfantsControler',
            activetab: 'page12'
        })
        .when('/page13', {
            templateUrl: 'pages/page13.html',
            controller: 'EnfantsControler',
            activetab: 'page13'
        })
        .when('/page14', {
            templateUrl: 'pages/page14.html',
            controller: 'EnfantsControler',
            activetab: 'page14'
        })
        .otherwise({ redirectTo: '/' });
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
}]);

app.run(function ($rootScope, $http, $route) {
    $rootScope.clients = [];
    $rootScope.$route = $route;

    function loadClients() {
        $http({
            method: 'GET',
            url: '/api/clients'
        }).then(function (res) {
            $rootScope.clients = res.data;
            $rootScope.$applyAsync();
        }).catch(function (err) {
            console.log(err);
        })
    };

    loadClients();
    $rootScope.isErr = [];
    $rootScope.submitClient = function (e) {
        let clientForm = e.target;
        let client = {
            nom: clientForm['nom'].value,
            prenom: clientForm['prenom'].value,
            telephone: clientForm['telephone'].value,
            courriel: clientForm['courriel'].value
        }
        if (client.nom == '') {
            $rootScope.isErr.push('nom');
            return;
        };
        if (client.prenom == '') {
            $rootScope.isErr.push('prenom');
            return;
        };
        console.log(client)
        $http({
            method: 'POST',
            url: '/api/addclient',
            data: client
        }).then(function (res) {
            notify('Client Added Successfully!', 1);
            loadClients();
            closeAddClientModal();
            $rootScope.$applyAsync();
        }).catch(function (err) {
            notify('Something Went Wrong!', 2);
        })
    }
    $rootScope.submitClientDelete = function (id) {
        let clientId = id;
        $http({
            method: 'POST',
            url: `/api/clientdelete/${clientId}`,
            data: {}
        }).then(function (res) {
            loadClients();
            notify('Delete Client Successfully!', 1);
        }).catch(function (err) {
            notify('Something Went Wrong', 2);
        })
    }
});
app.component('leftNav', {
    templateUrl: '/components/leftnav.html',
    controller: 'NavCtrl'
});

app.component('page1', {
    templateUrl: '/pages/identification.html',
    controller: 'NavCtrl'
});

app.component('page2', {
    templateUrl: '/pages/enfants.html',
    controller: 'NavCtrl'
});

app.component('page3', {
    templateUrl: '/pages/etat_civil.html',
    controller: 'NavCtrl'
});

app.component('page4', {
    templateUrl: '/pages/expouse.html',
    controller: 'NavCtrl'
});

app.controller('NavCtrl', function ($scope, $route) {
    $scope.id = activeClientId;
    $scope.$route = $route
});

app.controller('ClientsListControler', function ($scope, $http) { });

app.controller('ClientControler', function ($scope, $rootScope, $http) {
    let clientId = location.hash.replace('#/client?id=', '');
    activeClientId = clientId;
    $scope.client = {};
    $http({
        method: 'GET',
        url: `/api/client/${clientId}`
    }).then(function (res) {
        $scope.client = res.data.signaletique;
        $scope.$applyAsync();
    }).catch(function (err) {
        console.log(err);
    })

    $scope.ShortName = function (nom, prenom) {
        if (nom) {
            return {
                nom: nom.length > 12 ? nom.substring(0, 13) + '...' : nom,
                prenom: prenom.length > 18 ? nom.substring(0, 18) + '...' : prenom,
                letters: (nom[0] + prenom[0]).toUpperCase()
            }
        }
    }

    $scope.submitClientIdnUpdate = function (e) {
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
        }).then(function (res) {
            notify('Updated Successfully!', 1);
        }).catch(function (err) {
            notify('Something Went Wrong', 2);
        })
    }
});