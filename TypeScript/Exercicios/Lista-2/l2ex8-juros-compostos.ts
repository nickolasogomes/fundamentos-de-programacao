import * as readline from 'readline';

const input = require("readline-sync");

/* JUROS COMPOSTOS – Leia o valor investido em uma aplicação, a taxa de juros (ao mês, em
percentual) e a quantidade de meses transcorridos. Exiba o montante depois de transcorrido o tempo,
considerando duas casas decimais depois da vírgula. Use o método Number.toFixed(). */

console.log("--------------------------------");
console.log("Exercício 8 - Juros Compostos");
console.log("--------------------------------");

let capital: number = 0, 
    taxa: number = 0, 
    meses: number = 0,
    montante: number = 0;

capital = input.questionFloat("\nDigite o valor investido: ");
taxa = input.questionFloat("Digite o valor da taxa de juros ao mês: ")
meses = input.questionFloat("Digite o tempo em que será feita a plicação em meses: ");

montante = capital * ((1 + taxa) ** meses);

console.log("\nO valor do montante acumulado é: R$ ",montante.toFixed(2));
