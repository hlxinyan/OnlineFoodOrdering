(function () {
  'use strict';


  onLineFoodOrderingControllers.controller('DishesListCtrl', ['$scope', '$routeParams', 'Restaurant',
    function ($scope, $routeParams, Restaurant) {
      $scope.dishes = Restaurant.query({restaurantId:$routeParams.restaurantId});
    }]);
}());
