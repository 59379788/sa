'use strict';


angular.module('saApp').controller('LinefreeorderCtrl', function ($scope, list) {

	
	$scope.navigation = [
		{title : "线路"},
		{title : "公益游"},
		{title : "订单"}
	];

	$scope.obj = {};
	


	list.get({}, function(res){

     	console.log(res);

     	if(res.errcode !== 0)
     	{
     		alert("数据获取失败");
     		return;
     	}

     	$scope.objs = res.data.results;
        $scope.bigTotalItems = res.data.totalRecord;

    });



});
