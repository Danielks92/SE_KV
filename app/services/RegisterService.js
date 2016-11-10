app.service('RegisterService', ['$http', '$location', function ($http, $location) {

    var registerService = {};
    var userPath = 'http://localhost:1337/users';

    registerService.register = function (credentials) {
        return $http.post(userPath, {
            "username": credentials.username,
            "firstName": credentials.firstName,
            "lastName": credentials.lastName,
            "password": credentials.password,
            "email": credentials.email
        }).success(function (response) {
            alert("Registrierung erfolgreich");
            $location.path("/login");
        }).error(function (status) {
            alert("Registrierung fehlgeschlagen");
            $location.path("/login");
        });
    };

    return registerService;
}]);











