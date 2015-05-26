(function () {
  'use strict';
  var orderItems = [];

  onLineFoodOrderingControllers.controller('DishesListCtrl', ['$scope', 'onLineFoodOrderingSharedService', '$routeParams', 'Restaurant','$cookies','$location',
    function ($scope, sharedService, $routeParams, Restaurant,$cookies,$location) {
      $scope.dishes = Restaurant.query({restaurantId: $routeParams.restaurantId});
      $scope.selectedOrderItems = orderItems;
      $scope.summary = {};
      $scope.user=$cookies.user;



      $scope.order = function () {
        $scope.realOrderItems = [];

        if(orderItems.length>0){
            $('#cartTotal').fadeIn()
        }else{
            $('#cartTotal').fadeOut()
            $('.real-box ').fadeOut()
        }
        for (var i = 0; i < $scope.selectedOrderItems.length; i++) {
          var item = $scope.selectedOrderItems[i];
          var realOrder = {dish: item, count: 1};
          $scope.realOrderItems.splice(0, 0, realOrder);
        }

      };

      $scope.minusOne = function (realOrder) {
        for (var i = 0; i < $scope.realOrderItems.length; i++) {
          var item = $scope.realOrderItems[i];
          if (item.dish.id == realOrder.dish.id) {
            item.count =parseInt(item.count)- 1;
            if (item.count == 0) {
              $scope.realOrderItems.splice(i, 1);
              $scope.deleteChecked(realOrder.dish);
            }
            break;
          }

        }
      };

      $scope.addOne = function (realOrder) {
        for (var i = 0; i < $scope.realOrderItems.length; i++) {
          var item = $scope.realOrderItems[i];

          if (item.dish.id == realOrder.dish.id) {
             item.count=parseInt(item.count)+1;

            break;

          }

        }
      };

      $scope.deleteOrder = function (realOrder) {

        console.log(realOrder);

        for (var i = 0; i < $scope.realOrderItems.length; i++) {
          var item = $scope.realOrderItems[i];
          console.log(item);
          if (item.dish.id == realOrder.dish.id) {
            $scope.realOrderItems.splice(i, 1);
            $scope.deleteChecked(realOrder.dish);
          }

        }
      };
      $scope.deleteChecked = function (dish) {
        for (var i = 0; i < $scope.selectedOrderItems.length; i++) {
          var item = $scope.selectedOrderItems[i];
          if (item.id == dish.id) {
            $scope.selectedOrderItems.splice(i, 1);
          }
        }
      };
      $scope.sum = function (realOrderItems) {
        var total = 0;
        var totalPrice = 0;
        angular.forEach(realOrderItems, function (item) {
          total += parseInt(item.count);
          totalPrice += item.dish.price * item.count;
        });

        var summary = {};
        summary.total = total;
        summary.total_price = totalPrice;
        return summary;

      };
      $scope.submit=function(realOrderItems){
          console.log("test");
        if($scope.user ==null){
            console.log("test");
          sharedService.prepForBroadcast(realOrderItems);
          sharedService.broadcastItem('needToLogin');

          return;
        }else{
          console.log("submit for user has login");
          console.log($scope.user);
            var order={user:$scope.user,order_list:realOrderItems,rid:$routeParams.restaurantId};

            sharedService.prepForBroadcast(order);
            sharedService.broadcastItem('addCurrentOrder');
            $location.path("/addOrder");



        }

      };
      $('#moreDetail').click(function () {
        $('#realDetail').fadeIn()
      })
      $('#comeBack').click(function () {
        $('#realDetail').fadeOut()
      })


    }]);
}());
