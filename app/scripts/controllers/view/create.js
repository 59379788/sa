'use strict';


angular.module('saApp').controller('ViewcreateCtrl', function ($scope, create, theme) {

	
	$scope.navigation = [
		{title : "景区"},
		{title : "列表"},
		{title : "新建景区"}
	];

	$scope.obj = {};

	$scope.obj.city = "1";

	/* 主题
     * ========================================= */
	theme().then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
        	$scope.themearr = res.data;
        	$scope.obj.theme = res.data[0].theme;
        }
        else
        {
            alert("主题加载失败");
        }
    });




});
