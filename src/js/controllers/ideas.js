angular
  .module('incubate')
  .controller('IdeasIndexCtrl', IdeasIndexCtrl)
  .controller('IdeasNewCtrl', IdeasNewCtrl)
  .controller('IdeasShowCtrl', IdeasShowCtrl)
  .controller('IdeasEditCtrl', IdeasEditCtrl);

IdeasIndexCtrl.$inject = ['Idea', 'filterFilter', '$scope'];

function IdeasIndexCtrl(Idea, filterFilter, $scope) {
  const vm = this;
  vm.all = [];
  Idea.query()
  .$promise
  .then((response) => {
    vm.all = shuffle(response);
    filterIdeas();
  });

  function filterIdeas() {
    const params = { title: vm.q };
    vm.filtered = filterFilter(vm.all, params);
  }

  $scope.$watchGroup([
    () => vm.q
  ], filterIdeas);

}

IdeasNewCtrl.$inject = ['Idea', 'User', '$state', 'Tag'];

function IdeasNewCtrl(Idea, User, $state, Tag) {
  const vm = this;
  // to prepopulate idea fields, pass them in here
  vm.idea = {};
  vm.users = User.query();
  vm.tags = Tag.query();

  function ideasCreate() {
    Idea
      .save(vm.idea)
      .$promise
      .then(() => $state.go('ideasIndex'));
  }

  vm.create = ideasCreate;

}

IdeasShowCtrl.$inject = ['Idea', 'User', 'Comment', '$stateParams', '$state', '$auth'];

function IdeasShowCtrl(Idea, User, Comment, $stateParams, $state, $auth) {
  const vm = this;

  if ($auth.getPayload()) vm.currentUser = User.get({
    id: $auth.getPayload().id
  });

  vm.idea = Idea.get($stateParams);

  function ideasDelete() {
    vm.idea
      .$remove()
      .then(() => $state.go('ideasIndex'));
  }

  vm.delete = ideasDelete;

  function ideasUpdate() {
    Idea
      .update({
        id: vm.idea.id
      }, vm.idea);
  }

  function toggleLove() {
    const index = vm.idea.love_ids.indexOf(vm.currentUser.id);
    if (index > -1) {
      vm.idea.love_ids.splice(index, 1);
      vm.idea.loves.splice(index, 1);
    } else {
      vm.idea.love_ids.push(vm.currentUser.id);
      vm.idea.loves.push(vm.currentUser);
    }
    ideasUpdate();
  }
  vm.toggleLove = toggleLove;

  function isLove() {
    return $auth.getPayload() && vm.idea.$resolved && vm.idea.love_ids.includes(vm.currentUser.id);
  }

  vm.isLove = isLove;

  function toggleJoin() {
    const index = vm.idea.joiner_ids.indexOf(vm.currentUser.id);
    if (index > -1) {
      vm.idea.joiner_ids.splice(index, 1);
      vm.idea.joiners.splice(index, 1);
    } else {
      vm.idea.joiner_ids.push(vm.currentUser.id);
      vm.idea.joiners.push(vm.currentUser);
    }
    ideasUpdate();
  }
  vm.toggleJoin = toggleJoin;

  function isJoin() {
    return $auth.getPayload() && vm.idea.$resolved && vm.idea.joiner_ids.includes(vm.currentUser.id);
  }

  vm.isJoin = isJoin;

  function addComment() {
    vm.comment.idea_id = vm.idea.id;

    Comment
      .save(vm.comment)
      .$promise
      .then((comment) => {
        vm.idea.comments.push(comment);
        vm.comment = {};
      });
  }

  vm.addComment = addComment;

  function deleteComment(comment) {
    Comment
      .delete({
        id: comment.id
      })
      .$promise
      .then(() => {
        const index = vm.idea.comments.indexOf(comment);
        vm.idea.comments.splice(index, 1);
      });
  }

  vm.deleteComment = deleteComment;
}

IdeasEditCtrl.$inject = ['Idea', 'User', '$stateParams', '$state'];

function IdeasEditCtrl(Idea, User, $stateParams, $state) {
  const vm = this;

  Idea.get($stateParams).$promise.then((idea) => {
    vm.idea = idea;
    vm.idea.date = new Date(idea.date);
  });

  vm.users = User.query();

  function ideasUpdate() {
    Idea
      .update({
        id: vm.idea.id
      }, vm.idea)
      .$promise
      .then(() => $state.go('ideasShow', {
        id: vm.idea.id
      }));
  }

  vm.update = ideasUpdate;
}

function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}
