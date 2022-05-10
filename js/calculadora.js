
console.log('Estamos en el archivo de la Calculadora');

let numeroUno = Number(prompt('Ingresa un número para realizar tu cálculo: '));
let numeroDos = Number(prompt('Ingresa otro número para realizar tu cálculo: '));

console.log('EL primer número es: ', numeroUno);
console.log('El segundo número es: ', numeroDos);

function escribir(r) {
    console.log('El resultado es: ', r);    
}

function Sumar(a, b) {
    let resultado = a + b;
    escribir(resultado)
}


function Resta(a, b) {
    let resultado = a - b;
}

Sumar(numeroUno, numeroDos);



/* function calcular(a, b, c) {


    
} */
