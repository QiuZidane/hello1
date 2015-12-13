cordova.define("helloCordovaPlugin.tests", function(require, exports, module) { 
//在describe外定义的变量在所有describe都可以用，是全局变量
//在describe内定义的变量在所有it都可以用

// 下面开始是自动测试案例
exports.defineAutoTests = function() {
  describe('hello alert test', function () {  

    var btn;

    function hello(){
        myPlugin.sayHello("Hello CTP",
                          "This is sayHello().",
                          "OK",
                          helloSuccessCallBack,
                          helloErrorCallBack
        );
        btn = "cancel"
    };



    function helloSuccessCallBack(param){
      btn = "cancel";//param.buttonIndex;   
      // alert(btn);      
      //alert('call back success!'+' \n'+'clickbutton='+param.buttonIndex+" \n"+param.para1+" "+param.para2);
      // console.log(param.para0);                       
    };

    function helloErrorCallBack(){
      alert('call back error!');                  
    }; 

      
    beforeEach(function() {

      foo = {
        sayhi : function(){  
          return hello();
        }        
      };        
      spyOn(foo, 'sayhi').and.callThrough();  // .and.callThrough();在获取spy时调用实际函数(这里包括回调)
      foo.sayhi();      // 这句会在每个it都运行一次，但要注意的是，回调只有第一次获取say时才会调用，后面没有调用回调，只弹出框了      
    });

    // afterEach(function() {
    //   foo.sayhi.and.stub();
    //   foo.sayhi.calls.reset();

    // });
    

    it("alert view would show", function() {  
      // expect(foo.sayhi).toHaveBeenCalled();
      // expect(foo.sayhi.calls.count()).toEqual(1);
      expect(btn).toEqual("cancel");
    });

    // it("调foo.sayhi用次数=1", function() {     //如果不在it内部调用一次foo.sayhi，则该it的调用次数是0
    //   expect(foo.sayhi.calls.count()).toEqual(1);
    // });

    // it("第一次调用时的参数=？", function() {      
    //   expect(foo.sayhi.calls.argsFor(1)).toEqual('OK');
    // });    

  });
};

// 下面开始是手工测试案例
exports.defineManualTests = function(contentEl, createActionButton) {
  var logMessage = function (message, color) {
        var log = document.getElementById('info');
        var logLine = document.createElement('div');
        if (color) {
            logLine.style.color = color;
        }
        logLine.innerHTML = message;
        log.appendChild(logLine);
    }

    var clearLog = function () {
        var log = document.getElementById('info');
        log.innerHTML = '';
    }

    var device_tests = '<h3>Press Say Hello button to say hello!</h3>' +
        '<div id="sayhello"></div>' +
        'Expected result: an alertview would appear and say hello to you 哈哈 ';

    contentEl.innerHTML = '<div id="info"></div>' + device_tests;

    createActionButton('Say Hello', function() {
      hello();
      // clearLog();
      // logMessage(JSON.stringify(window.device, null, '\t'));
    }, "sayhello");
};

});
