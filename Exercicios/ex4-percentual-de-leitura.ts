import * as readline from 'readline';

var input = require("readline-sync");

/* PERCENTUAL DE LEITURA – Leia a página atual e a quantidade de páginas de um livro. Calcule e
exiba o percentual de leitura concluído. */

console.log("--------------------------");
console.log("Exercício 4 - Percentual de Leitura");
console.log("--------------------------");

let pagAtual: number = 0,
    pagTotal: number = 0,
    percentual: number = 0;

pagAtual = input.questionInt("Informe a página atual em sua leitura: ");
pagTotal = input.questionInt("Informe a quantidade total de páginas do livro: ");

percentual = (pagAtual/pagTotal)*100;

console.log("O percentual de leitura é: "+percentual.toFixed(2)+"%");