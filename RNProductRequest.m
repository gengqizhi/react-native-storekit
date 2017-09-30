//
//  ProductRequest.m
//
//  Created by Hans Knöchel on 16.04.17.
//  Copyright © 2017 Hans Knöchel. All rights reserved.
//

#import "RNProductRequest.h"
#import "RNProduct.h"
#import <React/RCTConvert.h>

@implementation RNProductRequest

RCT_EXPORT_MODULE()

- (id)initWithProductIdentifiers:(NSSet *)set callback:(RCTResponseSenderBlock)_callback
{
  if ((self = [super init])) {
    request = [[SKProductsRequest alloc] initWithProductIdentifiers:set];
    //[request alloc];
    request.delegate = self;
      
    callback = _callback;

    NSLog(@"------------start-----------------");
    [request start];
  }
  return self;
}

#pragma mark Public API

RCT_EXPORT_METHOD(cancel)
{
  if (request != nil) {
    [request cancel];
  }
}


RCT_EXPORT_METHOD(requestProductsCustom:(NSArray *)ids
                  callback:(RCTResponseSenderBlock)_callback)
{
//    if (![SKPaymentQueue canMakePayments]) {
//        _callback(@[[NSNull null], @"In-app purchase is disabled. Please enable it to activate more features."]);
//        return;
//    }
//    request = [[SKProductsRequest alloc] initWithProductIdentifiers:ids];
//    request.delegate = self;
//    callback = _callback;
//    [request start];
}

#pragma mark Delegates

- (void)productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response
{
  NSMutableArray *good = [NSMutableArray arrayWithCapacity:[[response products]count]];
  
  for (SKProduct * product in [response products]) {
    RNProduct *p = [[RNProduct alloc] initWithProduct:product];
    [good addObject:p];
  }
  
  NSMutableDictionary *event = [[NSMutableDictionary alloc] init];
  
  [event setObject:good forKey:@"products"];
  [event setObject:@YES forKey:@"success"];
  
  NSArray *invalid = [response invalidProductIdentifiers];
  if (invalid != nil && [invalid count] > 0) {
    [event setObject:invalid forKey:@"invalid"];
  }

  callback(@[event]);
}

- (void)request:(SKRequest *)request didFailWithError:(NSError *)error
{
    NSLog(@"[ERROR] received error %@", [error localizedDescription]);
    NSDictionary *event = [NSDictionary dictionaryWithObjectsAndKeys:@NO, @"success", [error localizedDescription], @"message", nil];

    callback(@[event]);
}

@end
