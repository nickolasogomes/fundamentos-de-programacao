import * as readline from 'readline';

const input = require("readline-sync");

/* ESCADA – Conforme o exemplo da figura abaixo, leia a altura do prédio e a distância de afastamento
da escada. Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do
prédio. */

console.log("--------------------------------");
console.log("Exercício 7 - Escada");
console.log("--------------------------------");

let altura:number = 0,
    distancia: number = 0,
    hipotenusa: number = 0;

distancia = input.questionFloat("Digite a distância de afastamento da escada: ");    
altura = input.questionFloat("\nDigite a altura do prédio em metros: ");

hipotenusa = Math.hypot(distancia, altura);

console.log("\nO comprimento mínimo da escada é: ", hipotenusa.toFixed(2)+"m");
