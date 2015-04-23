(function () {

  'use strict';
  var onLineFoodOrderingControllers = angular.module('onLineFoodOrderingControllers', []);

  onLineFoodOrderingControllers.controller('RestaurantsListCtrl', ['$scope', 'Restaurant',
    function ($scope, Restaurant) {
      $scope.restaurants = Restaurant.query();


    }]);


  var userObject = {
    name: 'abc'
  };


  onLineFoodOrderingControllers.controller('UserController', ['$scope', '$modal', '$log',
    function ($scope, $modal, $log) {
      $scope.user = userObject;
      $scope.items = ['item1', 'item2', 'item3'];

      $scope.open = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });


      };
      $('[data-target="#bs-navbar-collapse-1"]').click(function () {
        $('#bs-navbar-collapse-1').toggleClass("in");
//                alert('ddd')
      })

    }]);
  onLineFoodOrderingControllers.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });


}());

