import * as readline from 'readline';

const input = require("readline-sync");

let ovos: number = 0, 
    duzia: number = 0,
    meiasD: number = 0,
    resto: number = 0;

ovos = input.questionInt("Digite a quantidade produzida: ");

duzia = Math.trunc((ovos/2)/12);
resto = ovos - (duzia * 12);

meiasD = Math.trunc(resto/6);
resto = resto % 6;

console.log("\nDuzias: "+ duzia, "\nMeias-duzias: "+meiasD, "\nResto: "+resto);