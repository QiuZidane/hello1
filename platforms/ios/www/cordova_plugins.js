cordova.define('cordova/plugin_list', function(require, exports, module) {
    //在 module.exports = [];中添加该插件的信息
    //其中的id属性要与定义Plugin的js中define的一致。
    module.exports = [
        {
            "file":"plugins/helloCordovaPlugin.js",
            "id":"cordova-plugin-helloCordovaPlugin.helloCordovaPlugin", // 插件的模块编号
            "merges":["myPlugin"] // 这句定义了myPlugin为插件对象变量,myPlugin.sayHello(...)即可调用插件方法
            // "merges":["navigator.myPlugin"]  //---->也可以加为已有对象的属性
        }
    ];
    module.exports.metadata = 
    // TOP OF METADATA
    {
        "cordova-plugin-helloCordovaPlugin" : "1.0.2"  //这里可以定义版本号
    }
    // BOTTOM OF METADATA
});