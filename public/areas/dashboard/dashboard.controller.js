(function () {
  "use strict";

  angular
    .module("semifasol")
    .controller("dashboardController", dashboardController);

    dashboardController.$inject = [];

    function dashboardController () {
      var vm = this;

      vm.postList = [];
      vm.menuList = [];

      // Hardcoding
      for (var i = 0; i < 10; i ++) {
          vm.postList.push({
            "title": ("Title " + i),
            "description": ("I'm a freaking big description and you know it " + i),
            "date": "20 sep 2017",
            "by": "juan_cruzg"
          });

          vm.menuList.push({
            "name": ("menu" + i)
          });
      }
    }
})();
