import * as readline from 'readline';

const input = require("readline-sync");

/* REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
garrafas devem ser compradas. */

console.log("--------------------------------");
console.log("Exercício 1 - Refrigerantes");
console.log("--------------------------------");

let qPessoas: number = 0,
    refrigerantes: number = 0;

qPessoas = input.questionInt("Informe a quantidade de pessoas que confirmaram presença: ");

refrigerantes = Math.ceil((qPessoas*0.3)/2);

console.log("A quantidade de refrigerante(s) a ser(em) comprado(s) é: \n"+refrigerantes);