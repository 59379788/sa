'use strict';


angular.module('saApp').controller('TicketcreateCtrl', 
    function ($scope, create, view, getDate, $location) {

	
	$scope.navigation = [
		{title : "门票"},
		{title : "列表"},
		{title : "新建票种"}
	];

	$scope.obj = {};
    $scope.dt1 = new Date();
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

    /* 提交
     * ========================================= */
    $scope.gogo = function(){

        $scope.obj.period = getDate($scope.dt1);

        console.log($scope.obj);

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
                $location.path("/ticket/edit/" + res.data);
            }
            //$scope.objs = res.data.results;

        });

    };




});
