'use strict';


angular.module('saApp').controller('ViewcreateCtrl', function ($scope, create, theme, FileUploader) {

	
	$scope.navigation = [
		{title : "景区"},
		{title : "列表"},
		{title : "新建景区"}
	];

    $scope.btnhide = true;

	$scope.obj = {};

	$scope.obj.city = "1";

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

	/* 主题
     * ========================================= */
	theme().then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
        	$scope.themearr = res.data;
        //	$scope.obj.theme = res.data[0].theme;
        }
        else
        {
            alert("主题加载失败");
        }
    });

    /* 提交
     * ========================================= */
    $scope.gogo = function(){

        create.save($scope.obj, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("数据获取失败");
            }
            else
            {
                alert("添加成功");
            }

        });

    };



});
