/**
 * Created by Daniel on 12.11.2016.
 */

// gives the sold and bought books for a given user (the one logged in)

app.controller('ProfileController', ['$location', '$http', 'User', function($location, $http, User) {


    var profile = this;
    var getUserPath = "http://localhost:1337/matches/byUser/";
    var getSoldPath = "http://localhost:1337/completed/getSold/";
    var getBoughtPath = "http://localhost:1337/completed/getBought/";
    var getPaidPath = "http://localhost:1337/completed/sold/";

    var userinfo = function(user) {
    return $http.get(getUserPath + user).then(function successCallback(response) {
        return response.data;
    });
    }


    if (User.usr != null) {

    $http.get(getSoldPath + User.usr.username).then(function successCallback(response) {
        profile.allSold = response.data;
    });


    $http.get(getBoughtPath + User.usr.username).then(function successCallback(response) {
        profile.allBought = response.data;
    });


    }else {
        alert("Offenbar sind Sie nicht mehr angemeldet. Bitte melden Sie sich erneut an!");
    }


    profile.sold = function(sold) {
        return $http.delete(getPaidPath + sold._id)
            .success(function (response) {
                alert("Artikel verkauft!");
            }).error(function (status) {
                alert("Fehler beim Verkauf!");
            });
    }

    profile.view = function (auction){
        Auction.setAuction(auction);
        $location.path('/auctionView');
        return Auction;

    }




}]);

