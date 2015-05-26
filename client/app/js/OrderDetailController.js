(function () {
  'use strict';
 onLineFoodOrderingControllers.controller('OrderDetailCtrl', ['$scope','onLineFoodOrderingSharedService','$location',
    function ($scope, sharedService,$location) {
    $scope.order={
     number:'11111',
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


 }]);


}());
