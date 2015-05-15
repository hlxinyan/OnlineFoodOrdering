(function () {
  'use strict';


  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
      $scope.restaurants = Restaurant.query();

        var abc = function(){
            alert('ass')
            $('.content-box').addClass('animated');
            $('.content-box').addClass('pulse');
        }
        var ccc = function(){
            alert('bss')
            $('.content-box').removeClass('animated');
            $('.content-box').removeClass('pulse');
        }
    }]);


}());
