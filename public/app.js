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

app.controller('ClientsListControler', function($scope) {
    $scope.message = "Clients Cntl";
});

app.controller('ClientControler', function($scope) {
    console.log('Client Ctrl')
});