/**
 * Created by Daniel on 10.11.2016.
 */
'use strict';

// handling of all items in the navigation bar

app.controller('NavBarController', ['$location', '$http', 'User', function ($location, $http,  User) {


    var getSoldPath = "http://localhost:1337/completed/getSold/";
    var getBoughtPath = "http://localhost:1337/completed/getBought/";


    var nav = this;
    nav.createAuction = function () {
        $location.path('/createAuction');
    };

    nav.logout = function() {
        User.setUser(null);
        $location.path("/Login");
    };




    if (User.usr != null) {
        $http.get(getSoldPath + User.usr.username).then(function successCallback(response) {
            nav.allSold = response.data;
        });
        $http.get(getBoughtPath + User.usr.username).then(function successCallback(response) {
            nav.allBought = response.data;
        });
        if(nav.allSold!= null && nav.allBought != null) {
            nav.messages = ((Object.keys(nav.allSold).length) + (Object.keys(nav.allBought).length));
        }

    }else {
        nav.messager = 0;
    }


}]);