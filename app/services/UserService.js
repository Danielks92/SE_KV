/**
 * Created by Daniel on 11.11.2016.
 */
/**
 * Created by Daniel on 07.11.2016.
 */

app.factory('UserService', function() {
    var savedData = {}
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});