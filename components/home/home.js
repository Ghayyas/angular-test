(function() {
    'use strict';

    angular
        .module('app.home', [])
        .controller('homeCtrl',homeCtrl)
//  .directive('formatPhone', [
//         function() {
//             return {
//                 require: 'ngModel',
//                 restrict: 'A',
//                 link: function(scope, elem, attrs, ctrl, ngModel) {
//                     $(elem).add(phonenumber).on('keyup', function() {
//                        var origVal = elem.val().replace(/[^\w\s]/gi, '');
//                        if(origVal.length === 10) {
//                         //  var cd = origVal.replace(/(.{3})/g,"$");
//                          var str = origVal.replace(/(.{3})/g,"$1-");
//                          var phone = str.slice(0, -2) + str.slice(-1);
//                          jQuery("#phonenumber").val(phone);
//                        }

//                     });
//                 }
//             };
//         }
//     ]);
.directive('numberOnlyInput',function(){
        return{
            restrict: 'EA',
            template: '<input name="{{inputName}}" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="12" ng-model="inputValue" />',
            link: function (scope) {
                scope.$watch('inputValue', function(newValue,oldValue) {
                   var arr = [];
                   if(newValue) {
                      
                        var arr1 = String(newValue).split("");
                        // var arr2 = String(oldValue).split(",");
                        console.log('arr',arr1[8],'arrleng',arr1.length);
                          if(arr1[7] !== undefined){
                              console.log('chala');
                              if(arr1.length == 8){
                              var cd = "-";
                              arr1 = arr1.join('')+ "-";
                                //  arr1[8] = cd;
                                 console.log('arr',arr1,'arr9',arr1[9]);
                            //   arr1[9]= "-";
                              scope.inputValue = arr1;
                          }
                          }
                        // if(!arr1.indexOf(')')+1   && (arr1.length == 3 || arr1.length == 4)){
                         else if(arr1.length == 3){
                            arr1 = '(' + arr1.join('') + ')';
                            console.log('arr',arr1);
                            scope.inputValue = arr1;
                        }
                        // if(arr1.length == 3){
                        //      arr1 = '(' + arr1.join('') + ')';
                        // }
                        else if(arr1.length == 4){
                            arr1 = '(' + arr1.join('');
                            scope.inputValue = arr1;
                        }
                        // else if(arr1.length == 8){
                        //     console.log('arr',arr1[8],'arr9',arr1[9]);
                        //     arr1[9] = '-';
                        //     scope.inputValue = arr1;
                        // }
                            // arr1 = arr1.join('');
                            // scope.inputValue = arr1;
                        
                        // if(arr1.length == 3){
                        
                        // //    arr1.unshift("(")  
                            
                            
                        //     scope.inputValue = arr1;
                        //    console.log('shiftarr',arr1.length)
                        // }
                    //    if(arr1.length < 6){
                    //        console.log("hello");
                    //        if(arr1[0] == "("){
                    //            return;
                    //        }else if(arr1[4] !== ""){
                    //            console.log("cahalaa");
                    //            arr1.push(")");
                    //            arr1.join("");
                    //            scope.inputValue = arr1;
                    //            return;
                    //        }else{
                    //            arr1.unshift("(");
                    //            arr1.join("");
                    //            console.log(arr1);
                    //            scope.inputValue = arr1;
                    //        }
                    //    }

                    }
                   /* if (arr.length === 0) return;
                    if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
                    if (arr.length === 2 && newValue === '-.') return;
                    if (isNaN(newValue)) {
                        scope.inputValue = oldValue;
                    }*/
                });
            }
        }
    })
    .directive('currencyConverter',function(){
        return {
            restrict: 'EA',
            template: '<input type="text" placeholder="Curreny Value" onkeypress="return event.charCode >= 48 && event.charCode <= 57" ng-model="CValue"/>',
            link: function(scope){
                var oldValue1;
                scope.$watch('CValue',function(newValue,oldValue){
                   var currencyArray = String(newValue).split("");
                   console.log('arr1',currencyArray.length);
                   if(!parseInt(scope.CValue)){
                       currencyArray = oldValue1;
                   console.log('parse',parseInt(scope.CValue));
                       
                   }
                   
                   else if(currencyArray.length == 0){
                       currencyArray = '';
                       oldValue1= '';
                      
                   }
                   else if(currencyArray.length == 1 && currencyArray[0] !== "$"){
                       currencyArray = '$' + currencyArray.join('');
                        scope.CValue = currencyArray;
                        oldValue1= currencyArray;                   }
                   
                    
                })
            }
        }
    })
    
    homeCtrl.$inject = ['passingData'];

    function homeCtrl(passingData) {
      
      var _self = this;
        _self.pageClass = 'page-home'
      _self.submit = function(data){
          passingData.addData(data);
        //   console.log('data send',data);
      }

      
      
      /**
       * 
       * Fifty Items Array with 3 property
       * 
       */
      
      _self.arr = [{name: 'Ghayyas',age:20,city: 'Karachi'},
                  {name: 'Asad',age:22,city: 'Karachi'},{name: 'James',age:19,city: 'Washington'},{name: 'Joseph',age:18,city: 'London'},{name: 'Fakhir',age:23,city: 'Lahore'},{name: 'Ahmed',age:55,city: 'Karachi'},{name: 'Saba',age:21,city:                 'Lahore'},
                    {name: 'Wamiq', age:22,city: 'Karachi'},{name: 'Harry',age:24,city: 'London'},{name: 'Waseem',age:44,city: 'London'},{name: 'Qasim',age:22,city: 'Karachi'},{name: 'Sidra',age:22,city: 'Lahore'},{name: 'Musab',age:32,city: 'Karachi'},{name: 'Shahzeb',age:32,city:   'Karachi'},
                    {name: 'Qaiser',age:32,city: 'Karachi'},{name: 'Ahtesham',age:22,city: 'Lahore'},{name: 'Enigma',age:22,city: 'Florida'},
                    {name: 'Qaiser', age:33,city: 'Lahore'},{name: 'Ghayyas',age:20,city: 'Lahore'},{name: 'Wamiq',age:22,city: 'Islamabad'},
                   {name: 'Ghayyas',age:20,city: 'Karachi'},{name: 'Asad',age:22,city: 'Karachi'},{name: 'James',age:19,city: 'Washington'},{name: 'Joseph',age:18,city: 'London'},{name: 'Fakhir',age:23,city: 'Lahore'},{name: 'Ahmed',age:55,city: 'Karachi'},{name: 'Saba',age:21,city:                 'Lahore'},
                    {name: 'Wamiq', age:22,city: 'Karachi'},{name: 'Harry',age:24,city: 'London'},{name: 'Waseem',age:44,city: 'London'},{name: 'Qasim',age:22,city: 'Karachi'},{name: 'Sidra',age:22,city: 'Lahore'},{name: 'Musab',age:32,city: 'Karachi'},{name: 'Shahzeb',age:32,city:   'Karachi'},
                    {name: 'Qaiser',age:32,city: 'Karachi'},{name: 'Ahtesham',age:22,city: 'Lahore'},{name: 'Enigma',age:22,city: 'Florida'},
                    {name: 'Qaiser', age:33,city: 'Lahore'},{name: 'Ghayyas',age:20,city: 'Lahore'},{name: 'Wamiq',age:22,city: 'Islamabad'},
                   
                    {name: 'Sidra',age:22,city: 'Lahore'},{name: 'Musab',age:32,city: 'Karachi'},{name: 'Shahzeb',age:32,city:   'Karachi'},
                    {name: 'Qaiser',age:32,city: 'Karachi'},{name: 'Ahtesham',age:22,city: 'Lahore'},{name: 'Enigma',age:22,city: 'Florida'},
                    {name: 'Qaiser', age:33,city: 'Lahore'},{name: 'Ghayyas',age:20,city: 'Lahore'},{name: 'Wamiq',age:22,city: 'Islamabad'},{name: 'Sidra',age:22,city: 'Lahore'}
      ]

      console.log('arr',_self.arr);
 
      
       
      
}














})();