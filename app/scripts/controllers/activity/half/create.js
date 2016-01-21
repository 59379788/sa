'use strict';


angular.module('saApp').controller('actHalfCreateCtrl', 
    function ($scope, create, model, list) {

	$scope.navigation = [
		{title : "活动"},
		{title : "半价游"},
		{title : "新建半价游产品"}
	];
	
	$scope.obj = model;

	list.get({}, function(res){

     	console.log(res);

     	if(res.errcode !== 0)
     	{
     		alert("数据获取失败");
     		return;
     	}

     	$scope.tkttypes = res.data;

    });


	/* 提交
     * ========================================= */
    $scope.gogo = function(){

        create.save($scope.obj, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("数据获取失败");
                return;
            }
            else(res.errcode == 0)
            {
                alert("添加成功");
                //$location.path("/ticket/edit/" + res.data);
            }
            //$scope.objs = res.data.results;

        });

    };





});
