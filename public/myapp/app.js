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
      .when('/myapp/info', {
        templateUrl: 'pages/info.html',
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
  $rootScope.selectedYear = 1;
  $rootScope.loadClients = function () {
    $('.load-overlay').show();
    $rootScope.loadingClients = true
    $http({
      method: 'GET',
      url: `/api/${$rootScope.selectedYear}/clients`
    })
      .then(function (res) {
        $rootScope.clients = res.data
        $rootScope.loadingClients = false
        $('.load-overlay').hide()
        clientsCopy = JSON.parse(JSON.stringify($rootScope.clients))
        $rootScope.searchable = true
        $('a').click(function (e) {
          if (this.href.includes('/info?id')) $('.load-overlay').show()
        })
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
      url: '/api/addclient',
      data: client
    })
      .then(function (res) {
        notify('Création Client', 1)
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
      .post('../api/delete/' + $rootScope.onDelete._id)
      .then(res => {
        if (!res.data.err) notify('Supression Client', 1)
        else notify(res.data.err.message, 2)
        $rootScope.loadClients()
      })
      .catch(err => {
        notify(err.message, 2)
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

app.controller('RecycleCtrl', function ($scope, $http) {
  $scope.loadingRecycledClients = true
  $scope.noRecycledClients = false
  function loadRecycledClients () {
    $http
      .get('/api/recycled_clients')
      .then(res => {
        $scope.r_clients = res.data
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
        notify('Client Resotored!', 1)
        loadRecycledClients()
      })
      .catch(err => {
        notify("Can't Restored!", 2)
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
        notify('Cleint Delted forever!', 1)
        $('#deleteForeverModal').hide()
        $scope.onDelForever = null
        loadRecycledClients()
        console.log(res.data)
      })
      .catch(err => {
        notify("Can't Deleted!", 2)
      })
  }
})
