(function () {

  'use strict';
  var onLineFoodOrderingControllers = angular.module('onLineFoodOrderingControllers', []);

  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
      $scope.restaurants = Restaurant.query();
      console.log( $scope.restaurants);


    }]);
}());

