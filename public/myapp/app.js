var app = angular.module('pdfApp', ['ngRoute'])
app.config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/myapp/home', {
        templateUrl: 'pages/clients_list.html',
        controller: 'ClientsListControler',
        activetab: 'home'
      })
      .when('/myapp/2019', {
        templateUrl: 'pages/info.html',
        controller: 'InfoCtrl',
        activetab: 'info'
      })
      .when('/myapp/2020', {
        templateUrl: 'pages/info20.html',
        controller: 'InfoCtrl',
        activetab: 'info'
      })
      .when('/myapp/2021', {
        templateUrl: 'pages/info21.html',
        controller: 'InfoCtrl',
        activetab: 'info'
      })
      // New Year Modify
      .when('/myapp/2022', {
        templateUrl: 'pages/info22.html',
        controller: 'InfoCtrl',
        activetab: 'info'
      })
      .when('/myapp/profile', {
        templateUrl: 'pages/profile.html',
        controller: 'ProfileCtrl',
        activetab: 'profile'
      })
      .when('/myapp/recycle', {
        templateUrl: 'pages/recycle.html',
        controller: 'RecycleCtrl',
        activetab: 'recycle'
      })
      .when('/myapp/logout', {
        templateUrl: 'pages/logout.html',
        controller: 'LogOutCtrl',
        activetab: 'logout'
      })
      .otherwise({ redirectTo: '/myapp/home' })
    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
    }
  }
])

app.run(function ($rootScope, $http, $route) {
  $rootScope.$route = $route
  $rootScope.clients = []
  $rootScope.loadingClients = false
  $rootScope.searchable = false
  $rootScope.updateLetters = function () {
    $http
      .get('/api/profile')
      .then(res => {
        $('.letters').html(res.data.firstName[0] + res.data.lastName[0])
      })
      .catch(err => {
        console.log(err)
      })
  }
  $rootScope.updateLetters();
  $('#recycleCount').hide();
  $rootScope.recyleCount = function () {
    $http
      .get('/api/recycled_count')
      .then(({ data }) => {
        if (data.count) {
          $('#recycleCount').show();
        } else {
          $('#recycleCount').hide();
        }
        $('#recycleCount').text(data.count)
      })
      .catch(err => {
        console.log(err)
      })
  }
  $rootScope.recyleCount();
  $rootScope.lang = 'fr';
  $rootScope.chnageLang = function () {
    if ($rootScope.lang == 'fr') $rootScope.lang = 'de';
    else $rootScope.lang = 'fr';
  }
  // New Year Modify
  $rootScope.selectedYear = 2021;
  $rootScope.loadClients = function () {
    $('.load-overlay').show();
    $rootScope.loadingClients = true
    $http({
      method: 'GET',
      url: `/api/${$rootScope.selectedYear}/clients`
    })
      .then(function (res) {
        $rootScope.clients = res.data.filter((client) => {
          if (client['y' + $rootScope.selectedYear]) {
            return true
          }
        }).map(client => ({
          ...client['y' + $rootScope.selectedYear],
          _id: client._id,
          // New Year Modify
          2019: _.get(client, 'y2019.signaletique') ? true : false,
          2020: _.get(client, 'y2020.signaletique') ? true : false
        }));
        $rootScope.loadingClients = false
        $('.load-overlay').hide()
        clientsCopy = JSON.parse(JSON.stringify($rootScope.clients))
        $rootScope.searchable = true
        // Can be in info Controll to show the overlay
        $('a').click(function (e) {
          if (this.href.includes('/info?id')) $('.load-overlay').show()
        });
        $rootScope.$applyAsync()
      })
      .catch(function (err) {
        console.log(err)
      })
  }
  $rootScope.submitClient = function (e) {
    let clientForm = e.target
    let client = {
      nom: clientForm['nom'].value,
      prenom: clientForm['prenom'].value,
      telephone: clientForm['telephone'].value,
      courriel: clientForm['courriel'].value
    }
    $http({
      method: 'POST',
      url: '/api/client',
      data: { ...client, year: $rootScope.selectedYear }
    })
      .then(function (res) {
        notify('Création', 1)
        $(clientForm)[0].reset()
        closeAddClientModal()
        $rootScope.loadClients()
        $rootScope.$applyAsync()
      })
      .catch(function (err) {
        notify('Something Went Wrong!', 2)
      })
  }
  $rootScope.onDelete = null
  $rootScope.deleteAction = function (e) {
    $rootScope.onDelete = JSON.parse(e.target.id)
    $rootScope.$applyAsync()
  }
  $rootScope.deleteClient = function () {
    $('#clientDeleteModal').hide()
    $http
      .post(`../api/delete/${$rootScope.selectedYear}/` + $rootScope.onDelete._id)
      .then(res => {
        if (!res.data.err) notify('Suppression', 1)
        else notify(res.data.err.message, 2)
        $rootScope.loadClients()
        $rootScope.recyleCount()
      })
      .catch(err => {
        notify('Suppression', 2)
      })
  }
})

