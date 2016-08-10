/**
 * Created by dz02 on 2016/7/21.
 */
define(['app'],function(myApp){
    var myApp = angular.module('myApp');
    myApp.controller('indexController', ["$scope","$state",function($scope,$state) {
        $scope.name="test";

    }]);
})