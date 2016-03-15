(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.home.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Home controller of the i3RpsGameApp
     */
    angular
        .module('i3RpsGameApp.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];
    /* @ngInject */
    function HomeCtrl() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();

