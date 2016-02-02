'use strict';


angular.module('saApp').controller('actHalfOrderListCtrl', 
	function ($scope, $location, list, halflist, getDate) {

	$scope.navigation = [
		{title : "活动"},
		{title : "半价游订单"}
	];

	$scope.searchform = {};

    $scope.today = function() {
        $scope.dt1 = $scope.dt2 = new Date();
    };
    $scope.today();
    
    $scope.open1 = function($event) {
        $scope.status1.opened = true;
    }; 

    $scope.status1 = {
        opened: false
    };

    $scope.open2 = function($event) {
        $scope.status2.opened = true;
    }; 

    $scope.status2 = {
        opened: false
    };


    halflist.save({pageNo : 1, pageSize : 200}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert("数据获取失败");
            return;
        }

        $scope.halfarr = res.data.results;
    });
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7;        //每页显示几条

    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.dt1) + " 00:00:00",
            end_time : getDate($scope.dt2) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        list.save(para, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();


    



});
