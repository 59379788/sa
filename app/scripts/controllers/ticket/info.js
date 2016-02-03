'use strict';


angular.module('saApp').controller('TicketinfoCtrl', 
	function ($scope, type, view, info, edit, $routeParams, getDateObj, getDate) {

	$scope.navigation = [
		{title : "门票"},
		{title : "列表"},
		{title : type === 'edit' ? "编辑票种信息" : "查看票种信息"}
	];

	var code =  $routeParams.typecode;

	$scope.btnhide = type === 'edit' ? true : false;

	$scope.obj = {};
	$scope.today = function() {
        //$scope.dt1 = new Date();
    };
    $scope.today();
    
    $scope.open1 = function($event) {
        $scope.status1.opened = true;
    }; 

    $scope.status1 = {
        opened: false
    };

    /* 景区列表
     * ========================================= */
    view().then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
            $scope.viewarr = res.data;
            $scope.obj.view = res.data[0].code;
        }
        else
        {
            alert("景区加载失败");
        }
    });

    /* 票种信息
     * ========================================= */
    info.get({code : code}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert("获取数据失败");
            return;
        }

        //res.data.period = getDateObj(res.data.period);

        $scope.dt1 = getDateObj(res.data.period);

        //alert(res.data.period);

        //console.log(res.data.period);
        
        //res.data.period = new Date();

        $scope.obj = res.data;
        

        //console.log($scope.obj);
    });
    

    $scope.gogo = function(){

        $scope.obj.period = getDate($scope.dt1)

    	console.log($scope.obj);

        edit.save($scope.obj, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("修改失败");
            }
            else
            {
                alert("修改成功");
            }

            //$scope.objs = res.data.results;

        });

    };

});
