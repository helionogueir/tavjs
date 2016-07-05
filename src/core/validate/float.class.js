/* global tavJS, undefined, Object */

/**
 * Email validate test
 * @author Helio de Paula Nogueira <helio.nogueir@gmail.com>
 * @version 1.0.0
 *
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.float = function (data) {
    var result = null;
    /**
     * Construct Regexp of validate
     * 
     * @param {object} data Parameter of validate
     * @returns {RegExp} Return RegExp
     */
    this.style = function (data) {
        var pattern = new RegExp(/^(\d{1,})\.(\d{2})$/);
        if ((undefined !== data.behavior) && ('' !== data.behavior) && (null !== data.behavior)) {
            if ((undefined !== data.behavior.comma) && ('' !== data.behavior.comma) && (null !== data.behavior.comma)) {
                pattern = new RegExp('^(\\d{1,}),(\\d{1,' + data.behavior.comma + '})$');
            }
            if ((undefined !== data.behavior.dot) && ('' !== data.behavior.dot) && (null !== data.behavior.dot)) {
                pattern = new RegExp('^(\\d{1,})\\.(\\d{1,' + data.behavior.dot + '})$');
            }
        }
        return pattern;
    };
    try {
        var pattern = this.style(data);
        if ((data instanceof Object) && (undefined !== data.name) && (undefined !== data.value)) {
            var signalPattern = /^(\+|\-|)(.*)$/;
            var value = data.value.replace(signalPattern, '$2');
            result = new Object();
            result[data.name] = new Object({
                'id': ((undefined !== data.id)) ? data.id : '',
                'name': data.name,
                'status': (('' !== value)) ? pattern.test(value) : true
            });
        }
    } catch (ex) {
        console.log(ex);
    }
    return result;
};
