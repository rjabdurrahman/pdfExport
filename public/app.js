var app = angular.module('pdfApp', ['ngRoute'])

app.config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/clients_list.html',
        controller: 'ClientsListControler',
        activetab: 'home'
      })
      .when('/info', {
        templateUrl: 'pages/info.html',
        controller: 'InfoCtrl',
        activetab: 'page1'
      })
      .when('/profile', {
        templateUrl: 'pages/profile.html',
        controller: 'ProfileCtrl',
        activetab: 'profile'
      })
      .otherwise({ redirectTo: '/' })
    // if (window.history && window.history.pushState) {
    //     $locationProvider.html5Mode({
    //         enabled: true,
    //         requireBase: false
    //     });
    // }
  }
])

app.run(function ($rootScope, $http, $route) {
  $rootScope.$route = $route
  $rootScope.clients = []
  $rootScope.loadingClients = false
  $rootScope.searchable = false
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
      .post('api/delete/' + $rootScope.onDelete._id)
      .then(res => {
        if (!res.data.err) notify('Deleted Successfully!', 1)
        else notify(res.data.err.message, 2)
        $rootScope.loadClients()
      })
      .catch(err => {
        notify(err.message, 2)
      })
  }
})

app.component('leftNav', {
  templateUrl: '/components/leftnav.html',
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

app.controller('ProfileCtrl', function ($scope, $http) {
  console.log('Profile page')
  $scope.updateProfile = function (e) {
    e.preventDefault()
    $http
      .post('api/profile')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
})
