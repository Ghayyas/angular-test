(function() {
    'use strict';

    angular
        .module('app.third', [])
        .controller('thirdCtrl', thirdCtrl);

    thirdCtrl.$inject = ["$state"];

    function thirdCtrl($state) {
        var _self = this;
        _self.pageClass = 'page-third';
    }
})();