import * as readline from 'readline';

var input = require("readline-sync"); 

/* CAIXA ELETRÔNICO – Leia um número inteiro referente ao valor de um saque em reais (R$).
Apresente a composição desse valor pelas notas e moeda existentes. Sempre opte primeiro por
notas de maior valor. Obedeça o comportamento e as mensagens de saída do exemplo.
Digite o valor do saque: 383 <enter>
Dinheiro retirado:
3 nota(s) de R$ 100
1 nota(s) de R$ 50
1 nota(s) de R$ 20
1 nota(s) de R$ 10
0 nota(s) de R$ 5
1 nota(s) de R$ 2
1 moeda(s) de R$ 1 */

console.log("--------------------------------");
console.log("Exercício 2 - Caixa Eletrônico");
console.log("--------------------------------");

let saque: number = 0,
    n100: number = 0,
    n50: number = 0,
    n20: number = 0,
    n10: number = 0,
    n5: number = 0,
    n2: number = 0,
    m1: number = 0, 
    resto: number = 0;

saque = input.questionInt("Informe o valor do saque a ser realizado:");

n100 = Math.trunc(saque / 100);
resto = saque % 100;

n50 = Math.trunc(resto / 50);
resto = saque % 50;

n20 = Math.trunc(resto / 20);
resto = saque % 20;

n10 = Math.trunc(resto / 10);
resto = saque % 10;

n5 = Math.trunc(resto / 5);
resto = saque % 5;

n2 = Math.trunc(resto / 2);
resto = saque % 2;

m1 = resto;

console.log(
  "Dinheiro retirado:\n" +
    n100 +
    " nota(s) de R$ 100,00\n" +
    n50 +
    " nota(s) de R$ 50,00\n" +
    n20 +
    " nota(s) de R$ 20,00\n" +
    n10 +
    " nota(s) de R$ 10,00\n" +
    n5 +
    " nota(s) de R$ 5,00\n" +
    n2 +
    " nota(s) de R$ 2,00\n" +
    m1 +
    " moeda(s) de R$ 1,00",
);