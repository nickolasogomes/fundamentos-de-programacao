import * as readline from 'readline';

var input = require("readline-sync");

//QUADRADO – Leia um número inteiro, calcule e exiba o seu quadrado.

console.log("--------------------------");
console.log("Exercício 8 - Quadrado");
console.log("--------------------------");

let n: number = 0,
    quadrado: number = 0;

n = input.questionInt("Informe um número: ");
quadrado = n **(2);

console.log("O quadrado de "+n+" é: "+quadrado);
