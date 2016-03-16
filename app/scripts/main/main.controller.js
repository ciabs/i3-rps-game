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

    MainCtrl.$inject = ['$scope', '$location'];
    /* @ngInject */
    function MainCtrl($scope, $location) {
        var vm = this;

        activate();

        function activate() {
            $scope.$watch(angular.bind(this, function () {
                return $location.path();
            }), function (newVal) {
                vm.route = newVal;
            });
        }
    }
})();

