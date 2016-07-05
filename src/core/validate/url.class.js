/* global tavJS, undefied, Object */

/**
 * url validate test
 * @author Matheus Fidelis <msfidelis01@gmail.com>
 * @version 1.0.0
 * 
 * @param {object} data Element that will test
 * @returns {object} Results of validate
 */
tavJS.validate.url = function (data) {
    var result = null;
    /**
     * Construct Regexp of validate
     * 
     * @param {object} data Parameter of validate
     * @returns {RegExp} Return RegExp
     */
    this.prefix = function (data) {
        var pattern = new RegExp(/^([a-z]{3,9}:\/\/)+(.*)$/);
        if ((undefined !== data.behavior) && ('' !== data.behavior) && (null !== data.behavior)) {
            if ((undefined !== data.behavior.prefix) && ('' !== data.behavior.prefix) && (null !== data.behavior.prefix)) {
                switch (data.behavior.prefix) {
                    case 'http':
                        pattern = new RegExp(/^((http)|(https):\/\/)+(.*)$/);
                        break;
                    case 'ftp':
                        pattern = new RegExp(/^((ftp):\/\/)+(.*)$/);
                        break;
                    case 'all':
                        pattern = new RegExp(/^([a-z]{3,9}:\/\/)+(.*)$/);
                        break;
                }
            }
        }
        return pattern;
    };
    try {
        var pattern = this.prefix(data);
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
