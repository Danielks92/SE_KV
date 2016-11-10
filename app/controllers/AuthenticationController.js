'use strict';

app.controller('AuthenticationController', ['$location', 'LoginService', function($location, LoginService) {

    var login = this;

    login.credentials = {
        password:'',
        username:''
    };

    login.login = function (rcredentials) {
        LoginService.login(rcredentials).then(function () {
            $location.path('/Login');
        });
    };

    login.registerForm = function () {
        //$state.go('register');
        $location.path('/Register');
    }
}]);