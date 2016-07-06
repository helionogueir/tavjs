/* global tavJS, undefined */

/**
 * Validate each element of TavJS
 * @author Helio de Paula Nogueira <helio.nogueir@gmail.com>
 * @version 1.0.0
 * 
 * @param {Array} rowSet list of elements
 * @returns {Array} Results of validate
 */
tavJS.state.block = function (formObject, state) {
    try {
        if (formObject instanceof HTMLFormElement) {
            tavJS.import('core/data');
            var pattern = new RegExp(/(tavjs-state-block-eligible)/i)
            for (var i = 0, element; (element = formObject.elements[i++]); ) {
                var elementObject = tavJS.data.get(element);
                if (pattern.test(elementObject.classname)) {
                    if (state) {
                        element.setAttribute('disabled', 'disabled');
                    } else {
                        element.removeAttribute('disabled');
                    }
                }
            }
        }
    } catch (ex) {
        console.log(ex);
    }
    return null;
};