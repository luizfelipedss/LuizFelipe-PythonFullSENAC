//Atividade do curso//

let num1 = 30;
let num2 = 20;
let operador = '+';
let resultado;

if (operador === '+') {
    resultado = num1 + num2;
}
else if (operador === '-') {
    resultado = num1 - num2;
}
else if (operador === '*') {
    resultado = num1 * num2;
}
else if (operador === '/') {
    resultado = num1 / num2;
}
else {
    resultado = 'Operador invalido';
}

console.log('Resultado:'+ resultado)