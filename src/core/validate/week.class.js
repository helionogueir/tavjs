/* global tavJS, undefied, Object */

/**
 * week validate test
 * @author Matheus Fidelis <msfidelis01@gmail.com>
 * @version 1.0.0
 * 
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.week = function (data) {
    var result = null;
    /**
     * Construct Regexp of validate
     * 
     * @param {object} data Parameter of validate
     * @returns {RegExp} Return RegExp
     */
    this.digit = function (data) {
        var pattern = new RegExp(/^((01|1)|(02|2)|(03|3)|(04|4)|(05|5)|(06|6)|(07|7))$/);
        if ((undefined !== data.behavior) && ('' !== data.behavior) && (null !== data.behavior)) {
            if ((undefined !== data.behavior.digit) && ('' !== data.behavior.digit) && (null !== data.behavior.digit)) {
                switch (data.behavior.digit) {
                    case 'one':
                        pattern = new RegExp(/^((1)|(2)|(3)|(4)|(5)|(6)|(7))$/);
                        break;
                    case 'two':
                        pattern = new RegExp(/^((01)|(02)|(03)|(04)|(05)|(06)|(07))$/);
                        break;
                    case 'both':
                        break;
                }
            }
        }
        return pattern;
    };
    try {
        var pattern = this.digit(data);
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
