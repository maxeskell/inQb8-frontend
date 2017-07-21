angular
  .module('incubate')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('ideasIndex', {
      url: '/ideas',
      templateUrl: 'js/views/ideas/index.html',
      controller: 'IdeasIndexCtrl as ideasIndex'
    })
    .state('ideasNew', {
      url: '/ideas/new',
      templateUrl: 'js/views/ideas/new.html',
      controller: 'IdeasNewCtrl as ideasNew'
    })
    .state('ideasShow', {
      url: '/ideas/:id',
      templateUrl: 'js/views/ideas/show.html',
      controller: 'IdeasShowCtrl as ideasShow'
    })
    .state('ideasEdit', {
      url: '/ideas/:id/edit',
      templateUrl: 'js/views/ideas/edit.html',
      controller: 'IdeasEditCtrl as ideasEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/user/users.html',
      controller: 'ProfilesIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/user/users.html',
      controller: 'ProfilesShowCtrl as usersShow'
    });

  $urlRouterProvider.otherwise('/');
}
