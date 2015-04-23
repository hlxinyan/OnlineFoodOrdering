(function(){
  'use strict';

  /* App Module */
  var clientApp = angular.module('clientApp', [
    'ngRoute',
    'onLineFoodOrderingControllers',
    'onLineFoodOrderingServices'
  ]);

  clientApp.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/restaurant-list.html',
          controller: 'RestaurantsListCtrl'
        });

    }]);

}());


