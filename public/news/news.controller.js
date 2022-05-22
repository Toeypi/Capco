(function () {
    'use strict';

    angular
        .module('news')
        .controller('NewsController', NewsController);

    function NewsController($http, $stateParams) {
        var vm = this;
        if ($stateParams.searchbuttonclick == true) {
            vm.data = $stateParams.data
        } else
            getdata()

        function getdata() {
            $http.get('/getdata/news').then(function (res) {
                var data = res.data;
                vm.data = (data.data || [])
            }, function (err) {
                console.log(err)
            })
        }
    }

})();