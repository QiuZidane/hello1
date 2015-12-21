//
//  CDVHelloCordovaPlugin.h
//  HelloWorld
//
//  Created by QiuZidane on 15/11/29.
//
//

#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>
#import "CDVHelloCordovaPluginAlertView.h"
#import "TEST.h"

@interface CDVHelloCordovaPlugin : CDVPlugin<UIAlertViewDelegate>

@property (nonatomic,copy)NSString *callbackId;
@property (nonatomic)NSDictionary *resultDict;
@property (nonatomic, assign)NSInteger buttonIndex;
@property (nonatomic, strong)CDVHelloCordovaPluginAlertView *cdvView;

- (void) iosFunc_sayHello:(CDVInvokedUrlCommand*)command;
- (void) iosFunc_sayHello_callBack;
- (void) iosFunc_getDeviceId:(CDVInvokedUrlCommand*)command;
- (void) iosFunc_getOsVersion:(CDVInvokedUrlCommand*)command;

@end
