/* global tavJS, undefined, Object */

/**
 * Year validate test
 * @author Matheus Fidelis <msfidelis01@gmail.com>
 * @version 1.0.0
 *
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.year = function (data) {
    var result = null;
    /**
     * Construct Regexp of validate
     * 
     * @param {object} data Parameter of validate
     * @returns {RegExp} Return RegExp
     */
    this.format = function (data) {
        var pattern = new RegExp(/^(\d{1,4})$/);
        if ((undefined !== data.behavior) && ('' !== data.behavior) && (null !== data.behavior)) {
            if ((undefined !== data.behavior.format) && ('' !== data.behavior.format) && (null !== data.behavior.format)) {
                pattern = new RegExp('^(\\d{' + data.behavior.format.length + '})$');
            }
        }
        return pattern;
    };
    try {
        var pattern = this.format(data);
        if ((data instanceof Object) && (undefined !== data.name) && (undefined !== data.value)) {
            result = new Object();
            result[data.name] = new Object({
                'id': ((undefined !== data.id)) ? data.id : '',
                'name': data.name,
                'status': (('' !== data.value)) ? pattern.test(data.value) : true
            });
        }
    } catch (ex) {
        console.log(ex);
    }
    return result;
};
