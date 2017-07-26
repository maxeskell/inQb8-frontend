
angular
  .module('incubate')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html',
      controller: 'IdeasIndexCtrl as ideasIndex'
    })
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
      templateUrl: 'js/views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    });

  $urlRouterProvider.otherwise('/');
}
