'use strict';

/**
 * @ngdoc service
 * @name saApp.ta
 * @description
 * # ta
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('ta', function ($resource, zidong, $q, $http) {

  	//旅行社列表
  	var list = zidong + "tc/ta/list ";


    
    
    

    // Public API here
    return {

    	
        list : function(){
            return $resource(list, {}, {});
        }

	 };

});
