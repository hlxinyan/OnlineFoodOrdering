(function(){

  'use strict';
  var userObject = {
    name: 'abc'
  };


  onLineFoodOrderingControllers.controller('UserController', ['$scope', '$modal', '$log',
    function ($scope, $modal, $log) {
      $scope.user = userObject;


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

        modalInstance.result.then(function () {
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });


      };
      $('[data-target="#bs-navbar-collapse-1"]').click(function () {
        $('#bs-navbar-collapse-1').toggleClass("in");
//                alert('ddd')
      });

    }]);
  onLineFoodOrderingControllers.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {


    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
}());
