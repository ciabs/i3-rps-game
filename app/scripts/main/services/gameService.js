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
                updateGameStatus: updateGameStatus
            },
            gameStatus;

        return service;

        function getGameStatus() {
            return getGameStatusFromCookie();
        }

        function getGameStatusFromCookie() {
            if (typeof $cookieStore.get('gameStatus') == "undefined") {
                gameStatus = {
                    gameSelected: null,
                    gameNumber: 0,
                    win: 0,
                    lose: 0
                };
            } else {
                gameStatus = $cookieStore.get('gameStatus');
            }
            return gameStatus;
        }

        function updateGameStatus() {
            persistToCookie();
            return gameStatus;
        }

        function persistToCookie() { $cookieStore.put('gameStatus', gameStatus); }
    }
})();
