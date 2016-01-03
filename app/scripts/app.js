'use strict';

/**
 * @ngdoc overview
 * @name saApp
 * @description
 * # saApp
 *
 * Main module of the application.
 */
angular
  .module('saApp', [
//    'ngAnimate',
//    'ngCookies',
    'ngResource',
    'ngRoute'
//    'ngSanitize',
//    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
