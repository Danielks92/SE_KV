app.service('AuthService', ['$http', '$location', '$q', 'Session', 'User', 'AuthResolver', function ($http, $location, $q, Session, User, AuthResolver) {
    var authService = {};

    authService.login = function (credentials) {
        var headers = credentials.username && credentials.password ? {
            'Authorization' : "Basic " + btoa(credentials.username + ":" + credentials.password)
        } : {};


        // Promise (resolved on successful authentication, reject on unsuccessful authentication or error)
       /* var deferred = $q.defer();
        $http.get(url, {headers: headers}).success(function(user) {
            if (user.authenticated) {
                service.authenticated = true;
                service.principal = user.principal;
                service.authorities = user.authorities;
                deferred.resolve();
            } else {
                clearAuth();
                deferred.reject();
            }
        }).error(function() {
            clearAuth();
            deferred.reject();
        });*/
        //var deferred = $q.defer();
        return $http.get("http://localhost:8080/api/authentications/user", {headers: headers})
            .then(function successCallback(user) {
                User.setUser(user.data.principal.id, user.data.principal.username,  user.data.authorities[0].authority);
                Session.create(user.status, user.data.principal.username, user.data.authorities[0].authority);
                return User;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                return -1;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

                /*.success(function(user) {
                 //Session.create(res.status, credentials.username, 'admin');
                 User.setUser(user.principal.id, user.principal.username,  user.authorities.authority);
                 deferred.resolve();
                 return User;
                 }).error(function() {
                 deferred.reject();
                 alert("Error");
                 });*/
        //}
        //return deferred.promise;
            /*.then(function(res) {

                //Session.create(res.status, res.data.userId, res.data.userRole);
                Session.create(res.status, credentials.username, 'admin');
                User.setUser(credentials.username, credentials.password, 'admin');
                return User;
            });*/
    };

    authService.isAuthenticated = function () {
        AuthResolver.resolve();
        return !!Session.userId;
    };
    authService.notAuthorized = function() {
       return true;
    }

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
}]);
app.factory('User', function() {
    var user = {};
    return {
        setUser: function(id, username, userRole) {
            this.id = id;
            this.name = username;
            this.role = userRole;
            return user;
        }
    }
})

/*app.factory('Session', function($http) {
    var session = {
        httpStatusCode: "404",
        text: "Not Found"
    };
    return {
        getSession: function() {
            return session;
        },
        setSession: function(user) {
            $http.post("http://localhost:8080/api/authentications/user", user.username).then(function(response) {
                session.httpStatusCode = response.status;
                session.text = response.statusText;
                return session;
            });
        }
    }
})*/

app.factory('AuthInterceptor', function ($rootScope, $q,
                                      AUTH_EVENTS) {
    return {
        responseError: function (response) {
            $rootScope.$broadcast({
                401: AUTH_EVENTS.notAuthenticated,
                403: AUTH_EVENTS.notAuthorized,
                419: AUTH_EVENTS.sessionTimeout,
                440: AUTH_EVENTS.sessionTimeout
            }[response.status], response);
            return $q.reject(response);
        }
    };
});

app.factory('AuthResolver', function ($q, $rootScope, $state) {
    return {
        resolve: function () {
            var deferred = $q.defer();
            var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
                if (angular.isDefined(currentUser)) {
                    if (currentUser) {
                        deferred.resolve(currentUser);
                    } else {
                        deferred.reject();
                    }
                    unwatch();
                }
            });
            return deferred.promise;
        }
    };
})

app.service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
});