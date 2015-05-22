(function () {
  'use strict';
  var orderItems = [];

  onLineFoodOrderingControllers.controller('DishesListCtrl', ['$scope', 'onLineFoodOrderingSharedService', '$routeParams', 'Restaurant',
    function ($scope, sharedService, $routeParams, Restaurant) {
      $scope.dishes = Restaurant.query({restaurantId: $routeParams.restaurantId});
      $scope.selectedOrderItems = orderItems;
      $scope.summary = {};

      $scope.order = function () {
        $scope.realOrderItems = [];

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

      $scope.minusOneSummary = function (realOrder) {
        $scope.summary.total -= 1;

        $scope.summary.total_price -= realOrder.dish.price;

        if ($scope.summary.total < 0)  $scope.summary.total = 0;
        if ($scope.summary.total_price < 0)  $scope.summary.total_price = 0;
      };

      $scope.addOneSummary = function (realOrder) {
        $scope.summary.total += 1;
        $scope.summary.total_price += realOrder.dish.price;
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
      $('#moreDetail').click(function () {
        $('#realDetail').show()
      })
      $('#comeBack').click(function () {
        $('#realDetail').hide()
      })

    }]);
}());
