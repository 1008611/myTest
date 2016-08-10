(function(){
    define(['angular','uiRouter','ocLazyLoad','ngCordova','cordova'], function (angular) {
        'use strict';
        return angular.module('myApp', ['ui.router','oc.lazyLoad','ngCordova']);
    });
})();
