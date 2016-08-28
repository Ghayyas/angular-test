(function() {
    'use strict';

    angular
        .module('app.home', [])
        .controller('homeCtrl',homeCtrl)
 .directive('formatPhone', [
        function() {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function(scope, elem, attrs, ctrl, ngModel) {
                    $(elem).add(phonenumber).on('keyup', function() {
                       var origVal = elem.val().replace(/[^\w\s]/gi, '');
                       if(origVal.length === 10) {
                        //  var cd = origVal.replace(/(.{3})/g,"$");
                         var str = origVal.replace(/(.{3})/g,"$1-");
                         var phone = str.slice(0, -2) + str.slice(-1);
                         jQuery("#phonenumber").val(phone);
                       }

                    });
                }
            };
        }
    ]);

    
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