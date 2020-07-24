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
        templateUrl: 'pages/info1.html',
        controller: 'InfoCtrl',
        activetab: 'page1'
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
  $rootScope.loadClients = function () {
    $rootScope.loadingClients = true
    $http({
      method: 'GET',
      url: '/api/clients'
    })
      .then(function (res) {
        $rootScope.clients = res.data
        $rootScope.loadingClients = false
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
  $rootScope.submitClientDelete = function (id) {
    let clientId = id
    $http({
      method: 'POST',
      url: `/api/clientdelete/${clientId}`,
      data: {}
    })
      .then(function (res) {
        loadClients()
        notify('Delete Client Successfully!', 1)
      })
      .catch(function (err) {
        notify('Something Went Wrong', 2)
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
  $('.load-overlay').hide()
  $rootScope.loadClients()
  $scope.search = function (e) {
    let clients = $rootScope.clients.map(x => {
      // return {...x.signaletique.contribuable, ...x.signaletique}
      return (
        Object.values(x.signaletique.contribuable).join('') + x.signaletique
      )
    })
    console.log(clients)
  }
  $scope.deleteClient = function (e) {
    console.log('Id is', e.target.id)
    $http
      .post('api/delete/' + e.target.id)
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
