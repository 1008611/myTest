/**
 * Created by dz02 on 2016/7/21.
 */
define([], function () {
    var myApp = angular.module('myApp', ['ui.router']);
    myApp.controller('productController', [
        '$scope',
        '$cordovaAppVersion',
        '$cordovaCamera',
        '$cordovaDialogs',
        function ($scope, $cordovaAppVersion,$cordovaCamera,$cordovaDialogs) {
            console.log($cordovaDialogs);
            UMengSharePlugin.init(function () {
                console.log('UMengShare init success');
            });

            $scope.shareSDK = function () {

                alert("123");
                UMengSharePlugin.share('内容','标题','http://www.baidu.com','http://wwww.example.com/logo.png', function(){
                    console.log('分享成功');
            }, function(){
                console.log('分享失败');
            });




            }


        }]);
})