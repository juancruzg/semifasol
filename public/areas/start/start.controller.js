"use strict";

angular
  .module("semifasol")
  .controller("startController", startController);

startController.$inject = [ "$scope" ];

function startController($scope) {
  var vm = this;

  vm.height = 60;

  $scope.$on('changeHeight',function(event, height){
    event.stopPropagation();
    vm.height = height;
  });
}
