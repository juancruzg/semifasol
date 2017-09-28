"use strict";

var app = angular
  .module("semifasol", [ "ngMaterial", "ui.router" ]);

app.config(function($stateProvider, $urlRouterProvider) {
  var dashboard = {
    "name": "dashboard",
    "templateUrl": "areas/dashboard/dashboard.html",
    "url": "/dashboard",
    "controller": "dashboardController",
    "controllerAs": "vm"
  },
  start = {
    "name": "start",
    "templateUrl": "areas/start/start.html",
    "url": "/start",
    "controller": "startController",
    "controllerAs": "vm"
  },
  login= {
    "name": "start.login",
    "templateUrl": "areas/start/login/login.html",
    "url": "/login",
    "controller": "loginController",
    "controllerAs": "vm"
  },
  newAccount= {
    "name": "start.new-account",
    "templateUrl": "areas/start/new-account/new-account.html",
    "url": "/new-account",
    "controller": "newAccountController",
    "controllerAs": "vm"
  };;

  var defaultUrl = '/dashboard';
  $urlRouterProvider.otherwise(defaultUrl);

  $stateProvider
    .state(dashboard)
    .state(start)
    .state(login)
    .state(newAccount);
});

app.run(['$transitions', '$login', '$state', function($transitions, $usuario, $state) {
	$transitions.onBefore({}, function(tran) {
		return $login.authorize(tran.$to().name).catch(function(target) {
			return $state.target(target);
		});
	});
}])

app.controller("semifasolController", function($scope) {

});
