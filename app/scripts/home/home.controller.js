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
        vm.startNewGame = startNewGame;
        vm.continueGame = continueGame;

        activate();

        function activate() {
            getGameStatus();
        }

        function getGameStatus() {
            vm.gameStatus = GameService.getGameStatus();
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

