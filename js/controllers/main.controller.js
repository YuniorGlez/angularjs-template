(function() {
'use strict';

    angular
        .module('EOI')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];
    function MainController($scope) {
        // Puedes borrar esta variable una vez vayas a empezar
        $scope.title = 'Hola mundo';

        activate();

        ////////////////

        function activate() { }
    }
})();