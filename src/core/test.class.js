/* global tavJS, HTMLFormElement, Object */

/**
 * Get run tests in form (HTMLFormElement)
 * @author Helio de Paula Nogueira <helio.nogueir@gmail.com>
 * @version 1.0.0
 * 
 * @param {formObject} formObject HTMLFormElement
 * @returns {Array} Results of validate
 */
tavJS.test.run = function (formObject) {
    var test = new Object();
    try {
        if (formObject instanceof HTMLFormElement) {
            var index = 0;
            var rowSet = new Array();
            // Data
            tavJS.import('core/data');
            for (var i = 0, element; (element = formObject.elements[i++]); ) {
                var row = tavJS.data.get(element);
                if (null !== row) {
                    rowSet[index++] = row;
                }
            }
            // Validate
            tavJS.import('core/validate');
            test.validate = tavJS.validate.test(rowSet);
        }
    } catch (ex) {
        console.log(ex);
    }
    return test;
};