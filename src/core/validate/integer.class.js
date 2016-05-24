/* global tavJS */

/**
 * Integer validate test
 * 
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.integer = function (data) {
    var result = null;
    var pattern = /(\d)/gi;
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
