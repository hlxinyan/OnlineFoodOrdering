var onLineFoodOrderingSharedServices = angular.module('onLineFoodOrderingSharedServices', []);
onLineFoodOrderingSharedServices.factory('onLineFoodOrderingSharedService', function($rootScope) {
  var sharedService = {};

  sharedService.arg = {};

  sharedService.prepForBroadcast = function(arg) {
    this.arg = arg;
    this.broadcastItem();
  };

  sharedService.broadcastItem = function(event) {
    $rootScope.$broadcast(event);
  };

  return sharedService;
});
