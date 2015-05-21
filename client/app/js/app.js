(function () {
  'use strict';

  /* App Module */
  var clientApp = angular.module('clientApp', [
    'ngRoute',
    'ui.bootstrap',
    'checklist-model',
    'onLineFoodOrderingAnimation',
    'onLineFoodOrderingControllers',
    'onLineFoodOrderingServices',
    'onLineFoodOrderingSharedServices'

  ]);

  clientApp.config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/restaurant-list.html',
          controller: 'RestaurantsListCtrl'
        })
        .when('/restaurants/:restaurantId', {
          templateUrl: 'partials/dishes-list.html',
          controller: 'DishesListCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

}());


