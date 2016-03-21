//
//  GameView.m
//  Warmth
//
//  Created by Christopher Raleigh on 2015/05/03.
//  Copyright (c) 2015 Swift Tailors. All rights reserved.
//

#import "GameView.h"

@implementation GameView

+ (ADBannerView *) getBannerAdvertisement {
    ADBannerView * newAdBanner = [[ADBannerView alloc] initWithFrame:CGRectZero];
    [newAdBanner setAutoresizingMask:UIViewAutoresizingFlexibleBottomMargin];
    return newAdBanner;
}

+ (UIWebView *) getGameWebView : (CGRect) frame {
    UIWebView * newGameWebView = [[UIWebView alloc] initWithFrame:frame];
    NSString * urlString = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
    NSURL * url = [NSURL URLWithString:urlString];
    NSURLRequest * urlRequest = [NSURLRequest requestWithURL:url];
    [newGameWebView loadRequest:urlRequest];
    return newGameWebView;
}

+ (GameView *) newGameView : (CGRect) frame {
    GameView * newGameView = [[GameView alloc] initWithFrame:frame];
    CGRect webFrame = frame;
    /*ADBannerView * adBanner = [self getBannerAdvertisement];
    [newGameView addSubview:adBanner];
    webFrame.size.height -= adBanner.bounds.origin.y;*/
    UIWebView * newGameWebView = [self getGameWebView:webFrame];
    [newGameView addSubview:newGameWebView];
    return newGameView;
}

@end