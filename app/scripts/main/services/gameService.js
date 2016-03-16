(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.main.factory:GameService
     * @description
     * # MenuService
     * Service for managing the menu
     */
    angular
        .module('i3RpsGameApp.main')
        .factory('GameService', GameService);

    GameService.$inject = ['$cookieStore'];
    /* @ngInject */
    function GameService($cookieStore) {
        var service = {
                getGameStatus: getGameStatus,
                updateGameStatus: updateGameStatus,
                newGame: newGame,
                getHighScore: getHighScore
            },
            gameStatus,
            highScore;

        return service;

        function getGameStatus() {
            return getGameStatusFromCookie();
        }

        function getGameStatusFromCookie() {
            if (typeof $cookieStore.get('gameStatus') == "undefined") {
                gameStatus = {
                    gameNumber: 0,
                    win: 0,
                    lose: 0
                };
            } else {
                gameStatus = $cookieStore.get('gameStatus');
            }
            return gameStatus;
        }

        function getHighScore() {
            return getHighScoreFromCookie();
        }

        function getHighScoreFromCookie() {
            if (typeof $cookieStore.get('highScore') == "undefined") {
                highScore = 0;
            } else {
                highScore = $cookieStore.get('highScore');
            }
            return highScore;
        }

        function newGame() {
            gameStatus = {
                gameNumber: 0,
                win: 0,
                lose: 0
            };
            persistGameStatusToCookie();
            return gameStatus;
        }

        function updateGameStatus() {
            persistGameStatusToCookie();
            checkHighScore();
            return gameStatus;
        }

        function checkHighScore() {
            if (gameStatus.win > highScore) {
                highScore = gameStatus.win;
                persistHighScoreToCookie();
            }
        }

        function persistGameStatusToCookie() { $cookieStore.put('gameStatus', gameStatus); }

        function persistHighScoreToCookie() { $cookieStore.put('highScore', highScore); }
    }
})();
