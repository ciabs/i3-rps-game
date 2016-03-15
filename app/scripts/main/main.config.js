(function () {
    'use strict';

    var main = angular.module('i3RpsGameApp.main');

    main.config(configure);

    configure.$inject = ['$routeProvider'];
    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/main/main.template.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
