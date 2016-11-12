/**
 * Created by Daniel on 10.11.2016.
 */

// controller returns all active auctions and saves a given auction to an app factory for use outside of this controller

app.controller('AllViewController', ['$location', '$http', 'Auction', function($location,$http, Auction) {

    var auc = this;
    var allAuctionsPath = "http://localhost:1337/auction/all";

    $http.get(allAuctionsPath).then(function successCallback(response) {
        auc.allAuctions = response.data.auctions;
    });

    auc.view = function (auction){
        Auction.setAuction(auction);
        $location.path('/auctionView');
        return Auction;

    }



}]);