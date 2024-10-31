import * as readline from 'readline';

const input = require("readline-sync");

/* TORNEIO – Leia a pontuação dos cinco finalistas de um torneio de videogame (números inteiros e
não estarão em ordem). Apresente a pontuação do primeiro e do último colocado. */

console.log("--------------------------------");
console.log("Exercício 6 - Torneio");
console.log("--------------------------------");

let p1: number = 0,
    p2: number = 0,
    p3: number = 0,
    p4: number = 0,
    p5: number = 0,
    primeiro: number = 0,
    ultimo: number = 0;

p1 = input.questionInt("\nDigite a primeira pontuação a ser lida:");
p2 = input.questionInt("Digite a segunda pontuação a ser lida:");
p3 = input.questionInt("Digite a terceira pontuação a ser lida:");
p4 = input.questionInt("Digite a quarta pontuação a ser lida:");
p5 = input.questionInt("Digite a quinta pontuação a ser lida:");

primeiro = Math.max(p1,p2,p3,p4,p5);
ultimo = Math.min(p1,p2,p3,p4,p5);

console.log("\nO primeiro colocado fez:",primeiro,"pontos",
    "\nO último colodado fez:",ultimo,"pontos"
);

