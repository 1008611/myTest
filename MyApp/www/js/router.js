/**
 * Created by dz02 on 2016/7/22.
 */
define(['app'], function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/index.html',
                resolve:["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:["js/controller/index-controller.js"]
                    })
                }]
            })
            .state('introduction', {
                url: '/introduction',
                templateUrl: 'views/introduction.html',
                resolve:["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:["js/controller/introduction-controller.js"]
                    })
                }]
            })
            .state('product', {
                url: '/product',
                templateUrl: 'views/product.html',
                resolve:["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:["js/controller/product-controller.js"]
                    })
                }]
            })
            .state('relation', {
                url: '/relation',
                templateUrl: 'views/relation.html',
                resolve:["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:["js/controller/relation-controller.js"]
                    })
                }]
            })
            .state('center', {
                url: '/center',
                templateUrl: 'views/center.html',
                resolve:["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files:["js/controller/center-controller.js"]
                    })
                }]
            })
    }).run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
            console.log("app run !");
    }])
})