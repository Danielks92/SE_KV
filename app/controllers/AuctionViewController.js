/**
 * Created by Daniel on 10.11.2016.
 */
'use strict';


// shows a specific auction and give the user the possibility to give an offer

app.controller('AuctionViewController', ['$location', '$http', 'Auction', 'User', function($location,$http, Auction, User) {

    var avc = this;
    var updatePath = "http://localhost:1337/auctionUpdate"

    avc.auction = {
        title: Auction.auc.bookTitle,
        description: Auction.auc.description,
        minPrice: Auction.auc.minPrice,
        condition: Auction.auc.condition,
        date: Auction.auc.date,
        userCreate: Auction.auc.userCreate,
        currentPrice : Auction.auc.currentPrice,
        currentUser : Auction.auc.currentUser
    };

    avc.newPrice = {
        user : '',
        currentPrice: ''
    }


    avc.getDays = function(date){
        var diff = Math.round((Math.abs(new Date()-new Date(date))/ (1000*60*60*24)));
        return diff;
    };

    function getDate(dateStr) {
        var parts = dateStr.split(".");
        console.log(parts[2] + " " + parts[1] + " " + parts[0]);
        return new Date(parts[2], parts[1] - 1, parts[0]);
    };

    avc.currentPrice = function (data) {
        if (data.currentPrice >= Auction.auc.minPrice) {

            if (User.usr != null) {
                return $http.post(updatePath, {
                    "_id": Auction.auc._id,
                    "currentUser": User.usr.username,
                    "currentPrice": data.currentPrice
                }).success(function (response) {
                    alert("Vielen Dank! Ihr Gebot wurde abgegeben.");
                    $location.path("/allView");
                }).error(function (status) {
                    alert("Leider hat es ein Problem gegeben, überprüfen Sie Ihr Gebot");
                    $location.path("/allView");
                })
            } else {
                alert("Es scheint so als seien Sie nicht angemeldet. Bitte melden Sie sich an um ein Gebot abzugeben.")
            }
        } else {
            alert("Ihr Angebot entspricht nicht dem min Preis.")
        }
    }

}]);

