/**
 * Created by Daniel on 10.11.2016.
 */
'use strict';

app.controller('NavBarController', ['$location', function ($location) {

    var nav = this;
    nav.createAuction = function () {
        $location.path('/createAuction');
    }

}]);