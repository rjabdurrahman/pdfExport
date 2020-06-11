var app = angular.module('pdfApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/clients_list.html',
            controller: 'ClientsListControler',
            activetab: 'home'
        })
        .when('/info', {
            templateUrl: 'pages/info1.html',
            controller: 'InfoCtrl',
            activetab: 'page1'
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
    $rootScope.$route = $route;
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
            $(clientForm)[0].reset();
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

app.controller('NavCtrl', function ($scope, $http) {
    console.log('Nav page');
});

app.controller('ClientsListControler', function ($scope, $http) {
    $scope.clients = clients || [];

    function loadClients() {
        $http({
            method: 'GET',
            url: '/api/clients'
        }).then(function (res) {
            $scope.clients = clients = res.data;
            $scope.$applyAsync();
        }).catch(function (err) {
            console.log(err);
        })
    };

    loadClients();
});