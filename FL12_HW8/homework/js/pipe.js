function addOne(num) {    
    return num + 1;
}
function pipe(num, ...rest) {
    for(let i = 0; i < rest.length; i++){
        num = rest[i](num);
    }
    return num;
}

pipe(1, addOne, addOne);