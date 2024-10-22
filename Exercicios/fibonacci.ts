import * as readline from 'readline';
//var input = require("readline-sync");

/*Dado a sequência de Fibonacci, onde se inicia por O e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definida na código; */

console.log("--------------------------");
console.log("Exercício - Fibonacci");
console.log("--------------------------");

let a: number = 0,
    b: number = 1,
    c: number = 0,
    entrada: number = 25;

//entrada = input.questionInt("Informe o valor do número a ser verificado: ");
let fibonacci: string = "",
    pertence: boolean = false;

fibonacci += a + " " + b;

for(let i = 1; c < entrada; i++){
    c = a + b;
    if(entrada == c){
        pertence = true;
    }
    fibonacci += " " + c;
    a = b;
    b = c;
}

console.log(fibonacci);

if(pertence){
    console.log("O número "+entrada+ " pertence a sequência de fibonacci.");
} else {
    console.log("O número "+entrada+ " não pertence a sequência de fibonacci.");
}


