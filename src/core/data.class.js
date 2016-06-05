/* global tavJS, undefined, console */

/**
 * Mount object with data of a element
 * @author Helio de Paula Nogueira <helio.nogueir@gmail.com>
 * @version 1.0.0
 * 
 * @parameter {HTMLFormElement} elementObject
 * @returns {object} Values of element
 */
tavJS.data.get = function (elementObject) {
    var data = null;
    if (undefined !== elementObject.tagName) {
        switch (elementObject.tagName.toLowerCase()) {
            case 'input':
            case 'textarea':
                tavJS.import('core/data/value');
                data = tavJS.data.value(elementObject);
                break;
            default:
                console.log('(' + elementObject.tagName.toLowerCase() + ') Tagname dont have class');
                break;
        }
    }
    return data;
};