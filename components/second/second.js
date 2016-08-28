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
    }
})();
