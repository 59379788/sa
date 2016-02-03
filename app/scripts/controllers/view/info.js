'use strict';


angular.module('saApp').controller('ViewinfoCtrl', 
	function ($scope, type, info, $routeParams, FileUploader, edit) {

	
	$scope.navigation = [
		{title : "景区"},
		{title : "列表"},
		{title : type === 'edit' ? "编辑景区信息" : "查看景区信息"}
	];

	var code =  $routeParams.code;

	$scope.btnhide = type === 'edit' ? true : false;

	$scope.obj = {};


	var uploader1 = $scope.uploader1 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader1.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader1.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.obj.logo = response.savename;
    };

    var uploader2 = $scope.uploader2 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader2.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader2.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.obj.top_img = response.savename;
    };


	/* 景区信息
     * ========================================= */
    info.get({code : code}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert("获取数据失败");
            return;
        }

        $scope.obj = res.data;
        $scope.obj.city = $scope.obj.city + "";
        
    });
    

    $scope.gogo = function(){

     //    $scope.obj.period = getDate($scope.dt1)

    	// console.log($scope.obj);

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
