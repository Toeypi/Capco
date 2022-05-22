(function () {
    'use strict';
    var app = angular.module('app', ['ngMaterial', 'ngMessages', 'ui.router', 'ui.bootstrap', 'angular-advanced-searchbox', 'md.data.table', 'pascalprecht.translate', 'angularMoment',
        'news', 'region', 'video', 'tv'])

    app.controller("InitController", function ($rootScope, $scope, $http, $state) {
        var obj = this
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            obj.currentpath = next.split("/")[4]
        })

        $scope.search = function search() {
            var req = {}
            req.type = obj.currentpath;
            req.text = $scope.name;
            $http.post('/searchdata', req).then(function (res) {
                var data = res.data
                $state.go(obj.currentpath, { data: data.data, searchbuttonclick: true, searchtext: $scope.name })
            }, function (err) {
                console.log(err)
            })
        }
    });

    app.config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/news');
    })




})();