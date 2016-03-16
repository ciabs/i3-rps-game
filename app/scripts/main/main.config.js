(function () {
    'use strict';

    var main = angular.module('i3RpsGameApp.main');

    main.config(configure);

    configure.$inject = ['$routeProvider'];
    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/home/home.template.html',
                controller: 'HomeCtrl',
                controllerAs: 'homeC'
            })
            .when('/game', {
                templateUrl: 'scripts/game/game.template.html',
                controller: 'GameCtrl',
                controllerAs: 'gameC'
            })
            .when('/about', {
                templateUrl: 'scripts/about/about.template.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
