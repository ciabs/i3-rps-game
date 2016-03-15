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

    HomeCtrl.$inject = ['GameService', '$location'];
    /* @ngInject */
    function HomeCtrl(GameService, $location) {
        var vm = this;
        vm.gameStatus = {};
        vm.startGame = startGame;

        activate();

        function activate() {
            getGameStatus();
        }

        function getGameStatus() {
            vm.gameStatus = GameService.getGameStatus();
        }

        function startGame(gameSelected) {
            vm.gameStatus.gameSelected = gameSelected;
            vm.gameStatus.game = 1;
            GameService.updateGameStatus();
            $location.path('game');
        }
    }
})();

