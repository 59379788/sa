'use strict';


angular.module('saApp').controller('TicketlistCtrl', 
	function ($scope, $location, list, view, start, stop, startapp, stopapp) {

	$scope.navigation = [
		{title : "门票"},
		{title : "列表"}
	];

	$scope.searchform = {};


	/* 主题
     * ========================================= */
	view().then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert("景区加载失败");
        }
    });
    
    $scope.load = function () {

        console.log($scope.searchform);
        
        list.save($scope.searchform, function(res){

            /* 门票存储结构
             * ========================================= */
            var tkt = new Object();
            var restkt = new Array();

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	//$scope.objs = res.data;
            //$scope.bigTotalItems = res.data.totalRecord;


            //用景区编号作为存储结构的属性，值是数组
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tt = res.data[i];
                var v = tt.view;

                if(!tkt.hasOwnProperty(v))
                {
                    tkt[v] = new Object();
                    tkt[v].ticketarr = new Array();
                    tkt[v].viewname = tt.view_name;
                }
                tkt[v].ticketarr.push(tt);
            }

            for(var key in tkt)
            {
                var o = tkt[key];
                restkt.push(o);
            }


            console.log("------------");
            console.log(restkt);
            console.log("------------");

            $scope.objs = restkt;

        });

    };
    $scope.load();


    /* 新建
     * ========================================= */
    $scope.create = function(){

    	$location.path("/ticket/create");

    };

    /* 启用
     * ========================================= */
    $scope.start = function(code){
        
        if (confirm("启用该票种后将不能编辑，确定要启用吗 ？ ")) {
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
        
        if (confirm("停用该票种后将不能卖票，确定要停用吗 ？ ")) {
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


    /* 启用app
     * ========================================= */
    $scope.startapp = function(code){
        
        if (confirm("启用该票种后将不能编辑，确定要启用吗 ？ ")) {

            startapp.get({code:code}, function(res){
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
    
    /* 停用app
     * ========================================= */
    $scope.stopapp = function(code){
        
        if (confirm("停用该票种后将不能卖票，确定要停用吗 ？ ")) {

            stopapp.get({code:code}, function(res){
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
