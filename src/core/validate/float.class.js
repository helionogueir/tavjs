
tavJS.validate.float = function (data) {
    var result = null;
    var pattern = /(\d{1,2}\.(?=\d{1,2}))/;
    
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
