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
    'ngRoute',
//    'ngSanitize',
//    'ngTouch'
    'ui.bootstrap'
  ])
  .value("zidong",   "/api/as/")
  .value("shoudong", "/api/ac/")
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/ticket/list', {
        templateUrl: 'views/ticket/list.html',
        controller: 'TicketlistCtrl',
        controllerAs: 'ticketlist'
      })


      .when('/view/list', {
        templateUrl: 'views/view/list.html',
        controller: 'ViewlistCtrl',
        controllerAs: 'viewlist',
        resolve:{
            theme : function(common){
                return common.theme;
            },
            list : function(view){
                return view.list();
            },
            start : function(view){
                return view.start();
            },
            stop : function(view){
                return view.stop();
            }
        }
      })
      .when('/view/create', {
        templateUrl: 'views/view/info.html',
        controller: 'ViewcreateCtrl',
        controllerAs: 'viewcreate',
        resolve:{
            theme : function(common){
                return common.theme;
            },
            create : function(view){
                return view.create();
            }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  //拦截器
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInjector');
  });
