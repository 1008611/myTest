require.config({
    paths: {
        'jquery': '../lib/jquery.1.10.2',
        'angular': '../lib/angular/angular/angular',
        'uiRouter': '../lib/angular/angular-ui/angular-ui-router.min',
        'ocLazyLoad': '../lib/oclazyload/ocLazyLoad.require',
        'domReady': '../lib/requirejs/domReady',
        'ngCordova':'../lib/ngCordova/dist/ng-cordova',
        'cordova':'../cordova',
        'app': 'app'
    },
    shim: {
        'angular': {exports: 'angular'},
        'uiRouter': ['angular'],
        'ocLazyLoad': ['angular'],
        'ngCordova':['angular','cordova']
    },
    priority: [
        "angular"
    ],
    waitSeconds: 0
})

require(["angular","router"],function(angular){
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['myApp']);
    });
});

