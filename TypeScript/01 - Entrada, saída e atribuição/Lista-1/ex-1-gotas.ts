import * as readline from 'readline';

var input = require("readline-sync");

/* GOTAS – Leia a quantidade de uma solução em mililitros. Converta e exiba essa mesma quantidade
em gotas. Para essa solução, assuma que uma gota equivale a 0,05ml (ou seja, 1ml corresponde a
20 gotas). */


console.log("--------------------------");
console.log("Exercício 1 - Gotas");
console.log("--------------------------");

let gotas: number = 0,
    mililitros: number = 0;

mililitros = input.questionInt("Informe a quantidade da solução em mililitros: ");
gotas = mililitros / 0.05;

console.log("A quantidade de gotas é: "+gotas);

