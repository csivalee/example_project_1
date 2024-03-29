#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "RNSplashScreen.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"example_project_1";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  //[RNSplashScreen show];
  //return [super application:application didFinishLaunchingWithOptions:launchOptions];
  
  /* First */
  BOOL didFinishLaunchingWithOptions = [super application:application didFinishLaunchingWithOptions:launchOptions];

  /* Second */
  [RNSplashScreen show];

  /* Third */
  return didFinishLaunchingWithOptions;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
  
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
