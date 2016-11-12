/**
 * Created by Daniel on 10.11.2016.
 */

// login. server handles false input

app.service('LoginService', ['$http', '$location', 'User', function ($http, $location, User) {

    var loginService = {};
    var userPath = 'http://localhost:1337/users/logIn/userId';

    loginService.login = function (credentials) {
        return $http.put(userPath, {
            "username": credentials.username,
            "password": credentials.password
        }).success(function (response) {
            User.setUser(credentials);
            alert("Login erfolgreich");
            $location.path("/allView");
        }).error(function (status) {
            alert("Login fehlgeschlagen");
            $location.path("/login");
        });
    };

    return loginService;
}]);

app.factory('Auction', function() {
    var auction = {};
    return {
        setAuction: function(auc) {
            this.auc = auc;
            return auction;
        }
    }
});

app.factory('User', function() {
    var user = {};
    return {
        setUser: function(usr) {
            this.usr = usr;
            return user;
        }
    }
});







