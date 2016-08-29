(function() {
    'use strict';

    angular
        .module('app.second', [])
        .controller('secondCtrl', secondCtrl);

    secondCtrl.$inject = ["$state","$stateParams","passingData"];

    function secondCtrl($state,$stateParams,passingData) {
        var _self = this;
        _self.pageClass = 'page-second';
         var second = $stateParams.x;
         console.log('state',second);
         var getData =  passingData.getData();
         console.log('list get',getData);
         _self.getData = getData;
         _self.firstValue = _self.firstValue;
         _self.secondValue = _self.secondValue;
         _self.thirdValue = _self.thirdValue;
         _self.run = function(){
          console.log('value',_self.firstValue)
         console.log('value',_self.second)
        _self.sumValue = _self.firstValue + _self.secondValue + _self.thirdValue;
        console.log('value',_self.sumValue);
        //  _self.remain = function(){
        //      _self.remainValue = _self.sumValue /3;
        //      console.log('remain',_self.remainValue);
        //  }
         }

         
    }
})();
