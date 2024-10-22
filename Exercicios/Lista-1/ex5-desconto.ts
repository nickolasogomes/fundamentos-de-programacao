import * as readline from 'readline';

var input = require("readline-sync");

/* DESCONTO – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de
35%. */

console.log("--------------------------");
console.log("Exercício 5 - Desconto");
console.log("--------------------------");

let preco: number = 0,
    valorFinal: number = 0;

preco = input.questionFloat("Informe o valor do produto a ser aplicado desconto: ");
valorFinal = preco * 0.65;

console.log("O valor final do produto com desconto é de: R$ "+valorFinal.toFixed(2));