import * as readline from 'readline';

const input = require("readline-sync");

/* ÂNGULO – Leia um número real que denota um ângulo (em graus). Feito isso, calcule e exiba:
(a) O ângulo correspondente menor que 360º. Por exemplo, o ângulo de 1.090º perfaz três voltas
completas e corresponde ao ângulo de 10º;
(b) O ângulo em radianos. Use a constante PI predefinida; e
(c) O seno, o cosseno e a tangente desse ângulo. */

console.log("--------------------------------");
console.log("Exercício 4 - Ângulo");
console.log("--------------------------------");

let angulo: number = 0,
    correspondente: number = 0,
    radianos: number = 0,
    seno: number = 0,
    cosseno: number = 0,
    tangente: number = 0;

angulo = input.questionFloat("Digite o ângulo em graus: ");

correspondente = angulo % 360;
radianos = (angulo * Math.PI)/180;
seno = Math.sin(angulo);
cosseno = Math.cos(angulo);
tangente = Math.tan(angulo);

console.log("\nÂngulo informado: ",angulo+"°",
    "\nCorrespondente:", correspondente+"°",
    "\nEm radianos:", radianos.toFixed(3),
    "\nSeno:", seno.toFixed(3),
    "\nCosseno:",cosseno.toFixed(3),
    "\nTangente:", tangente.toFixed(3)
)

