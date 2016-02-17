'use strict';

/**
 * @ngdoc service
 * @name saApp.stb
 * @description
 * # stb
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('stb', function ($resource, zidong, $q, $http) {

  	//同业社列表
  	var list = zidong + "tc/stb/list";


    
    
    

    // Public API here
    return {

        list : function(){
            return $resource(list, {}, {});
        }

	 };

});
