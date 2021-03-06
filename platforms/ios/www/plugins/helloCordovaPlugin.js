cordova.define(
    "cordova-plugin-helloCordovaPlugin.helloCordovaPlugin", //插件的模块编号:唯一即可,随意定    
    function(require, exports, module) {

        var exec = require('cordova/exec');
        var platform = require('cordova/platform');

        module.exports = {

             /**
             * 在程序中打开一个对话框，显示相应信息
             * @param {String} title  对话框的标题，默认值为"Notification"
             * @param {String} message 对话框的信息，默认值为"Hello Cordova."
             * @param {String} buttonLabel 对话框按钮的文本，默认值为"Confirm"
             * @param {Function} callback 调用完毕后的js回调方法
             */
             sayHello: function(title, message, button, callbackONsuccess, callbackONerror) {
                var _title = (title || "Notification");
                var _message = (message || "Hello Cordova.");
                var _button = (button || "Confirm");
                exec(callbackONsuccess, callbackONerror, "myFirstPlugin","iosFunc_sayHello",[_title, _message, _button]);
             },

             /**
             * 在程序中打开一个对话框，显示相应信息
             * @param {String} prefix  为获取到的deviceId添加一个前缀，默认为"CTP-"
             * @param {Function} callback 调用完毕后的js回调方法
             */
             getDeviceId: function(prefix) {
                var _prefix = (prefix || "CTP-");
                exec(callback, null, "myFirstPlugin", "iosFunc_getDeviceId", [_prefix]);
             },

             /**
             * 获取native端的systemVersion          
             * @param {Function} callbackONsuccess 调用成功后的js回调方法
             * @param {Function} callbackONerror   调用失败后的js回调方法
             */
             getOsVersion: function(callbackONsuccess, callbackONerror){
                exec(callbackONsuccess, callbackONerror,"myFirstPlugin","iosFunc_getOsVersion",null);
             }
             
        };
    });