app.component('leftNav', {
  templateUrl: 'components/leftnav.html',
  controller: 'NavCtrl'
})

app.controller('NavCtrl', function ($scope, $http) {
  console.log('Nav page')
})

app.controller('ProfileCtrl', function ($scope, $http, $rootScope) {
  $scope.profile = {}
  $http
    .get('/api/profile')
    .then(res => {
      $scope.profile = res.data
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  $scope.updateProfile = function (e, id) {
    e.preventDefault()
    let form = e.target
    if (form['password'].value !== form['confirmPass'].value) {
      notify('Mot de passe erroné', 2)
      return
    }
    $http
      .post('/api/profile/', {
        firstName: form['firstName'].value,
        lastName: form['lastName'].value,
        username: form['username'].value,
        password: form['password'].value
      })
      .then(res => {
        console.log(res.data)
        $rootScope.updateLetters()
        notify('Mise à jour', 1)
      })
      .catch(err => console.log(err))
  }
})

app.controller('LogOutCtrl', function ($scope, $http) {
  $http
    .get('/logout')
    .then(res => (location.href = '/myapp/login'))
    .catch(err => console.log(err))
})

app.controller('RecycleCtrl', function ($scope, $http, $rootScope) {
  $scope.loadingRecycledClients = true
  $scope.noRecycledClients = false
  function loadRecycledClients() {
    $http
      .get('/api/recycled_clients')
      .then(res => {
        $scope.r_clients = res.data.map(c => {
          if (_.get(c, 'y2019.signaletique')) {
            return {
              _id: c._id,
              year: 2019,
              ...c.y2019
            }
          }
          else if (_.get(c, 'y2020.signaletique')) {
            return {
              _id: c._id,
              year: 2020,
              ...c.y2020
            }
          }
          else if (_.get(c, 'y2021.signaletique')) {
            return {
              _id: c._id,
              year: 2021,
              ...c.y2021
            }
          }
          // New Year Modify
        });
        $scope.loadingRecycledClients = false
        $scope.noRecycledClients = true
        $scope.$applyAsync()
      })
      .catch(err => notify(err.message, 2))
  }
  loadRecycledClients()

  $scope.restore = function (e) {
    $http
      .get('/api/recover_client/' + e.target.id.slice(0, -1))
      .then(res => {
        notify('Restauration', 1)
        $rootScope.recyleCount()
        loadRecycledClients()
      })
      .catch(err => {
        notify("Restauration", 2)
      })
  }
  $scope.onDelForever = null
  $scope.deleteAction = function (e) {
    $scope.onDelForever = e.target.id.slice(0, -2)
    $scope.$applyAsync()
  }
  $scope.deleteForever = function (e) {
    $http
      .get('/api/delete_forever/' + $scope.onDelForever)
      .then(res => {
        $rootScope.recyleCount()
        notify('Suppression définitive', 1)
        $('#deleteForeverModal').hide()
        $scope.onDelForever = null
        loadRecycledClients()
      })
      .catch(err => {
        notify("Can't Deleted!", 2)
      })
  }
})
