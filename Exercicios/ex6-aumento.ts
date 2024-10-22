import * as readline from 'readline';

var input = require("readline-sync");

/* AUMENTO – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de
12,5%. */

console.log("--------------------------");
console.log("Exercício 6 - Aumento");
console.log("--------------------------");

let salario: number = 0, 
    reajustado: number = 0;

salario = input.questionFloat("Informe o valor do seu salário: ");
reajustado = salario * 1.125;

console.log("Fique feliz, seu novo salário é: R$ "+reajustado.toFixed(2));