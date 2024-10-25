import * as readline from 'readline';

const input = require("readline-sync");

/* ARREDONDAMENTO – Pesquise, teste e diferencie os métodos de Math: ceil(), floor(),
round() e trunc(). */

let numero: number = 0,
    nome: string = "";

nome = input.question("Para prosseguirmos informe o seu nome: ");
console.log("Certo,",nome, "hoje iremos analisar alguns métodos de 'Math' e entederemos sua usabilidade.");

numero = input.questionFloat("Informe um número com até 2 casas decimais: ");
console.log("\nUtilizando o método Math.ceil o número é arredondado para: ", Math.ceil(numero), 
            "\nUtilizando o método Math.floor o número é arredondado para: ", Math.floor(numero),
            "\nUtilizando o método Math.round o número é arredondado para: ", Math.round(numero),
            "\nUtilizando o método Math.trunc o número é arredondado para: ", Math.trunc(numero)
);
