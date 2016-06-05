tavJS.validate.url = function (data) {
    var result = null;
    var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    
    if ((data instanceof Object) && (undefined !== data.name) && (undefined !== data.value)) {
        result = new Object();
        result[data.name] = new Object({
            'id': ((undefined !== data.id)) ? data.id : '',
            'name': data.name,
            'status': (('' !== data.value)) ? pattern.test(data.value) : true
        });
    }
    return result;
};