(function () {

  'use strict';
  var onLineFoodOrderingControllers = angular.module('onLineFoodOrderingControllers', ['ui.bootstrap']);

  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
      $scope.restaurants = Restaurant.query();
      console.log( $scope.restaurants);


    }]);
}());

