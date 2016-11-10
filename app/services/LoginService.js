/**
 * Created by Daniel on 10.11.2016.
 */
app.service('LoginService', ['$http', '$location', function ($http, $location) {

    var loginService = {};
    var userPath = 'http://localhost:1337/users/logIn/userId';

    loginService.login = function (credentials) {
        return $http.put(userPath, {
            "username": credentials.username,
            "password": credentials.password,
        }).success(function (response) {
            alert("Login erfolgreich");
            $location.path("/login");
        }).error(function (status) {
            alert("Login fehlgeschlagen");
            $location.path("/login");
        });
    };

    return loginService;
}]);











