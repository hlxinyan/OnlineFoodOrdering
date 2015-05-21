(function(){

  'use strict';
  onLineFoodOrderingControllers.controller('UserController', ['$scope','onLineFoodOrderingSharedService', '$modal', '$log','$cookies',
    function ($scope,sharedService, $modal, $log,$cookies) {
      $scope.currentRestaurant={name:'OrderLunch'};
      $scope.user=$cookies.user;
         $scope.open = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            name: function () {
              return  $scope.user==null?'':$scope.user.name;
            }
          }
        });

        modalInstance.result.then(function (data) {
          $scope.user={name:data.name,id:data.id};
          $cookies.user=  $scope.user;

        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
      $('[data-target="#bs-navbar-collapse-1"]').click(function () {
        $('#bs-navbar-collapse-1').toggleClass("in");
//                alert('ddd')
      });

      $scope.$on('currentRestaurant', function () {
        $scope.currentRestaurant=sharedService.arg;
      });

    }]);
  onLineFoodOrderingControllers.controller('ModalInstanceCtrl', function ($scope, $modalInstance,$http) {
     $scope.ok = function () {

      // Simple POST request example (passing data) :
      $http.post('/user/register', {name: $scope.name}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

//          $scope.data=data;
//          $scope.status=status;
              $modalInstance.close(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.

              $modalInstance.close(data);

        });

    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
}());