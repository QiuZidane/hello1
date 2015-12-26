cordova.define("helloCordovaPlugin.tests", function(require, exports, module) { 
//在describe外定义的变量在所有describe都可以用，是全局变量
//在describe内定义的变量在所有it都可以用


function sayaloha(){
    myPlugin.sayHello("Hello CTP",
                      "This is sayHello().",
                      "OK",
                      function(){}, 
                      function(){}
    );          
};

// 下面开始是自动测试案例
exports.defineAutoTests = function() {

  var btn;
  var times = 0;

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
  };

  function helloErrorCallBack(){
    alert('call back error!');                  
  }; 


  var foo = {    
    bar : "2345",
    sayhi : function(){
        console.log('>>>calls hello()');
        hello();
    },
    setBar: function(value) {
       console.log('>>calling setBar');
       this.bar = value;  
    }
  };  

  // 自动化测试集合
  describe('hello alert test', function () {  
    // var timerCallback;     
    beforeEach(function() {
      // 跟踪多个函数
      spyOn(foo, 'sayhi').and.callThrough();
      spyOn(foo, 'setBar').and.callThrough();
      times++;
      console.log('beforeEach:运行第'+times+'个测试');
      // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; //设置异步执行默认延时时间为10秒，超过会报错退出。
      // timerCallback = jasmine.createSpy("timerCallback");
      // spyOn(foo, 'sayhi').and.callThrough();  // .and.callThrough();在获取spy时调用实际函数(这里包括回调)
      // foo.sayhi();      // 这句会在每个it都运行一次，但要注意的是，回调只有第一次获取say时才会调用，后面没有调用回调，只弹出框了      
    });

    afterEach(function() {
      foo.sayhi.calls.reset();  //重置Spy的所有追踪数据
      foo.setBar.calls.reset();
      // calls：对于被Spy的函数的调用，都可以在calls属性中跟踪。
      // .calls.any() : 被Spy的函数一旦被调用过，则返回true，否则为false；
      // .calls.count() : 返回被Spy的函数的被调用次数；
      // .calls.argsFor(index) : 返回被Spy的函数的调用参数，以index来指定参数；
      // .calls.allArgs() :返回被Spy的函数的所有调用参数；
      // .calls.all() : 返回calls的上下文，这将返回当前calls的整个实例数据；
      // .calls.mostRecent() : 返回calls中追踪的最近一次的请求数据；
      // .calls.first() : 返回calls中追踪的第一次请求的数据；
      // .object : 当调用all()，mostRecent()，first()方法时，返回对象的object属性返回的是当前上下文对象；
      // .calls.reset() : 重置Spy的所有追踪数据；
      
    });
    
    it("测试方法调用情况", function() { 
      foo.sayhi();
      expect(foo.sayhi).toHaveBeenCalled(); 
    });    


    it("异步测试案例1", function(done) {
        foo.sayhi();  // 回调会将btn设置为"cancel"      
        expect(foo.sayhi).toHaveBeenCalled(); 
        setTimeout(function() {  
            console.log('TimeOut!');
            expect(btn).toEqual("cancel"); 
            done();  // 放在这里的话，异步立刻结束，后面的it会等待Timeout运行完毕才运行                        
        }, 2000); 
        // done()   // 放在这里的话，后面的it不会等待Timeout
    });        

    it("spy.call测试:foo.setBar", function(){
      foo.setBar(1234);
      var callContext = foo.setBar.calls.all();
      console.log(callContext);
      expect(foo.bar).toEqual(1234);
    });

    it("调foo.setBar用次数=1", function() {     //如果不在it内部调用一次foo.sayhi，则该it的调用次数是0
      expect(foo.setBar.calls.count()).toEqual(1);
    });

    it("foo.setBar;调用次数=2", function() {     
      foo.setBar(1);
      foo.setBar(2);     
      expect(foo.setBar.calls.count()).toEqual(2);
    });    

    it("foo.sayhi调用时的参数=？", function() {      
      expect(foo.sayhi.calls.argsFor(1)).toEqual([]);
    });    

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
      sayaloha();
      // clearLog();     
    }, "sayhello");

};

});
