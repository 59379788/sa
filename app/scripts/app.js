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
      //票种列表
      .when('/ticket/list', {
        templateUrl: 'views/ticket/list.html',
        controller: 'TicketlistCtrl',
        controllerAs: 'ticketlist',
        resolve:{
            view : function(view){
                return view.slist;
            },
            list : function(ticket){
                return ticket.list();
            },
            start : function(ticket){
                return ticket.start();
            },
            stop : function(ticket){
                return ticket.stop();
            }
        }
      })
      //新建票种
      .when('/ticket/create', {
        templateUrl: 'views/ticket/info.html',
        controller: 'TicketcreateCtrl',
        controllerAs: 'ticketcreate',
        resolve:{
            view : function(view){
                return view.slist;
            },
            create : function(ticket){
                return ticket.create();
            }
        }
      })

      //景区列表
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
      //新建景区
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


      //公益游列表
      .when('/line/freelist', {
        templateUrl: 'views/line/freelist.html',
        controller: 'LinefreelistCtrl',
        controllerAs: 'linefreelist',
        resolve:{
            
            list : function(line){
                return line.flist();
            },
            start : function(line){
                return line.fstart();
            },
            stop : function(line){
                return line.fstop();
            }
        }
      })

      //新建公益游
      .when('/line/freecreate', {
        templateUrl: 'views/line/freeinfo.html',
        controller: 'LinefreecreateCtrl',
        controllerAs: 'linefreecreate',
        resolve:{
            create : function(line){
                return line.fcreate();
            }
        }
      })

      //查看公益游订单
      .when('/line/freeorder/:linecode', {
        templateUrl: 'views/line/freeorder.html',
        controller: 'LinefreeorderCtrl',
        controllerAs: 'linefreeorder',
        resolve:{
            list : function(order){
                return order.flist();
            },
            cancel : function(order){
                return order.fcancel();
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
