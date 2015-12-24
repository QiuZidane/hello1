cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    // 加载测试插件：
    {
        "file": "plugins/cordova-plugin-my/test/hello_tests.js",
        "id": "helloCordovaPlugin.tests"       
    }, 
    {
        "file": "plugins/cordova-plugin-device-tests/tests.js",
        "id": "cordova-plugin-device-tests.tests",
        "pluginId": "cordova-plugin-device-tests"
    },



    // 加载功能插件：
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {   //这个是我的
        "file": "plugins/cordova-plugin-my/helloCordovaPlugin.js",
        "id": "cordova-plugin-helloCordovaPlugin.helloCordovaPlugin",
        "clobbers": [
            "myPlugin"
        ]
    },    
    {
        "file": "plugins/cordova-plugin-test-framework/www/tests.js",
        "id": "cordova-plugin-test-framework.cdvtests",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
        "id": "cordova-plugin-test-framework.jasmine_helpers",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/medic.js",
        "id": "cordova-plugin-test-framework.medic",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/main.js",
        "id": "cordova-plugin-test-framework.main",
        "pluginId": "cordova-plugin-test-framework"
    },
    {
        "file": "plugins/cordova-plugin-audio-recorder-api/www/AudioRecorderAPI.js",
        "id": "cordova-plugin-audio-recorder-api.AudioRecorderAPI",
        "pluginId": "cordova-plugin-audio-recorder-api",
        "clobbers": [
            "window.plugins.audioRecorderAPI"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});