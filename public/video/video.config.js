(function () {
    'use strict'
    angular
        .module('video')
        .config(moduleconfig);

    function moduleconfig($stateProvider, $urlRouterProvider) {
        // $translatePartialLoaderProvider.addPart('registration');
        // $urlRouterProvider.otherwise('/referencedomain');
        $stateProvider
            .state('video', {
                url: '/video',
                templateUrl: 'video/video.tmpl.html',
                controller: 'VideoController',
                controllerAs: 'vm',
                params: { data: [], searchbuttonclick: false, searchtext: null }
            })

    }
})();