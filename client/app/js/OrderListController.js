(function () {
  'use strict';
 onLineFoodOrderingControllers.controller('OrderListCtrl', ['$scope','onLineFoodOrderingSharedService','$location',
    function ($scope, sharedService,$location) {
    $scope.order={number:'11111',
     status:'0',
     created_time:'2015-05-25',
     items:[]
    };
    $scope.currentOrder=null;
    $scope.$on('addOrderEvent',function(){
    $scope.currentOrder=  sharedService.args;
         console.log( $scope.currentOrder);
    $scope.order.items.push($scope.currentOrder);

  });
    $scope.submit=function(orderDetail){
        if($scope.user ==null){
            sharedService.prepForBroadcast(orderDetail);
            sharedService.broadcastItem('needToLogin');
            sharedService.prepForBroadcast(order);
            sharedService.broadcastItem('addCurrentOrder');
            $location.path("/orderDetail");
            return;
        }else{
            console.log("submit for user has login");
            console.log($scope.user);
            var order={user:$scope.user,order_list:orderDetail,rid:$routeParams.restaurantId};





        }

    };

 }]);


}());
