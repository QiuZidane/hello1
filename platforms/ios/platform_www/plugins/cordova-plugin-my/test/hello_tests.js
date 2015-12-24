cordova.define("helloCordovaPlugin.tests", function(require, exports, module) { 
//在describe外定义的变量在所有describe都可以用，是全局变量
//在describe内定义的变量在所有it都可以用

// 下面开始是自动测试案例
exports.defineAutoTests = function() {

  var btn;

  function hello(){
      myPlugin.sayHello("Hello CTP",
                        "This is sayHello().",
                        "OK",
                        helloSuccessCallBack, 
                        helloErrorCallBack
      );          
  };

  function helloSuccessCallBack(param){
    btn = param.buttonIndex;   
    // alert(btn);      
    //alert('call back success!'+' \n'+'clickbutton='+param.buttonIndex+" \n"+param.para1+" "+param.para2);
    // console.log(param.para0);                       
  };

  function helloErrorCallBack(){
    alert('call back error!');                  
  }; 

  var foo = {

    sayhi : function(){
        console.log('>>>calls hello()');
        hello();
    },
    setBar: function(value) {
       console.log('>>calling setBar');
       bar = value;  
    },   
    setA : function() {
      bar = 222;
    }
  };  

  describe('hello alert test', function () {  

    var timerCallback;      

    beforeEach(function() {
      spyOn(foo, 'sayhi').and.callThrough();
      foo.sayhi();
      console.log('>>>>>>beforeEach>>>>>>');
      // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; //设置异步执行默认延时时间为10秒，超过会报错退出。

      // timerCallback = jasmine.createSpy("timerCallback");

      // spyOn(foo, 'sayhi').and.callThrough();  // .and.callThrough();在获取spy时调用实际函数(这里包括回调)
      //foo.sayhi();      // 这句会在每个it都运行一次，但要注意的是，回调只有第一次获取say时才会调用，后面没有调用回调，只弹出框了      
    });

    afterEach(function() {
      // foo.sayhi.and.stub();
      foo.sayhi.calls.reset();  //重置Spy的所有追踪数据
      
    });
    
    it("tracks that the spy was called", function() { 
      expect(foo.sayhi).toHaveBeenCalled(); 
    });    
   
    // it("同步触发setTimeout", function() {
    //     setTimeout(function() {
    //         timerCallback();
    //     }, 100); 
    //     expect(timerCallback).not.toHaveBeenCalled(); 
    //     jasmine.clock().tick(101); 
    //     expect(timerCallback).toHaveBeenCalled();
    // });   

    it("异步测试1", function(done) {
        // foo.sayhi();  // 回调会将btn设置为"cancel"
        foo.ssshi();
        // expect(foo.ssshi).toHaveBeenCalled(); 
        setTimeout(function() {  
            console.log('TimeOut!');
            expect(btn).toEqual("cancel"); 
            done();  // 放在这里的话，异步立刻结束，后面的it会等待Timeout运行完毕才运行                        
        }, 2000); 
        // done()   // 放在这里的话，后面的it不会等待Timeout
    });

    it("异步测试2", function(done) {
        setTimeout(function() {
          console.log('111');
          done();
        },1000);
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
