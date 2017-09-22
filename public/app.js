"use strict";

var app = angular
  .module("semifusa", [ "ngMaterial" ]);

app.controller("semifusaController", function($scope, $mdSidenav) {
  $scope.toggleMenu = function() {
    $mdSidenav('left').toggle();
  };
});
