angular
  .module('incubate')
  .factory('Idea', Idea);

Idea.$inject = ['$resource', 'API_URL'];
function Idea($resource, API_URL) {
  return new $resource(`${API_URL}/ideas/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
