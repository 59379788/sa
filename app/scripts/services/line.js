'use strict';

/**
 * @ngdoc service
 * @name saApp.line
 * @description
 * # line
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('line', function ($resource, zidong, $q, $http) {

  	//公益游列表
    var freelist = zidong + "ac/wealfare/adminlist";

    //新建公益游
    var freecreate = zidong + "ac/wealfare/admincreat";

    //启用公益游
    var freestart = zidong + "ac/wealfare/adminstart";

    //停用公益游
    var freestop = zidong + "ac/wealfare/adminstop";

    
    
    

    // Public API here
    return {

    	flist : function(){
            return $resource(freelist, {}, {});
        },
        fcreate : function(){
        	return $resource(freecreate, {}, {});
        },
        fstart : function(){
        	return $resource(freestart, {}, {});
        },
        fstop : function(){
        	return $resource(freestop, {}, {});
        }
      
    };

  });
