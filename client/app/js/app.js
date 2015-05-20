(function(){
  'use strict';

  /* App Module */
  var clientApp = angular.module('clientApp', [
    'ngRoute',
    'ui.bootstrap',
    'onLineFoodOrderingAnimation',
    'onLineFoodOrderingControllers',
    'onLineFoodOrderingServices'

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


