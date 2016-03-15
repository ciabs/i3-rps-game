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

    MainCtrl.$inject = ['GameService'];
    /* @ngInject */
    function MainCtrl(GameService) {
        var vm = this;
        vm.gameStatus = {};

        activate();

        function activate() {
            getGameStatus();
        }

        function getGameStatus() {
            vm.gameStatus = GameService.getGameStatus();
        }
    }
})();

