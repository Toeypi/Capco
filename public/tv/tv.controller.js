(function () {
    'use strict';

    angular
        .module('tv')
        .controller('TVController', TVController);

    function TVController($http, $stateParams) {
        var vm = this;
        if ($stateParams.searchbuttonclick == true) {
            vm.data = $stateParams.data
        } else
            getdata()
        function getdata() {
            $http.get('/getdata/tv').then(function (res) {
                var data = res.data;
                vm.data = (data.data || [])
            }, function (err) {
                console.log(err)
            })
        }
    }

})();