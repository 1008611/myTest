cordova.define("cordova-umeng-share.UMengShare", function(require, exports, module) {
module.exports = {
    init: function (successHandler, errorHandler) {
        cordova.exec(successHandler, errorHandler, "UMengSharePlugin", "init", []);
    },
    share:function(text, title, url, successHandler, errorHandler){
		cordova.exec(successHandler, errorHandler, "UMengSharePlugin", "share", [text, title, url]);
	}
};
});
