var ApplicationController = function($scope, $rootScope, $location, USER_ROLES, AuthService) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    $scope.isLoginPage = false;
    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };
    $scope.notAuthorized = function() {
        AuthService.notAuthorized().then(function() {
            $location.path('/Login');
        })
    };
};

app.controller("ApplicationController", ApplicationController);