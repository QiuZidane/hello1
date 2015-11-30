cordova.define('cordova/plugin_list', function(require, exports, module) {
    //在 module.exports = [];中添加该插件的信息
    //其中的id属性要与定义Plugin的js中define的一致。
    module.exports = [
        {
            "file":"plugins/helloCordovaPlugin.js",
            "id":"cordova-plugin-helloCordovaPlugin.helloCordovaPlugin", // 插件的模块编号
            "merges":["navigator.helloCordovaPlugin"];  
            // "pluginId":"cordova-plugin-helloCordovaPlugin",
            // "clobbers":[
            //     "helloCordovaPlugin"
            // ]

        }
    ];
    module.exports.metadata = 
    // TOP OF METADATA
    {
        "cordova-plugin-helloCordovaPlugin" : "0.0.1"  //这里可以定义版本号
    }
    // BOTTOM OF METADATA
});