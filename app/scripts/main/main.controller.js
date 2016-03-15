(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.main.controller:MainCtrl
     * @description
     * # MainCtrl
     * Main controller of the i3RpsGameApp
     */
    angular
        .module('i3RpsGameApp.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];
    /* @ngInject */
    function MainCtrl() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();

