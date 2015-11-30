console.log("====  begin to call test.js ====")
function clickFunc(){
    alert('这里是iOS工作室');
}
var button1 = document.getElementById('button1');
if(button1) {
    button1.addEventListener('click',clickFunc,false);
}

// document.addEventListener("DOMContentLoaded",function(){
//     alert("We really do think that you are the best.")
// },false);



// navigator.helloCordovaPlugin.sayHello("Hello CTP",
//                                       "This is sayHello().",
//                                       "OK",
//                                       function(){ alert('call back success!');});