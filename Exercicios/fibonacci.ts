import * as readline from 'readline';
//var input = require("readline-sync");

console.log("--------------------------");
console.log("Exercício - Fibonacci");
console.log("--------------------------");

let a: number = 0;
let b: number = 1;
let c: number = 0;
let entrada: number = 25;
// Valor da variável pode ser alterado solicitando uma entrada ao usuário 
//entrada = input.questionInt("Informe o valor do número a ser verificado: ");
let fibonacci: string = "";
let pertence: boolean = false;

fibonacci += a + " " + b;

for(let i = 1; c< entrada; i++){
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


