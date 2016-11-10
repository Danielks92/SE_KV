'use strict';

app.controller('AuthenticationController', ['$location', 'AuthService', function($location, AuthService) {

    // vm = viewModel -> avoid "this" reference problems
    var auth = this;

    auth.credentials = {};
    auth.status = false;

    auth.login = function(credentials) {
        AuthService.login(credentials).then(function successCallback(user) {
            if (user != -1) {
                //auth.setCurrentUser(user);
                $location.path('/ModelForm');
            } else {
                auth.credentials = null;
                auth.status = true;
            }
        }, function errorCallback() {
            auth.credentials = null;
            auth.status = true;
        });
    }

    auth.notAuthorized = function() {
        AuthService.notAuthorized().then(function() {
            $location.path('/Login');
        })
    }

    auth.registerForm = function () {
        //$state.go('register');
        $location.path('/Register');
    }
}]);