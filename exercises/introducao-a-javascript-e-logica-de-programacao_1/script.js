let num1 = 5;
let num2 = 10;
let num3 = 15;

// Soma
let soma = num1 + num2;
console.log(soma);

let subtracao = num1 - num2;
let divisao = num1 / num2;
let multiplicacao = num1 * num2;
let comparacao = num1 > num2;

let NumeroPar = ((num1 + num2) % 2) == 0;
//Condicional
if (num1 > num2) {
    console.log('num1 wins');
}    else {
    console.log('num2 wins');
}

// Switch

let weekDay = 6;

switch(weekDay) {
    case 1:
        console.log('Domingo')
        break;
    case 2:
        console.log('segunda-feira')
        break;
    case 3:
        console.log('terça-feira')
        break;
}