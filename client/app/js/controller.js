(function () {

  'use strict';
  var onLineFoodOrderingControllers = angular.module('onLineFoodOrderingControllers', []);

  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
      $scope.restaurants = Restaurant.query();


    }]);

  onLineFoodOrderingControllers.controller('UserController', ['$scope',
    function ($scope) {
      $scope.user = userObject;

    }]);

  var userObject = {
    name: 'abc'
  };

}());

