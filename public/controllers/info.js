app.controller('InfoCtrl', function ($scope, $http) {
  pageInit();
  let clientId = location.href.split('id=')[1]
  $scope.client = {}
  $http({
    method: 'GET',
    url: `/api/client/${clientId}`
  })
    .then(function (res) {
      $('.load-overlay').hide()
      $scope.client = res.data
      afterDataLoaded(res.data);
      $scope.$applyAsync();
    })
    .catch(function (err) {
      console.log(err)
    })
})
