'use strict';

// controller for handling registration and login

app.controller('AuthenticationController', ['$location', 'LoginService' ,'User', function($location, LoginService, User) {

    var login = this;

    login.credentials = {
        password:'',
        username:''
    };

    login.login = function (rcredentials) {
        LoginService.login(rcredentials).then(function () {
            User.setUser(rcredentials);
            $location.path('/allView');
        });
    };

    login.registerForm = function () {
        //$state.go('register');
        $location.path('/Register');
    }
}]);