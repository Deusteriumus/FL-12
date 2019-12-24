let a = +prompt('Input the first side: ', 0);
console.log('a:' + a);
let b = +prompt('Input the second side:', 0);
console.log('b:' + b);
let c = +prompt('Input the third side:', 0);
console.log('c:' + c);

if ( parseInt(a) !== a || parseInt(b) !== b || parseInt(c) !== c || typeof a === 'undefined' || typeof b === 'undefined'
|| typeof c === 'undefined') {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b < c || a + c < b || b + c < a) {
    alert('Triangle doesn’t exist');
} else if (a === b && b === c) {
    console.log(`Equilateral triangle: a = ${a}; b = ${b}; c = ${c}`);
} else if (a === b || b === c || a === c) {
    console.log(`Isosceles triangle: a = ${a}; b = ${b}; c = ${c}`);
} else if (a !== b && a !== c && b !== c) {
    console.log(`Scalene triangle:  a = ${a}; b = ${b}; c = ${c}`);
}