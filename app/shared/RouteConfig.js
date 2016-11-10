/**
 * Created by Alex on 26.10.2016.
 */

app
    .config(function($routeProvider)
    {
        $routeProvider

            .when('/Login', {

                templateUrl:'login/login.html',
                controller: 'AuthenticationController',
                controllerAs: 'authForm'
            })

            .when('/Dashboard', {

                templateUrl:'dashboard/index.html',
                controller: 'ApplicationController'
            })

            .when('/Register', {

                templateUrl: 'register/register.html',
                controller: 'RegisterController',
                controllerAs: 'regForm'
            })

            .when('/ModelForm', {

                templateUrl: 'ModelForm/_modelForm.html',
                controller: 'ModelFormController',
                controllerAs: 'modelForm'
            })

            .when('/DecisionModel', {

                templateUrl: 'decisionModel/decisionModel.html',
                controller: 'DecisionModelController',
            })

            .otherwise({

                redirectTo: '/Login'
            });
    })

    .config(function ($stateProvider, USER_ROLES) {
        $stateProvider.state('Dashboard', {
            url: '/Dashboard',
            templateUrl: 'dashboard/index.html',
            data: {
                authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
            }
        });
        $stateProvider.state('Login', {
            templateUrl: 'login/login.html',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.admin, USER_ROLES.editor]
            }
        });
        $stateProvider.state('Register', {
            templateUrl: 'register/register.html',
            data: {
                authorizedRoles: [USER_ROLES.all, USER_ROLES.admin, USER_ROLES.editor]
            }
        });
    })

    .config(function ($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector',
            function ($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    })

    .run(function ($rootScope, $location, AUTH_EVENTS) {
        $rootScope.$on(AUTH_EVENTS.loginFailed, function() {
            //$location.path("/Login");
        })
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
            $location.path("/Login");
        })
    })

    .run(function ($rootScope, AUTH_EVENTS, AuthService) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            var authorizedRoles = next.data.authorizedRoles;
            if (!AuthService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (AuthService.isAuthenticated()) {
                    // user is not allowed
                    AuthService.notAuthenticated();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    // user is not logged in
                    //AuthService.notAuthenticated();
                    // this.notAuthorized();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            }
        });
    })

    .run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });