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

app.controller('ClientsListControler', function($scope, $http) {
    $scope.submitClient = function(e) {
        let clientForm = document.forms['client'];
        let client = {
            nom: clientForm['nom'].value,
            prenom: clientForm['prenom'].value
        }
        console.log(client)
        $http({
            method: 'POST',
            url: '/api/addclient',
            data: client
        }).then(function(res) {
            console.log(res)
        }).catch(function(err) {
            console.log(err);
        })
    }
});

app.controller('ClientControler', function($scope) {
    console.log('Client Ctrl')
});