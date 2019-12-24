let a = +prompt('Input a: ', 0);
console.log('a: ' + a);
let b = +prompt('Imput b: ', 0);
console.log('b: ' + b);
let c = +prompt('Input c: ', 0);
console.log('c: ' + c);

let D, X, X1, X2;

if (parseInt(a) !== a || parseInt(b) !== b || parseInt(c) !== c || !a || !b || !c) {
    console.log('Invalid input data');
} else {
    D = b*b - 4 * a * c;

    if (D < 0) {
        console.log("Sorry, but we don't have solution: D < 0")
    } else if (D === 0){
        X = -b / (2 * a);
        console.log(`So, discriminant is equal zero. x = ${Math.round(X)}`)
    } else {
        X1 = -b * Math.sqrt(D) / (2 * a);
        X2 = -b * Math.sqrt(D) / (2 * a); 
        console.log(`Discriminant is more 0. So, x1: ${Math.round(X1)} and x2: ${Math.round(X2)}`);
    }
}
