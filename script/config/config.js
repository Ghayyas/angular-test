/**
 * 
 * Config Routes
 * 
 */


(function(){
    
    'use strict';
   
 var app = angular.module('angularApp');

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // }).hashPrefix('!');

     $stateProvider
    .state('home',{
        url: '/',
        templateUrl: './components/home/home.html',
        controller: 'homeCtrl as home'
    })
    .state('secondPage',{
        url: '/send/:x{y:(?:/[^/]+)?}',
        templateUrl: './components/second/second.html',
        controller: 'secondCtrl as second'
    })
    .state('thirdPage',{
        url: '/third',
        templateUrl: './components/third/third.html',
        controller: 'thirdCtrl as third'
    })
    
    $urlRouterProvider.otherwise('/');
})












})()

