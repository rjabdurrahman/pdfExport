var app = angular.module('pdfApp', ['ngRoute'])

app.config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/myapp/home', {
        templateUrl: './home/pages/clients_list.html',
        controller: 'ClientsListControler',
        activetab: 'home'
      })
      .when('/myapp/info', {
        templateUrl: './home/pages/info.html',
        controller: 'InfoCtrl',
        activetab: 'page1'
      })
      .when('/myapp/profile', {
        templateUrl: './home/pages/profile.html',
        controller: 'ProfileCtrl',
        activetab: 'profile'
      })
      .when('/myapp/logout', {
        templateUrl: './home/pages/logout.html',
        controller: 'LogOutCtrl',
        activetab: 'logout'
      })
      .otherwise({ redirectTo: '/' })
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
  $rootScope.updateLetters()
  $rootScope.loadClients = function () {
    $rootScope.loadingClients = true
    $http({
      method: 'GET',
      url: '/api/clients'
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
  $rootScope.loadClients()
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
  templateUrl: './home/components/leftnav.html',
  controller: 'NavCtrl'
})

app.controller('NavCtrl', function ($scope, $http) {
  console.log('Nav page')
})

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
    console.log({
      firstName: form['firstName'].value,
      lastName: form['lastName'].value
    })
    $http
      .post('/api/profile/', {
        firstName: form['firstName'].value,
        lastName: form['lastName'].value
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
