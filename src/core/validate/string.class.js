/* global tavJS, undefied, Object */

/**
 * String validate test
 * @author Matheus Fidelis <msfidelis01@gmail.com>
 * @version 1.0.0
 * 
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.string = function (data) {
    var result = null;
    /**
     * Construct Regexp of validate
     * 
     * @param {object} data Parameter of validate
     * @returns {RegExp} Return RegExp
     */
    this.input = function (data) {
        var pattern = new RegExp(/^(.*)$/);
        if ((undefined !== data.behavior) && ('' !== data.behavior) && (null !== data.behavior)) {
            if ((undefined !== data.behavior.input) && ('' !== data.behavior.input) && (null !== data.behavior.input)) {
                switch (data.behavior.input) {
                    case 'alphanum':
                        pattern = new RegExp(/^[a-z0-9 ]+$/i);
                        break;
                    case 'none':
                        pattern = new RegExp(/^(.*)$/);
                        break;
                }
            }
        }
        return pattern;
    };
    try {
        var pattern = this.input(data);
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
