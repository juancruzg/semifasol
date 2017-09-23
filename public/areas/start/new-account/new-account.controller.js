"use strict";

angular
  .module("semifasol")
  .controller("newAccountController", newAccountController);

newAccountController.$inject = [ "$scope", "$state" ];

function newAccountController($scope, $state) {
  var vm = this;

  vm.toLogin = toLogin;

  $scope.$emit('changeHeight', 100);

  function toLogin() {
    $state.go("start.login");
  }
}
