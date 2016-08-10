/**
 * Created by dz02 on 2016/7/21.
 */
define([],function(){
    var myApp = angular.module('myApp',['ui.router']);
    myApp.controller('relationController', function() {

        alert("123");

        UMengShare.init(function () {
            alert("2222");
            console.log('UMengShare init success');
        });


        UMengShare.share('内容','标题','http://www.baidu.com','http://wwww.example.com/logo.png', function(){
            alert("333");
            console.log('分享成功');
        }, function () {
            console.log('分享失败');
        });

    })

})