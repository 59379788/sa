'use strict';


angular.module('saApp').controller('SalelistCtrl', 
	function ($scope, view, tkttypelist, talist, stblist, salelist, ITEM_PER_PAGE, getDate) {

	$scope.navigation = [
		{title : "门票"},
		{title : "使用情况"}
	];

	$scope.searchform = {};
    $scope.searchform.usetype = "1";

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


	/* 景区
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

    /* 旅行社列表
     * ========================================= */
    talist.save({pageSize : 200}, function(res){
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.taarr = res.data.results;
        }
        else
        {
            alert("票种加载失败");
        }
        
    });


    $scope.viewchange = function(view){

        tkttypelist.save({"view" : view}, function(res){

            if(res.errcode === 0)
            {
                $scope.tkttypearr = res.data;
            }
            else
            {
                alert("票种加载失败");
            }
            
        });

    };

    $scope.tachange = function(ta){

        stblist.save({"ta" : ta, "pageSize" : 200}, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.stbarr = res.data.results;
            }
            else
            {
                alert("票种加载失败");
            }
            
        });

    };


    /* 分页
     * ========================================= */
    $scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEM_PER_PAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.dt1) + " 00:00:00",
            end_time : getDate($scope.dt2) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        salelist.save(para, function(res){

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
