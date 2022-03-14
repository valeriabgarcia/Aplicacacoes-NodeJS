//var readline = require('readline-sync');
var prompt = require('prompt-sync')();

var number = prompt('Digite um numero ');
console.log(`O número digitado é ${number}`);

var sqrt = Math.sqrt(number);

console.log(`A raiz quadrada de ${number} é ${sqrt}`);
