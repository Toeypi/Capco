(function () {
    'use strict';

    angular
        .module('video')
        .controller('VideoController', VideoController);

    function VideoController($http, $stateParams) {
        var vm = this;
        if ($stateParams.searchbuttonclick == true) {
            vm.data = $stateParams.data
        } else
            getdata()
        function getdata() {
            $http.get('/getdata/video').then(function (res) {
                var data = res.data;
                vm.data = (data.data || [])
            }, function (err) {
                console.log(err)
            })
        }
    }

})();