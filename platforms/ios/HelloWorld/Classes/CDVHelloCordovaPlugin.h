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

@interface CDVHelloCordovaPlugin : CDVPlugin<UIAlertViewDelegate>

- (void) sayHello:(CDVInvokedUrlCommand*)command;
- (void) getDeviceId:(CDVInvokedUrlCommand*)command;

@end
