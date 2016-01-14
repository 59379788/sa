'use strict';


angular.module('saApp').controller('TicketcreateCtrl', function ($scope, create, view) {

	
	$scope.navigation = [
		{title : "门票"},
		{title : "列表"},
		{title : "新建票种"}
	];

	$scope.obj = {};


	/* 主题
     * ========================================= */
	view().then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
        	$scope.themearr = res.data;
        	$scope.obj.view = res.data[0].code;
        }
        else
        {
            alert("景区加载失败");
        }
    });




});
