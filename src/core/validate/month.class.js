/* global tavJS, undefied, Object */

/**
 * month validate test
 * @author Matheus Fidelis <msfidelis01@gmail.com>
 * @version 1.0.0
 * 
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.month = function (data) {
    var result = null;
    var pattern = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
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
