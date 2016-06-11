/* global undefied, console, eval */

/**
 * TavJS - Test Automated and Validate in JavaScrit
 * 
 * @author Helio de Paula Nogueira <helio.nogueir@gmail.com>
 * @version 1.0.0
 */
var tavJS = new function () {
    /**
     * Parameters of application
     */
    this.parameter = new Object();
    /**
     * Control of data and values
     */
    this.data = new Object();
    /**
     * Control mask of values
     */
    this.mask = new Object();
    /**
     * Control states of values
     */
    this.state = new Object();
    /**
     * Rules of validate
     */
    this.validate = new Object();
    /**
     * Rules of test
     */
    this.test = new Object();
    /**
     * Construct validate class
     * 
     * @param {object} parameter Parameter of application
     * @returns {null}
     */
    this.make = function (parameter) {
        if (tavJS.mount(parameter)) {
            tavJS.import('core/test');
        }
        return null;
    };
    /**
     * Mount parameters
     * 
     * @param {object} parameter Parameter of application
     * @returns {bool} True params is ok, False is not ok
     */
    this.mount = function (parameter) {
        var auth = false;
        try {
            // parameter <Object>
            if (parameter instanceof Object) {
                // pathRoot <String>
                if ((undefined !== parameter.pathRoot) && ('' !== parameter.pathRoot) && (null !== parameter.pathRoot)) {
                    tavJS.parameter.pathRoot = parameter.pathRoot;
                    auth = true;
                }
            }
        } catch (ex) {
            console.log(ex);
        }
        return auth;
    };
    /**
     * Import class
     * @param {string} filename Name of file that will import
     * @returns {bool} True load file, False no load file
     */
    this.import = function (filename) {
        var auth = false;
        try {
            if ((undefined !== filename) && ('' !== filename) && (null !== filename)) {
                var url = tavJS.parameter.pathRoot + '/' + filename + '.class.js';
                if (!tavJS.isLoad(url)) {
                    var head = window.document.head;
                    var script = window.document.createElement('script');
                    script.src = url;
                    head.appendChild(script);
                    auth = tavJS.isLoad(url);
                }
            }
        } catch (ex) {
            console.log(ex);
        }
        return auth;
    };
    /**
     * Confirm if url did load
     * 
     * @param {string} url URL of filename
     * @returns {bool} True load file, False no load file
     */
    this.isLoad = function (url) {
        var auth = false;
        try {
            if ((undefined !== url) && ('' !== url) && (null !== url)) {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', url, false);
                ajax.onreadystatechange = function () {
                    var script = ajax.response || ajax.responseText;
                    if (ajax.readyState === 4) {
                        switch (ajax.status) {
                            case 200:
                                eval.apply(window, [script]);
                                auth = true;
                                break;
                            default:
                                auth = false;
                                console.log('(' + ajax.status + ') ' + url);
                                break;
                        }
                    }
                };
                ajax.send(null);
            }
        } catch (ex) {
            console.log(ex);
        }
        return auth;
    };
};