import * as readline from 'readline';

var input = require("readline-sync");

/* DÍGITO VERIFICADOR – Leia o número de uma conta corrente, que tem até seis dígitos
(desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o
seguinte algoritmo:
– Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
– Some os resultados das multiplicações;
– Calcule o resto da divisão dessa soma por 10;
– Subtraia esse valor de 10.
– Assuma o resultado como dígito verificador da conta.
Exemplo para a conta 789123:

7 8 9 1 2 3 = número da conta
| | | | | |
x1 x2 x3 x4 x5 x6
| | | | | |
=7 =16 =27 =4 =10 =18 -> soma = 82
resto da divisão de 82 por 10 = 2
dígito verificador = (10 – 2) = 8
A conta, com o dígito verificador, será: 789123-8. */

console.log("--------------------------");
console.log("Exercício 10 - Dígito Verificador");
console.log("--------------------------");

let conta: number = 0,
    d1: number = 0,  
    d2: number = 0,
    d3: number = 0,
    d4: number = 0,
    d5: number = 0,
    d6: number = 0,
    resto : number,
    soma: number = 0,
    digito: number = 0;

conta = input.questionInt("Informe o número da conta corrente:");

d1 = Math.trunc(conta / 100000);
resto = conta % 100000;

d2 = Math.trunc(resto / 10000);
resto = conta % 10000;

d3 = Math.trunc(resto / 1000);
resto = conta % 1000;

d4 = Math.trunc(resto / 100);
resto = conta % 100;

d5 = Math.trunc(resto / 10);
resto = conta % 10;

d6 = resto;   // A variável d6 é opcional.


 /* console.log(d1);
 console.log(d2);
 console.log(d3);
 console.log(d4);
 console.log(d5);
 console.log(d6); */
 

soma = d1 + (d2*2) + (d3*3) + (d4*4) + (d5*5) + (d6*6);

resto = soma % 10;

digito = 10 - resto;

console.log("O dígito verificador da conta é:\n"+digito);
