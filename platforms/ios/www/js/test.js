console.log("====  begin to call test.js ====")
var button1 = document.getElementById('button1');
if(button1) {
    button1.addEventListener('click',hello,false);
}
var button2 = document.getElementById('button2');
if(button2) {
    button2.addEventListener('click',getOsInfo_osVersion,false);
}
function hello(){
    myPlugin.sayHello("Hello CTP",
                      "This is sayHello().",
                      "OK",
                      function(param){ 
                                         alert('call back success!');
                                         console.log(param.para0);
                                         alert('clickbutton='+param.buttonIndex);
                                         alert(param.para1+" "+param.para2);
                        },
                      function(){ alert('call back error!');}
    );     
    // navigator.helloCordovaPlugin1.sayHello(....)   
}

function getOsInfo_osVersion(){
    myPlugin.getOsVersion(successAlert,errorAlert);
}
function successAlert(param) {    
    alert(param.osName+" "+param.osVersion);
}
function errorAlert(param) {    
    alert(param.errorCode);
}







// document.addEventListener("DOMContentLoaded",function(){
//     alert("We really do think that you are the best.")
// },false);



