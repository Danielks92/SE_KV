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

            .when('/Register', {

                templateUrl: 'register/register.html',
                controller: 'RegisterController',
                controllerAs: 'regForm'
            })

            .when('/allView', {

                templateUrl: 'allView/allView.html',
                controller: 'AllViewController',
                controllerAs: 'allView'
            })

            .when('/auctionView', {

                templateUrl: 'auctionView/auctionView.html',
                controller: 'AuctionViewController',
            })

            .when('/createAuktion',{
                templateUrl: 'createAuktion/auktion.html',
                controller: 'AuktionController',
                controllerAs: 'auktionController'

            })

            .otherwise({

                redirectTo: '/Login'
            });
    })

