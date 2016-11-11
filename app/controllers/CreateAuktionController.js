/**
 * Created by Daniel on 10.11.2016.
 */

'use strict';

app.controller('AuktionController', ['$location', '$http', 'User',  function($location, $http, User) {

    var auction = this;
    var auctionPath = 'http://localhost:1337/auction';

    auction.data = {
        bookTitel : '',
        decription : '',
        minPrice : '',
        condition : '',
        date : '',
        userCreate : ''
    };

   auction.createAuction = function(data){
       return $http.post(auctionPath, {
           "bookTitel" : data.bookTitel,
           "description" : data.description,
           "minPrice" : data.minPrice,
           "condition" : data.condition,
           "date" : data.date,
           "userCreate" : User.user
       }).success(function (response){
           alert("Vielen Dank! Die Auktion wurde gestartet");
           $location.path("/allView");
       }).error(function (status){
           alert("Leider hat es ein Problem mit der Erstellung gegeben.");
           $location.path("/allView");
       });

   };


    auction.back = function() {
        $location.path("/allView");
    }

}]);

