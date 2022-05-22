(function(){
    'use strict';
    angular.module('app').config(translateConfig);

    function translateConfig($translateProvider){
        $translateProvider.useStaticFilesLoader({
            files: [ {
                prefix: '/il8n/',
                suffix: '.json'
            }]
        });
        // $translateProvider.useSanitizeValueStrategy('sanitize');
        // $translateProvider.useLoaderCache(true);
        $translateProvider.preferredLanguage('en');
        
    }
})()