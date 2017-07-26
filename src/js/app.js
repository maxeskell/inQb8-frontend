angular
  .module('incubate', ['ui.router', 'ngResource', 'satellizer', 'checklist-model', 'ngMessages'])
  .constant('API_URL', 'http://localhost:3000/api');
