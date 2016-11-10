'use strict';

app.controller('RegisterController', ['$location', 'RegisterService', function($location, RegisterService) {


    // vm = viewModel -> avoid "this" reference problems
    var register = this;

    register.rcredentials = {
        email: '',
        firstname: '',
        lastname: '',
        password:'',
        password2:'',
        username:''
    };


    register.register = function (rcredentials) {
        RegisterService.register(rcredentials).then(function () {
            $location.path('/Login');
        });
    };
    register.back = function() {
        $location.path("/Login");
    }
}]);