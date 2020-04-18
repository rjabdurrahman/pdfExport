var app = angular.module('pdfApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/clients_list.html',
            controller: 'ClientsListControler',
            activetab: 'home'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('ClientsListControler', function($scope) {
    $scope.message = "Clients Cntl";
});