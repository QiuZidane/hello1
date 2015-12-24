EZHello = {
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
};
