/* global tavJS */

/**
 * email validate test
 * 
 *Created by : Emerson Silva - 04/06/2016
 *
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.email = function (data) {
    var result = null;
    var pattern = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/; 
    if ((data instanceof Object) && (undefined !== data.name) && (undefined !== data.value)) {
        result = new Object();
        result[data.name] = new Object({
            'id': ((undefined !== data.id)) ? data.id : '',
            'name': data.name,
            'status': (('' !== data.value)) ? pattern.test(data.value) : true
        });
    }
    return result;
};