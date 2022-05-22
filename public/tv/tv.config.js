(function () {
    'use strict'
    angular
        .module('tv')
        .config(moduleconfig);

    function moduleconfig($stateProvider, $urlRouterProvider) {
        // $translatePartialLoaderProvider.addPart('registration');
        // $urlRouterProvider.otherwise('/referencedomain');
        $stateProvider
            .state('tv', {
                url: '/tv',
                templateUrl: 'tv/tv.tmpl.html',
                controller: 'TVController',
                controllerAs: 'vm',
                params: { data: [], searchbuttonclick: false, searchtext: null }
            })

    }
})();