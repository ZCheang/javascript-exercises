const removeFromArray = function(list, ...values) {
    for (let i = 0; i < values.length; i++) {
        list = list.filter(items => !(items === values[i]));
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
