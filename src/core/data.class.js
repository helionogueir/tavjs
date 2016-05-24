/* global tavJS */

/**
 * Get data
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