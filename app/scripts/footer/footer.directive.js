(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name i3RpsGameApp.footer.directive:footer
     * @description
     * # footer
     * Footer directive of the i3RpsGameApp
     */
    angular
        .module('i3RpsGameApp.footer')
        .directive('footer', footer);

    function footer() {
        var directive = {
            restrict: 'EA',
            templateUrl: '/scripts/footer/footer.template.html'
        };

        return directive;
    }
})();
