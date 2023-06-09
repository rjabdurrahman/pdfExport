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
    let fieldName = $(element).prev()[0].textContent;
    let key = 'nom';
    $(element).toggleClass('desc')
    let sortType = $(element).hasClass('desc');
    if (fieldName == 'Nom') {
      key = 'nom';
    } else if (fieldName == 'Prénom') {
      key = 'prenom'
    }
    $rootScope.clients = $rootScope.clients.sort(function (a, b) {
      if (a.signaletique.contribuable[key].toLowerCase() < b.signaletique.contribuable[key].toLowerCase()) {
        return sortType ? -1 : 1
      }
      if (a.signaletique.contribuable[key].toLowerCase() > b.signaletique.contribuable[key].toLowerCase()) {
        return sortType ? 1 : -1
      }
      return 0
    })
    $rootScope.$applyAsync()
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
        if (res.data) notify('Transfert', 1);
        $('#clientTransferModal').hide();
      })
      .catch(err => {
        notify('Transfert', 2)
      })
  }

  $scope.calculateParcent = function (...args) {
    if (args[0] == undefined || args[1] == undefined) return '';
    else {
      let [maxTotal, total] = args.map(x => Number(x.replace('.', '').replace(',', '.')));
      let percent = Math.round(total / maxTotal * 100);
      return isNaN(percent) ? '' : percent + '%';
    }
  }

  $scope.calculateParcent2 = function (conj, v1, v2, bornY1, bornY2) {
    if (!(conj && v1 && v2 && bornY1 && bornY2)) return 0;
    bornY1 = bornY1 ? bornY1.slice(0, 4) : $rootScope.selectedYear;
    bornY2 = bornY2 ? bornY2.slice(0, 4) : $rootScope.selectedYear;
    let age1 = $rootScope.selectedYear - bornY1;
    let age2 = $rootScope.selectedYear - bornY2;
    // console.log(age1, age2);
    let ground = 3200;
    v1 = Number(v1.replace('.', '').replace(',', '.'));
    v2 = Number(v2.replace('.', '').replace(',', '.'));
    if (conj != '' || v2 > 0) {
      ground *= 2;
    }
    return Math.round((v1 + v2) / ground * 100);
  }
})

app.controller('InfoCtrl', function ($rootScope, $scope, $http) {
  pageInit()
  let clientId = location.href.split('id=')[1];
  $scope.active = true;
  $scope.client = {}
  $scope.data19 = {}
  $scope.data20 = {}
  $scope.data21 = {}
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
        $scope.data21 = res.data.y2021;
      }
      else if (location.href.match(/2021/g)) {
        $scope.data20 = res.data.y2020;
        $scope.data21 = res.data.y2021;
      }
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
      setTimeout(() => {
        $('a.done span').css('color', '#cf4044');
        $('a.done').css('border-color', '#cf4044');
      }, 500);
      $('#submitInfoBtn').css('visibility', 'hidden');
    } else {
      $scope.client = $scope.data20;
      afterDataLoaded($scope.client);
      $(".form-input input.temp-disable").prop("disabled", false);
      $(".form-input input.temp-disable").removeClass("temp-disable");
      $('left-nav a.done span').css('color', '#25c1a0');
      setTimeout(() => {
        $('.left-nav a span').css('color', '#f4f5f6')
        $('a.done span').css('color', '#25c1a0');
        $('a.done').css('border-color', '#25c1a0');
      }, 500);
      $('#submitInfoBtn').css('visibility', 'visible');
    }
    $scope.$applyAsync();
    // setTimeout(function() {
    //   $('.form-input input').each(function() {
    //     $(this).val(this.getAttribute('value'));
    //   });
    // }, 200);
    $scope.active = !$scope.active;
  }
  $scope.view20 = function () {
    $('left-nav a.done').removeClass('done');
    if ($scope.active) {
      $scope.client = $scope.data20;
      afterDataLoaded($scope.client);
      $(".form-input input:not(:disabled)").addClass("temp-disable");
      $(".form-input input:not(:disabled)").prop("disabled", true);
      setTimeout(() => {
        $('a.done span').css('color', '#cf4044');
        $('a.done').css('border-color', '#cf4044');
      }, 500);
      $('#submitInfoBtn').css('visibility', 'hidden');
    } else {
      $scope.client = $scope.data21;
      afterDataLoaded($scope.client);
      $(".form-input input.temp-disable").prop("disabled", false);
      $(".form-input input.temp-disable").removeClass("temp-disable");
      $('left-nav a.done span').css('color', '#25c1a0');
      setTimeout(() => {
        $('.left-nav a span').css('color', '#f4f5f6')
        $('a.done span').css('color', '#25c1a0');
        $('.left-nav a').css('border-color', '#f4f5f6')
        $('a.done').css('border-color', '#25c1a0');
      }, 500);
      $('#submitInfoBtn').css('visibility', 'visible');
    }
    $scope.$applyAsync();
    // setTimeout(function() {
    //   $('.form-input input').each(function() {
    //     $(this).val(this.getAttribute('value'));
    //   });
    // }, 200);
    $scope.active = !$scope.active;
  }
})
