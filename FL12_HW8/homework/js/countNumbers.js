function makeNumber(str) {
    const arraySplit = str.split('');
    let array = [];

    for (let i = 0; i < arraySplit.length; i++) {
        if (isNaN(arraySplit[i]) === false) {
            array.push(arraySplit[i]);
        }
    }
    return array.join('');
}

function countNumbers(str) {
    let result = {};

    makeNumber(str).split('').forEach(function (num1) {
        if (result[num1] !== undefined) {
            ++result[num1];
        } else {
            result[num1] = 1;
        }
    });
    return result;
}

countNumbers('erer384jj4444666888jfd123');