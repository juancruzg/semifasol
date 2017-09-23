"use strict";

angular
  .module("semifasol")
  .controller("loginController", loginController);

loginController.$inject = [ "$state", "$scope" ];

function loginController($state, $scope) {
  var vm = this;

  vm.toNewAccount = toNewAccount;

  $scope.$emit('changeHeight', 60);

  function toNewAccount() {
    $state.go("start.new-account");
  }
}
