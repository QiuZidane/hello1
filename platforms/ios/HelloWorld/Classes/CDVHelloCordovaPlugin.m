//
//  CDVHelloCordovaPlugin.m
//  HelloWorld
//
//  Created by QiuZidane on 15/11/29.
//
//

#import "CDVHelloCordovaPlugin.h"


//@interface CDVHelloCordovaPluginAlertView : UIAlertView {}
//
//@property (nonatomic,copy)NSString *callbackId;
//
//@end

@implementation CDVHelloCordovaPlugin

- (void) sayHello:(CDVInvokedUrlCommand *)command{
    NSLog(@"Call from Javascript: sayHello.");
    NSString *callbackId = command.callbackId;
    
    // 获取参数,与Plugin的变量匹配
    NSString *title = [command argumentAtIndex:0];
    NSString *message = [command argumentAtIndex:1];
    NSString *buttons = [command argumentAtIndex:2];

    
    CDVHelloCordovaPluginAlertView *alertView = [[CDVHelloCordovaPluginAlertView alloc]initWithTitle:title
                                                                                             message:message
                                                                                            delegate:self
                                                                                   cancelButtonTitle:nil
                                                                                   otherButtonTitles:buttons, nil];
    [alertView setCallbackId:callbackId];
    [alertView show];
    
}

- (void) getDeviceId:(CDVInvokedUrlCommand *)command{
    NSLog(@"Call from Javascript: getDevideId.");
}


- (void) alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex{
    if ([[alertView class] isSubclassOfClass:[CDVHelloCordovaPluginAlertView class]]) {
        //类型转换为CDVHelloCordovaPluginAlertView
        CDVHelloCordovaPluginAlertView *helloAlert = (CDVHelloCordovaPluginAlertView*) alertView;
        /**
         * 根据回调数据的不同，可以选择不同的CDVPluginResult构造方法，或者使用字典作为返回参数。
         * NSDictionary* info = @{@"buttonIndex":@(buttonIndex),
         *                               @"arg0":@"This is arg0.",
         *                               @"arg1":@"This is arg1."};
         * CDVPluginResult *result =
         *          [CDVPluginResult resultWithStatus:CDVCommandStatus_OK
         *                        messageAsDictionary:info]
         *
         *
         * 下面是使用int
         *
         */
        //CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:(int)(buttonIndex)];
        
        NSDictionary* dict = @{@"buttonIndex":@(buttonIndex),
                               @"arg0":@"This is arg0.",
                               @"arg1":@"This is arg1."};
        CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:dict];
        [self.commandDelegate sendPluginResult:result callbackId:helloAlert.callbackId];
        
    }
}
















@end
