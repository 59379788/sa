'use strict';

/**
 * @ngdoc service
 * @name saApp.line
 * @description
 * # line
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('view', function ($resource, zidong, $q, $http) {
    
    //查询景区列表
    var list = zidong + "tc/view/adminList";

    //新建景区
    var create = zidong + "";

    //修改景区信息
    var edit = zidong + "";

    //删除景区
    var del = zidong + "";

    //启用
    var start = zidong + "tc/view/adminStart";

    //停用
    var stop = zidong + "tc/view/adminStop";
    
    // Public API here
    return {
    	list : function(){
    		console.log(list);
    		return $resource(list, {}, {});
    	},
    	create : function(){
    		return $resource(create, {}, {});
    	},
    	edit : function(){
    		return $resource(edit, {}, {});
    	},
    	del : function(){
    		return $resource(del, {}, {});
    	},
    	start : function(){
    		return $resource(start, {}, {});
    	},
      	stop : function(){
    		return $resource(stop, {}, {});
    	}
    };

  });
