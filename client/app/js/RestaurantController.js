(function () {
  'use strict';


  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant','onLineFoodOrderingSharedService','$location',
    function ($scope, Restaurant,sharedService,$location) {
      $scope.restaurants = Restaurant.query();
      $scope.currentRestaurant = {};

      $scope.setCurrentRestaurant = function (restaurant) {
        $scope.currentRestaurant = restaurant;
        sharedService.prepForBroadcast($scope.currentRestaurant);
        sharedService.broadcastItem('currentRestaurant');
        console.log(restaurant);
        $location.path("/restaurants/"+restaurant.id);

      }
    }]);


}());
