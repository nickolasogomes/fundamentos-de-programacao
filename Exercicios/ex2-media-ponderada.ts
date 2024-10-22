import * as readline from 'readline';

var input = require("readline-sync");

/* MÉDIA PONDERADA – Leia as notas de quatro avaliações e calcule a média ponderada, sabendo-se
que os pesos são respectivamente: 1, 2, 3 e 4. */

console.log("--------------------------");
console.log("Exercício 2 - Média Ponderada");
console.log("--------------------------");

let n1: number = 0,
    n2: number = 0,
    n3: number = 0,
    n4: number = 0,
    media: number = 0;

n1 = input.questionFloat("Informe a primeira nota:");
n2 = input.questionFloat("Informe a segunda nota:")*2;
n3 = input.questionFloat("Informe a terceira nota:")*3;
n4 = input.questionFloat("Informe a quarta nota:")*4;

media = ((n1 + n2 + n3 + n4)/10);

console.log("A média ponderada é: "+media.toFixed(2));
