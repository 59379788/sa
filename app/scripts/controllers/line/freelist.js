'use strict';


angular.module('saApp').controller('LinefreelistCtrl', 
	function ($scope, $location, list, start, stop, ITEM_PER_PAGE) {

	$scope.navigation = [
		{title : "线路"},
		{title : "公益游"}
	];

	$scope.searchform = {};
    
    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEM_PER_PAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
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


    /* 新建
     * ========================================= */
    $scope.create = function(){

    	$location.path("/line/freecreate");

    };

    /* 启用
     * ========================================= */
    $scope.start = function(code){
        
        if (confirm("启用该活动将不能编辑，确定要启用吗 ？ ")) {
            start.get({code:code}, function(res){
            	console.log(res);
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("启用失败");
                }
            });
        }
    };
    
    /* 停用
     * ========================================= */
    $scope.stop = function(code){
        
        if (confirm("停用该活动不能报名，确定要停用吗 ？ ")) {
            stop.get({code:code}, function(res){
                console.log(res);
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("停用失败");
                }
            });
        }
    };



});
