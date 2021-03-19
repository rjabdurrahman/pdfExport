app.controller('ClientsListControler', function ($scope, $rootScope, $http) {
  $rootScope.loadClients();
  $scope.yearlyLoads = function() {
    $rootScope.selectedYear = $scope.selectedYear;
    $rootScope.loadClients();
  }
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
  // Sorting Table
  $('th .arrow').click(function (e) {
    let element = e.target
    let fieldName = $(element).prev()[0].textContent
    if (fieldName == 'Nom') {
      console.log('Nom Soring')
      $(element).toggleClass('desc')
      $rootScope.clients = $rootScope.clients.sort(function (a, b) {
        if (a.signaletique.contribuable.nom.toLowerCase() < b.signaletique.contribuable.nom.toLowerCase()) {
          return -1
        }
        if (a.signaletique.contribuable.nom.toLowerCase() > b.signaletique.contribuable.nom.toLowerCase()) {
          return 1
        }
        return 0
      })
      $rootScope.$applyAsync()
    } else if (fieldName == 'Prénom') {
      console.log('PreNom Soring')
      $(element).toggleClass('desc')
    }
  })

  $scope.selectedClient = {};

  $scope.selectClient = function(e) {
    $scope.selectedClient = JSON.parse(e.target.id.slice(0, -1));
  }

  $scope.transfer = function(e) {
    console.log(e.target['year'].value);
    console.log($scope.selectedClient);
    $http({
      method: 'POST',
      url: '/api/transfer',
      data: { 
        selectedYear: $rootScope.selectedYear,
        targetYear: e.target['year'].value,
        client: $scope.selectedClient
      }
    })
    .then(res => {
      if(res.data) notify('Transfert Successfully', 1);
      $('#clientTransferModal').hide();
    })
    .catch(err => console.log(err))
  }
})

app.controller('InfoCtrl', function ($rootScope, $scope, $http) {
  pageInit()
  let clientId = location.href.split('id=')[1]
  $scope.client = {}
  $http({
    method: 'GET',
    url: `/api/client/${clientId}`
  })
    .then(function (res) {
      $('.load-overlay').hide();
      $scope.client = res.data['y' + location.href.match(/20\d\d/)[0]]
      console.log($scope.client);
      afterDataLoaded($scope.client);
      $scope.$applyAsync()
    })
    .catch(function (err) {
      console.log(err, err)
    })
})
