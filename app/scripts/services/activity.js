'use strict';

/**
 * @ngdoc service
 * @name saApp.line
 * @description
 * # line
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('activity', function ($resource, zidong) {

  	//半价游列表
    var halflist = zidong + "tc/half/list";

    //新建半价游
    var halfcreate = zidong + "tc/half/create";

    //启用半价游
    var halfstart = zidong + "tc/half/start";

    //停用半价游
    var halfstop = zidong + "tc/half/stop";

    //半价游信息
    var halfinfo = zidong + "tc/half/info";

    //编辑半价游信息
    var halfedit = zidong + "tc/half/edit";
    
    

    // Public API here
    return {

        half : {
          
            title : "",
            type : "t",
            minus : "0",
            subsidy : "0",
            price : "0",
            code : ""
          
        },
    	halflist : function(){
            return $resource(halflist, {}, {});
        },
        halfcreate : function(){
        	return $resource(halfcreate, {}, {});
        },
        halfstart : function(){
        	return $resource(halfstart, {}, {});
        },
        halfstop : function(){
        	return $resource(halfstop, {}, {});
        },
        halfinfo : function(){
            return $resource(halfinfo, {}, {});
        },
        halfedit : function(){
            return $resource(halfedit, {}, {});
        }
      
    };

  });
