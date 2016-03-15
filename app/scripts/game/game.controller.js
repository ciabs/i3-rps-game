(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.game.controller:GameCtrl
     * @description
     * # HomeCtrl
     * Game controller of the i3RpsGameApp
     */
    angular
        .module('i3RpsGameApp.game')
        .controller('GameCtrl', GameCtrl);

    GameCtrl.$inject = [];
    /* @ngInject */
    function GameCtrl() {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();

