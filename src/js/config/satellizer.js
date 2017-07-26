angular
  .module('incubate')
  .config(Auth);

Auth.$inject = ['$authProvider', 'API_URL'];

function Auth($authProvider, API_URL) {
  $authProvider.signupUrl = `${API_URL}/register`;
  $authProvider.loginUrl = `${API_URL}/login`;

  $authProvider.github({
    clientId: '80c887651da4e5348dcc',
    url: `${API_URL}/oauth/github`
  });
  $authProvider.facebook({
    clientId: '117492982210639',
    url: `${API_URL}/oauth/facebook`
  });
}