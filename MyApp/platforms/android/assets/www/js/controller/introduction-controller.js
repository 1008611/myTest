/**
 * Created by dz02 on 2016/7/21.
 */
define([],function(){
    var myApp = angular.module('myApp',['ui.router']);
    myApp.controller('introductionController',[
        '$scope',
        '$cordovaDialogs',
        '$cordovaActionSheet',
        '$cordovaAppVersion',
        '$cordovaBadge',
        '$cordovaCapture',
        '$cordovaDatePicker',
        function($scope,$cordovaDialogs,$cordovaActionSheet,$cordovaAppVersion,$cordovaBadge,$cordovaCapture,$cordovaDatePicker) {

            var options = {
                title: 'What do you want with this image?',
                buttonLabels: ['Share via Facebook', 'Share via Twitter'],
                addCancelButtonWithLabel: 'Cancel',
                androidEnableCancelButton : true,
                winphoneEnableCancelButton : true,
                addDestructiveButtonWithLabel : 'Delete it'
            };


            var androidConfig = {
                "senderID": "replace_with_sender_id",
            };

            $scope.showD= function () {
            //$cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
            //    .then(function(result) {
            //        var input = result.input1;
            //        // no button = 0, 'OK' = 1, 'Cancel' = 2
            //        var btnIndex = result.buttonIndex;
            //    });

            //    $cordovaActionSheet.show(options)
            //        .then(function(btnIndex) {
            //            var index = btnIndex;
            //        });

                //$cordovaAppVersion.getVersionNumber().then(function (version) {
                //    var appVersion = version;
                //    alert(appVersion);
                //
                //});

                //$cordovaDatePicker.show(options2).then(function(date){
                //    alert(date);
                //});

                $cordovaSplashscreen.show();

        }

    }]);
})