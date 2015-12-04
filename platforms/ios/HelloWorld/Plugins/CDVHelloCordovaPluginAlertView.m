//
//  CDVHelloCordovaPluginAlertView.m
//  HelloWorld
//
//  Created by QiuZidane on 15/11/29.
//
//

#import "CDVHelloCordovaPluginAlertView.h"
#import "CDVHelloCordovaPlugin.h"

@implementation CDVHelloCordovaPluginAlertView


- (void) alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex{
    
    CDVHelloCordovaPlugin *hello = (CDVHelloCordovaPlugin *)self.hellodelegate;
    hello.buttonIndex = buttonIndex;
    [hello iosFunc_sayHello_callBack];

    
}


@end
