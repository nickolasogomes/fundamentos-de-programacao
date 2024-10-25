import * as readline from 'readline';

const input = require("readline-sync");

/* PISCINA – Leia a altura e o raio (ambos em metros) de uma piscina redonda. Calcule e mostre a
quantidade de água (em litros) necessária para encher essa piscina completamente. Arredonde o
valor para cima. */

console.log("--------------------------------");
console.log("Exercício 5 - Piscina");
console.log("--------------------------------");

let altura: number = 0,
    raio: number = 0,
    volume: number =0;

altura = input.questionFloat("\nDigite a altura da piscina em metros: ");
raio = input.questionFloat("\nDigite o valor do raio da piscina em metros: ");

volume = Math.ceil(Math.PI * altura * (raio **(2)))*1000;

console.log("\nA quantidade de água para encher a piscina é:",volume+"l");