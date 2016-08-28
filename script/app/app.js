
/**
 * 
 * App Module
 * 
 */

(function(){
    
    'use strict';
    
var app =  angular.module('angularApp',['ui.router','app.home','app.second','app.third','app.service','ngAnimate','angular-toArrayFilter']);

app.controller('angularAppCtrl',angularAppCtrl)

function angularAppCtrl (){
    
}    
    
})()


