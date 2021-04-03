app.controller('ClientsListControler', function ($scope, $rootScope, $http) {
  $rootScope.loadClients();
  $scope.yearlyLoads = function () {
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

  $scope.selectClient = function (e) {
    $scope.selectedClient = JSON.parse(e.target.id.slice(0, -1));
  }

  $scope.transfer = function (e) {
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
        if (res.data) notify('Transfert Successfully', 1);
        $('#clientTransferModal').hide();
      })
      .catch(err => console.log(err))
  }
})

app.controller('InfoCtrl', function ($rootScope, $scope, $http) {
  pageInit()
  let clientId = location.href.split('id=')[1];
  $scope.active = true;
  $scope.client = {}
  $scope.data19 = {}
  $scope.data20 = {}
  $http({
    method: 'GET',
    url: `/api/client/${clientId}`
  })
    .then(function (res) {
      $('.load-overlay').hide();
      $scope.client = res.data['y' + location.href.match(/20\d\d/)[0]]
      if (location.href.match(/2020/g)) {
        $scope.data19 = res.data.y2019;
        $scope.data20 = res.data.y2020;
      }
      console.log($scope.client);
      afterDataLoaded($scope.client);
      $scope.$applyAsync();
    })
    .catch(function (err) {
      console.log(err, err)
    })
  $scope.view19 = function () {
    $('left-nav a.done').removeClass('done');
    if ($scope.active) {
      $scope.client = $scope.data19;
      afterDataLoaded($scope.client);
      $(".form-input input:not(:disabled)").addClass("temp-disable");
      $(".form-input input:not(:disabled)").prop("disabled", true);
      $('left-nav a.done span').css('color', 'orange');
      $('#submitInfoBtn').css('visibility', 'hidden');
    } else {
      $scope.client = $scope.data20;
      afterDataLoaded($scope.client);
      $(".form-input input.temp-disable").prop("disabled", false);
      $(".form-input input.temp-disable").removeClass("temp-disable");
      $('left-nav a.done span').css('color', '#25c1a0');
      $('#submitInfoBtn').css('visibility', 'visible');
    }
    $scope.$applyAsync();
    $scope.active = !$scope.active;
  }
})
