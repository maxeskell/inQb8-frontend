angular
  .module('incubate')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersIndexCtrl.$inject = ['User'];

function UsersIndexCtrl(User) {
  const vm = this;

  vm.all = User.query();
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];

function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  User.get($stateParams).$promise.then((user) => {
    vm.user = user;
  });

  vm.users = User.query();

  function usersUpdate() {
    User
      .update({
        id: vm.user.id
      }, vm.user)
      .$promise
      .then(() => $state.go('usersShow', {
        id: vm.user.id
      }));
  }

  vm.update = usersUpdate;
}

UsersShowCtrl.$inject = ['User', '$stateParams', '$state', '$auth'];

function UsersShowCtrl(User, $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentUser = User.get({
    id: $auth.getPayload().id
  });

  vm.user = User.get($stateParams);

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('usersIndex'));
  }

  vm.delete = usersDelete;

}
