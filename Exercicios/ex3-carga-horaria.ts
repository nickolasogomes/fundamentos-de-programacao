import * as readline from 'readline';

var input = require("readline-sync");

/* CARGA-HORÁRIA – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos).
Calcule e exiba a carga-horária em horas-relógio (60 minutos). */

console.log("--------------------------");
console.log("Exercício 3 - Carga-Horária");
console.log("--------------------------");

let horasAula: number = 0,
    horas: number = 0;

horasAula = input.questionFloat("Informe a carga horária do curso em horas-aulas: ");
horas = (horasAula*50)/60;

console.log("A carga-horária do curso em horas é:"+horas);