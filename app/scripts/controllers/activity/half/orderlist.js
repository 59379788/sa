'use strict';


angular.module('saApp').controller('actHalfOrderListCtrl', 
	function ($scope, $location, list) {

	$scope.navigation = [
		{title : "活动"},
		{title : "半价游订单"}
	];

	$scope.searchform = {};
    
    /* 分页
     * ========================================= */
    // $scope.maxSize = 5;             //最多显示多少个按钮
    // $scope.bigCurrentPage = 1;      //当前页码
    // $scope.itemsPerPage = 7;        //每页显示几条
    
    // $scope.load = function () {
        
    //     var para = {
    //         pageNo:$scope.bigCurrentPage, 
    //         pageSize:$scope.itemsPerPage
    //     };

    //     para = angular.extend($scope.searchform, para);

    //     console.log(para);
        
    //     list.save(para, function(res){

    //      	console.log(res);

    //      	if(res.errcode !== 0)
    //      	{
    //      		alert("数据获取失败");
    //      		return;
    //      	}

    //      	$scope.objs = res.data.results;
    //         $scope.bigTotalItems = res.data.totalRecord;

    //     });

    // };
    // $scope.load();


    



});
