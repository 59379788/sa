'use strict';

/**
 * @ngdoc service
 * @name saApp.line
 * @description
 * # line
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('order', function ($resource, zidong, shoudong, $q, $http) {

  	//公益游订单列表
    var freelist = zidong + "ac/wealfareorder/adminlist";

    //启用公益游订单
    //var freestart = shoudong + "ac/wealfareService/adminadd";

    //取消公益游订单
    var freecancel = shoudong + "ac/wealfareService/admincancel";

    
    //半价游订单列表
    var halflist = zidong + "tc/half/orderlist";


    

    

    // Public API here
    return {

    	flist : function(){
            return $resource(freelist, {}, {});
        },
        fcancel : function(){
        	return $resource(freecancel, {}, {});
        },
        hlist : function(){
            return $resource(halflist, {}, {});
        }
      
    };

  });
