'use strict';

app.controller('RegisterController', ['$location', 'RegisterService', function($location, RegisterService) {


    // vm = viewModel -> avoid "this" reference problems
    var register = this;

    register.credentials = {
        firstName: '',
        lastName: '',
        password:'',
        password2:'',
        username:'',
        email: ''
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