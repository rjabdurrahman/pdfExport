app.controller('EnfantsControler', function($scope, $http) {
    let clientId = location.hash.replace('#/client?id=', '');
    $scope.client = {};
    console.log('Done')
});