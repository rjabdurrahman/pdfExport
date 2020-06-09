app.controller('InfoCtrl', function ($scope, $http) {
    $scope.name = "Some data";
    let clientId = location.href.split('id=')[1];
    $scope.client = {};
    $http({
        method: 'GET',
        url: `/api/client/${clientId}`
    }).then(function (res) {
        $scope.client = res.data;
        console.log(res.data)
        $scope.$applyAsync();
    }).catch(function (err) {
        console.log(err);
    })
});