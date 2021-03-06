/**
 * Created by dz02 on 2016/7/21.
 */
define(['app'], function (myApp) {
    var myApp = angular.module('myApp', ['ui.router']);
    myApp.controller('centerController', ['$scope', function ($scope) {


        $scope.takePic = function () {
            navigator.camera.getPicture(onLoadImageSuccess, onLoadImageFail, {destinationType: Camera.DestinationType.DATA_URL});

        }

        //拍照成功后回调
        function onLoadImageSuccess(imageURI) {
            //这里的图片经过了base64编码
            var src = "data:image/jpeg;base64," + imageURI;
            $("#getImage").attr("src", src);
            $("#getImage").show();
        }
        //所有获取图片失败都回调此函数
        function onLoadImageFail(message) {
            navigator.notification.alert("拍照失败，原因：" + message, null, "警告");
        }
        $scope.loadImageLocal = function() {
            //获取本地图片并显示在屏幕
            navigator.camera.getPicture(onLoadImageLocalSuccess, onLoadImageFail, {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
        }
        //本地图片选择成功后回调此函数
        function onLoadImageLocalSuccess(imageURI) {
            $("#getImageLocal").attr("src", imageURI);
            $("#getImageLocal").show();
        }
        $scope.loadImageUpload = function() {
            //拍照上传并显示在屏幕
            navigator.camera.getPicture(onLoadImageUploadSuccess, onLoadImageFail, {
                destinationType: Camera.DestinationType.FILE_URI
            });
        }
        //图片拍照成功后回调此函数
        function onLoadImageUploadSuccess(imageURI) {
            //此处执行文件上传的操作，上传成功后执行下面代码
            var options = new FileUploadOptions(); //文件参数选项
            options.fileKey = "file";//向服务端传递的file参数的parameter name
            options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);//文件名
            options.mimeType = "image/jpeg";//文件格式，默认为image/jpeg
            var ft = new FileTransfer();//文件上传类
            ft.onprogress = function (progressEvt) {//显示上传进度条
                if (progressEvt.lengthComputable) {
                    navigator.notification.progressValue(Math.round(( progressEvt.loaded / progressEvt.total ) * 100));
                }
            }
            navigator.notification.progressStart("提醒", "当前上传进度");
            ft.upload(imageURI, encodeURI('http://192.168.0.32:8888/app/upload.jfinal'), function () {
                navigator.notification.progressStop();//停止进度条
                $("#getImageUpload").attr("src", imageURI);
                $("#getImageUpload").show();
                navigator.notification.alert("文件上传成功！", null, "提醒");
            }, null, options);
        }

    }]);
})