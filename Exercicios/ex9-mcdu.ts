import * as readline from 'readline';

var input = require("readline-sync");

/* MCDU – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por
   linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum
   número maior, ou negativo, será digitado. */

console.log("--------------------------");
console.log("Exercício 9 - MCDU");
console.log("--------------------------");

let n: number = 0,
    m: number = 0,
    c: number = 0,
    d: number = 0,
    u: number = 0;

n = input.questionInt("Informe um número de até 4 dígitos: ");

m = Math.trunc(n / 1000);
c = Math.trunc((n % 1000) / 100);
d = Math.trunc(((n % 1000) % 100) / 10);
u = Math.trunc(((n % 1000) % 100) % 10);

console.log("O número "+n+" possui: \n"+m+" Milhar(es);\n"+c+" Centena(s);\n"+d+" Dezena(s);\n"+u+" Unidade(s).");
