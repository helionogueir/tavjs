/* global tavJS */

/**
 * Test elements with validate
 * 
 * @param {Array} rowSet list of elements
 * @returns {Array} Results of validate
 */
tavJS.validate.test = function (rowSet) {
    var index = 0;
    var data = new Array();
    var pattern = /^(tavjs)\-(validate)\-(.*)$/i;
    if ((rowSet instanceof Array) && rowSet.length) {
        for (var i = 0, row; row = rowSet[i++]; ) {
            if ((undefined !== row.classname) && ('' !== row.classname) && (null !== row.classname)) {
                var classnameList = row.classname.split(' ');
                if ((classnameList instanceof Array) && classnameList.length) {
                    for (var k = 0, classname; classname = classnameList[k++]; ) {
                        if (pattern.test(classname)) {
                            var classImport = classname.replace(pattern, '$3');
                            tavJS.import('core/validate/' + classImport);
                            var test = tavJS.validate[classImport](row);
                            if (null !== test) {
                                data[index++] = test;
                            }
                        }
                    }
                }
            }
        }
    }
    return data;
};