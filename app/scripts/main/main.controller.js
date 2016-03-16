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
        vm.highScore = {};

        activate();

        function activate() {
            getGameStatus();
            getHighScore();
        }

        function getGameStatus() {
            vm.gameStatus = GameService.getGameStatus();
        }

        function getHighScore() {
            vm.highScore = GameService.getHighScore();
        }
    }
})();

