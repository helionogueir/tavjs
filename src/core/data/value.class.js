/* global tavJS, undefined, Object */

/**
 * Mount object with value of element
 * @author Helio de Paula Nogueira <helio.nogueir@gmail.com>
 * @version 1.0.0
 * 
 * @parameter {HTMLFormElement} elementObject
 * @returns {object} Values of element
 */
tavJS.data.value = function (elementObject) {
    var data = new Object();
    // Classname
    data.classname = null;
    if ((undefined !== elementObject.className) && ('' !== elementObject.className) && (null !== elementObject.className)) {
        data.classname = elementObject.className;
    }
    // Name
    data.name = null;
    if ((undefined !== elementObject.name) && ('' !== elementObject.name) && (null !== elementObject.name)) {
        data.name = elementObject.name;
    }
    // ID
    data.id = null;
    if ((undefined !== elementObject.id) && ('' !== elementObject.id) && (null !== elementObject.id)) {
        data.id = elementObject.id;
    }
    // Value
    data.value = null;
    if ((undefined !== elementObject.value)) {
        data.value = elementObject.value;
    }
    return data;
};
