app.service('RegisterService', ['$http', '$location', function ($http, $location) {
    var registerService = {};

    registerService.register = function (rcredentials) {

        return $http
            .post("http://localhost:8080/api/users/create", { "email": rcredentials.email,
            "firstName": rcredentials.firstname,
            "lastName": rcredentials.lastname,
            "password": rcredentials.password,
            "username": rcredentials.username
    }).success(function (response){
                alert("Die Registrierung war erfolgreich!");
                $location.path("/login");
            }).error(function(status) {
                alert("Die Registrierung ist fehlgeschlagen!");
                $location.path("/login");
            });
    };

    return registerService;
}]);