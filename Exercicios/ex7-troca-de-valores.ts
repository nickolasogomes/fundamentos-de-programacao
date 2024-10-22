import * as readline from 'readline';

var input = require("readline-sync");

/* TROCA DE VALORES – Leia dois números inteiros, a e b, e faça com que eles troquem os valores
entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição. */

console.log("--------------------------");
console.log("Exercício 7 - Troca de valores");
console.log("--------------------------");

/* A solução deste exercício fica mais simplificada e clara com o uso de uma variável auxiliar, etretanto
será abordada uma solução matemática para resolvê-lo. */

let a: number = 0,
    b: number = 0;

a = input.questionInt("Informe o valor da variável a: ");
b = input.questionInt("Informe o valor da variável b: ");

a = a + b;
b = a - b;
a = a - b;

console.log(" O novo valor para a variável (a) é: "+a+"\n O novo valor para a variável (b) é: "+b);
