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

    GameCtrl.$inject = ['GameService'];
    /* @ngInject */
    function GameCtrl(GameService) {
        var vm = this,
            shapes = ['r', 's', 'p'];
        vm.chooseShape = chooseShape;

        activate();

        function activate() {
            getGameStatus();
        }

        function getGameStatus() {
            vm.gameStatus = GameService.getGameStatus();
        }

        function chooseShape(shape) {
            vm.playerShape = shape;
            vm.computerShape = computerChooseShape();
            vm.gameResult = getGameResult(vm.playerShape, vm.computerShape);

            vm.gameStatus.gameNumber++;
            if (vm.gameResult == 1) { vm.gameStatus.win++; }
            if (vm.gameResult == -1) { vm.gameStatus.lose++; }
        }

        function computerChooseShape() {
            return shapes[Math.floor(Math.random()*shapes.length)];
        }

        function getGameResult(shape1, shape2) {
            if (shape1 == shape2) {
                return 0;
            }
            switch (shape1) {
                case 'r':
                    return (shape2 == 's' ? 1 : -1);
                case 'p':
                    return (shape2 == 'r' ? 1 : -1);
                case 's':
                    return (shape2 == 'p' ? 1 : -1);
            }
        }
    }
})();

