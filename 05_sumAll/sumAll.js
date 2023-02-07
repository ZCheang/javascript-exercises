const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || typeof(num1) === 'string'
    || typeof(num2) === 'string') {
        return 'ERROR';
    }
    let sum = 0;
    let greater = 0;
    greater = num1 >= num2 ? num1 : num2;
    let lesser = 0;
    lesser = num1 <= num2 ? num1 : num2;
    for (let i = lesser; i <= greater; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
