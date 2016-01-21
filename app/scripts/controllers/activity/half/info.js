'use strict';


angular.module('saApp').controller('actHalfinfoCtrl', 
    function ($scope, info, edit, list, type, $routeParams) {

    $scope.navigation = [
        {title : "活动"},
        {title : "半价游"},
        {title : type === 'edit' ? "编辑半价产品信息" : "查看半价产品信息"}
    ];

    var code =  $routeParams.code;

    $scope.btnhide = type === 'edit' ? true : false;

    $scope.obj = {};
    

    list.get({}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert("数据获取失败");
            return;
        }

        $scope.tkttypes = res.data;

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

        $scope.obj = res.data;
        
    });
    

    $scope.gogo = function(){

        edit.save({id : code}, $scope.obj, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("修改失败");
                return;
            }
            else
            {
                alert("修改成功");
            }

            //$scope.objs = res.data.results;

        });

    };

});
