(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.header.directive:header
     * @description
     * # header
     * Header directive of the i3RpsGameApp
     */
    angular
        .module('i3RpsGameApp.header')
        .directive('header', header);

    function header() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/header/header.template.html',
            controller: 'HeaderCtrl'
        };

        return directive;
    }
})();
