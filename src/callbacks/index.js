//reto-> sumar 2 elementos.

function sum(num1, num2) {
    return num1 + num2;
}

function res(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));
console.log(calc(2, 2, res));
console.log(calc(2, 2, div));
console.log(calc(2, 2, mult));

setTimeout(() => {
    console.log('Hola JavaScript');
}, 3000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, "Oscar");