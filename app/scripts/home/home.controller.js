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
        vm.highScore = {};
        vm.startNewGame = startNewGame;
        vm.continueGame = continueGame;

        activate();

        function activate() {
            getGameStatus();
            getHighScore();
        }

        function getGameStatus() {
            vm.gameStatus = GameService.getGameStatus();
        }

        function getHighScore() {
            console.log('asd');
            vm.highScore = GameService.getHighScore();
        }

        function startNewGame() {
            GameService.newGame();
            $location.path('game');
        }

        function continueGame() {
            $location.path('game');
        }
    }
})();

