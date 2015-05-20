(function () {
  'use strict';


  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
      $scope.restaurants = Restaurant.query();


    }]);


}());
