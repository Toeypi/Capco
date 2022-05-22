(function () {
    'use strict';

    angular
        .module('region')
        .controller('RegionController', RegionController);

    function RegionController($http, $stateParams) {
        var vm = this;
        if ($stateParams.searchbuttonclick == true) {
            vm.data = $stateParams.data
        } else
            getdata()
        function getdata() {
            $http.get('/getdata/region').then(function (res) {
                var data = res.data;
                vm.data = (data.data || [])
            }, function (err) {
                console.log(err)
            })
        }
    }

})();