(function () {
  'use strict';
  var orderItems = [];

  onLineFoodOrderingControllers.controller('DishesListCtrl', ['$scope', 'onLineFoodOrderingSharedService', '$routeParams', 'Restaurant',
    function ($scope, sharedService, $routeParams, Restaurant) {
      $scope.dishes = Restaurant.query({restaurantId: $routeParams.restaurantId});
      $scope.selectedOrderItems = orderItems;



      $scope.order = function () {
        $scope.realOrderItems = [];
        for (var i=0;i< $scope.selectedOrderItems.length;i++) {
          var item=$scope.selectedOrderItems[i];
          var realOrder = {dish:item , count: 1};
          $scope.realOrderItems.splice(0,0,realOrder);
        }


      }

      $scope.minusOne=function(realOrder){
        for (var i=0;i< $scope.realOrderItems.length;i++) {
          var item=$scope.realOrderItems[i];
          if(item.dish.id==realOrder.dish.id){
             item.count -=1;
          }
          if(item.count ==0){
            $scope.realOrderItems.splice(i,1);
          }
        }
      }

      $scope.addOne=function(realOrder){
        for (var i=0;i< $scope.realOrderItems.length;i++) {
          var item=$scope.realOrderItems[i];
          if(item.dish.id==realOrder.dish.id){
            item.count+=1;

          }

        }
      }


    }]);
}());
