//
//  CDVHelloCordovaPlugin.m
//  HelloWorld
//
//  Created by QiuZidane on 15/11/29.
//
//

#import "UIKit/UIKit.h"
#import "CDVHelloCordovaPlugin.h"


//@interface CDVHelloCordovaPluginAlertView : UIAlertView {}
//
//@property (nonatomic,copy)NSString *callbackId;
//
//@end

@implementation CDVHelloCordovaPlugin

- (void) iosFunc_sayHello:(CDVInvokedUrlCommand *)command{
    
    //1.每个JS请求会生成一个callbackId(唯一)传给native，native处理完后把callbackId连同处理结果一起返回给JS端。
    //2.以callbackId为key，{success:successCallback, fail:failCallback}为value，把这个键值对保存在JS端的字典里，successCallback与failCallback不传给native，native返回结果时带上callbackId，JS端就可以根据callbackId找到回调方法。
    //3.每次JS请求发到native的数据包括：callbackId,service(插件名),action(native端方法),actionArgs(参数)。
    //4.callbackId,actionArgs保存在CDVInvokedUrlCommand里面
    NSString *callbackId = command.callbackId;  //---需要回传
    
    // 获取参数,与Plugin的变量匹配
    NSString *title = [command argumentAtIndex:0];
    NSString *message = [command argumentAtIndex:1];
    NSString *buttons = [command argumentAtIndex:2];

    _cdvView = [[CDVHelloCordovaPluginAlertView alloc]init];
    CDVHelloCordovaPluginAlertView *alertView = [[CDVHelloCordovaPluginAlertView alloc]initWithTitle:title
                                                                                             message:message
                                                                                            delegate:_cdvView
                                                                                   cancelButtonTitle:@"cancel"
                                                                                   otherButtonTitles:buttons, nil];

    _cdvView.hellodelegate = self;
    
    self.callbackId = callbackId;
   
    [alertView show];
    
}


- (void) iosFunc_sayHello_callBack{
    
    //NSLog(@"self.buttonIndex=%li",self.buttonIndex);
    
    // 拼装callback参数:
    // CDVPluginResult有倆参数：CDVCommandStatus和参数内容
    // CDVCommandStatus有多个数据字典CDVCommandStatus_ERROR/CDVCommandStatus_IO_EXCEPTION等几个状态是返回调用失败
    // 参数内容有多种组装方式，下面使用的是字典方式，还可以用NSString、NSData等等
    self.resultDict = @{@"buttonIndex":(self.buttonIndex==1?@"OK":@"cancle"),
                        @"para0":@"This is arg0.",
                        @"para1":@"This is arg1.",
                        @"para2":@"This is arg2."};
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK
                                            messageAsDictionary:self.resultDict];
    [self.commandDelegate sendPluginResult:result callbackId:self.callbackId];
    
}

- (void) iosFunc_getDeviceId:(CDVInvokedUrlCommand *)command{
    NSLog(@"Call from Javascript: getDevideId.");
}


- (void) iosFunc_getOsVersion:(CDVInvokedUrlCommand*)command{
    NSString *osName = [[UIDevice currentDevice] systemName];
    NSString *osVersion = [[UIDevice currentDevice] systemVersion];
    NSLog(@"osName = %@",osName);
    NSLog(@"osVersion = %@",osVersion);
    NSDictionary *dict = @{
                           @"osName":osName,
                           @"osVersion":osVersion,
                           @"errorCode":@"error....."
                           };
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:dict];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}
















@end
