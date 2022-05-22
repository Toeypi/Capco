(function () {
    'use strict'
    angular
        .module('news')
        .config(moduleconfig);

    function moduleconfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('news', {
                url: '/news',
                templateUrl: 'news/news.tmpl.html',
                controller: 'NewsController',
                controllerAs: 'vm',
                params: { data: [], searchbuttonclick: false, searchtext: null }
            })

    }
})();