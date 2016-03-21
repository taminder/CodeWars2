//
//  ViewController.m
//  Warmth
//
//  Created by Christopher Raleigh on 2015/05/03.
//  Copyright (c) 2015 Swift Tailors. All rights reserved.
//

#import "ViewController.h"
#import "GameView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [self.view addSubview:[GameView newGameView:self.view.bounds]];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
