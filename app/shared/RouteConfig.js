
// routfile. redirects to templates by given path
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
                controllerAs: 'auctionView'
            })

            .when('/userProfile', {
                templateUrl: 'userProfile/userProfile.html',
                controller: 'ProfileController',
                controllerAs: 'profileController'
            })

            .when('/createAuktion',{
                templateUrl: 'createAuktion/auktion.html',
                controller: 'AuktionController',
                controllerAs: 'auktionForm'

            })

            .otherwise({

                redirectTo: '/Login'
            });
    })

