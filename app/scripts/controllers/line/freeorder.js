'use strict';


angular.module('saApp').controller('LinefreeorderCtrl', 
	function ($scope, list, $routeParams, cancel) {

	var code =  $routeParams.linecode;
	
	$scope.navigation = [
		{title : "线路"},
		{title : "公益游"},
		{title : "订单"}
	];

	$scope.searchform = {};

	$scope.obj = {};

	var para = angular.extend($scope.searchform, {code : code});

	$scope.load = function(){
		list.get(para, function(res){

	     	console.log(res);

	     	if(res.errcode !== 0)
	     	{
	     		alert("数据获取失败");
	     		return;
	     	}

	     	$scope.objs = res.data;

	    });
    };

    $scope.load();

    /* 取消
     * ========================================= */
    $scope.cancel = function(code, aid, uid){
        
        if (confirm("取消后不能恢复，确定要取消吗 ？ ")) {
            cancel.get({code:code, aid : aid, uid : uid}, function(res){
            	console.log(res);
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("取消失败");
                }
            });
        }
    };

});
