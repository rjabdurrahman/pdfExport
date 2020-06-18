function checkDone() {
    $('.a01, .a02').each(function (i) {
        $('#' + this.id + ' input:text').each(function (j) {
            if (this.value) {
                // $(menuClass).addClass('done')
                console.dir($('.left-nav'))
            }
        })
    })
}
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
        setTimeout(checkDone, 500);
    }).catch(function (err) {
        console.log(err);
    })
});