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

    //景区简表
    var slist = zidong + "tc/view/adminViewForTicketList";

    //新建景区
    var create = zidong + "tc/view/create";

    //修改景区信息
    var edit = zidong + "tc/view/edit";

    //删除景区
    var del = zidong + "";

    //景区信息
    var info = zidong + "tc/view/adminInfo";

    //启用
    var start = zidong + "tc/view/adminStart";

    //停用
    var stop = zidong + "tc/view/adminStop";
    
    // Public API here
    return {
    	list : function(){
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
    	},
    	slist : function(obj){
    		var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行  
			$http({method: 'GET', params: obj, url: slist}).  
			success(function(data, status, headers, config) {  
				deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了  
			}).  
			error(function(data, status, headers, config) {  
				deferred.reject(data);   // 声明执行失败，即服务器返回错误  
			});  
			return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API 
	    },
        info : function(){
            return $resource(info, {}, {});
        }
    };

  });
