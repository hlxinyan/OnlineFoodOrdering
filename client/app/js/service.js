(function () {
  'use strict';
  /* Services */
  var onLineFoodOrderingServices = angular.module('onLineFoodOrderingServices', ['ngResource']);

  onLineFoodOrderingServices.factory('Restaurant', ['$resource',
    function ($resource) {
      return $resource('restaurants/:restaurantId.json', {}, {
        query: {method: 'GET', params: {restaurantId: 'restaurants'}, isArray: true}
      });
    }]);
}());



