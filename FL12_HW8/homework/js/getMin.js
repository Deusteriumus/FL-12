function getMin() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i])
    }
    let compare = function (num1, num2) {
        return num1 - num2;
    }
    return array.sort(compare)[0];
}

getMin(3, 0, -3);