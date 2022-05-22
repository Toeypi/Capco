(function () {
    'use strict'
    angular
        .module('region')
        .config(moduleconfig);

    function moduleconfig($stateProvider, $urlRouterProvider) {
        // $translatePartialLoaderProvider.addPart('registration');
        // $urlRouterProvider.otherwise('/referencedomain');
        $stateProvider
            .state('region', {
                url: '/region',
                templateUrl: 'region/region.tmpl.html',
                controller: 'RegionController',
                controllerAs: 'vm',
                params: { data: [], searchbuttonclick: false, searchtext: null }
            })

    }
})();