
(function(){
    
    'use strict';
    
    var app = angular.module('app.service',[])
     app.service('passingData',function(){
      
      var data;
      var addData = function(add){
         
          data=add;
      } 
      
      var getData = function(){
          return data;
      } 
      return{
          addData:addData,
          getData:getData
      };
   });
   
       

    
})()