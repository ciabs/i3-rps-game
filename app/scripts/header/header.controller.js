(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.header.controller:HeaderCtrl
     * @description
     * # HeaderCtrl
     * Header controller of the i3RpsGameApp
     */
    angular
        .module('i3RpsGameApp.header')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$location', '$scope'];
    /* @ngInject */
    function HeaderCtrl($location, $scope) {
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

