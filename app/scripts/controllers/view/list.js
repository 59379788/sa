'use strict';


angular.module('saApp').controller('ViewlistCtrl', 
	function ($scope, $location, list, theme, start, stop, ITEM_PER_PAGE, paixu) {

	$scope.navigation = [
		{title : "景区"},
		{title : "列表"}
	];

	$scope.searchform = {};

	/* 主题
     * ========================================= */
	theme().then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
        	$scope.themearr = res.data;
        }
        else
        {
            alert("主题加载失败");
        }
    });
    
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

    	$location.path("/view/create");

    };

    /* 启用
     * ========================================= */
    $scope.start = function(code){
        
        if (confirm("启用该景区后将不能编辑，确定要启用吗 ？ ")) {
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
        
        if (confirm("停用该景区后将不能卖票，确定要停用吗 ？ ")) {
            stop.get({code:code}, function(res){
                if(res.errcode === 0){
                    $scope.load();
                }
                else{
                    alert("停用失败");
                }
            });
        }
    };


    /* 排序
     * ========================================= */
    $scope.asort = function(code, asort){

        paixu.get({code:code, asort:asort}, function(res){

            console.log(res);
            

            if(res.errcode === 0){
                $scope.load();
            }
            else{
                alert("停用失败");
            }
        });

    };


});
