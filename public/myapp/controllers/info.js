app.controller('ClientsListControler', function ($scope, $rootScope, $http) {
  $('.load-overlay').show()
  $rootScope.loadClients()
  $scope.search = function (e) {
    let clients = clientsCopy.filter(x => {
      let str =
        x.signaletique.numero_de_dossier +
        x.signaletique.contribuable.nom +
        x.signaletique.contribuable.prenom +
        x.signaletique.contribuable.telephone +
        x.signaletique.contribuable.courriel
      console.log(str)
      return new RegExp(e.target.value.toLowerCase()).test(str.toLowerCase())
    })
    $rootScope.clients = clients
    $rootScope.$applyAsync()
  }
})

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
