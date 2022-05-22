(function () {
    'use strict'
    var app = angular.module('app');

    app.filter('dateformat', function (moment) {

        return function (input, format) {
            return moment(input).format(format)
        }
    })
})();