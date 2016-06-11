var app = angular.module('xinlong', ['ionic','ngRoute','xinlong.controller','xinlong.service']);
app.config(function routeConfig($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'templates/home.html'
        })
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/about.html'
        })
        .when('/about_me', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/about_me.html'
        })
        .when('/about_xl', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/about_xl.html'
        })
        .when('/collect', {
            controller: 'CollectCtrl',
            templateUrl: 'templates/collect.html'
        })
        .when('/contact_us', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/contact_us.html'
        })
        .when('/me', {
            controller: 'MeCtrl',
            templateUrl: 'templates/me.html'
        })
        .when('/notice', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/notice.html'
        })
        .when('/order', {
            controller: 'OrderCtrl',
            templateUrl: 'templates/order.html'
        })
        .when('/product', {
            controller: 'ProductCtrl',
            templateUrl: 'templates/product.html'
        })
        .when('/product_detail', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/product_detail.html'
        })
        .when('/set', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/set.html'
        })
        .when('/user_msg', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/user_msg.html'
        })
        .when('/login', {
            controller: 'ChatsCtrl',
            templateUrl: 'templates/login.html'
        })
        
        .otherwise({
            redirectTo: '/'
        });
});