import * as readline from 'readline';

const input = require("readline-sync");

/* TEMPO EM SEGUNDOS - Implemente um aplicativo que, dado um número inteiro que 
representa uma quantidade de tempo transcorrida em segundos, calcule e retorne 
esse valor decomposto, respectivamente, em dias, horas, minutos e segundos. Siga
estritamente o comportamento da interação exemplificado abaixo. As entradas variam
e são fornecidas pelo usuário.

Exemplo de Interação: 
Digite o tempo em segundos: 130987
Isso equivale a...

1 dia(s)
12 hora(s)
23 minuto(s)
7 segundo(s) */

let segundos: number = 0, 
    dias: number = 0, 
    horas: number = 0,
    minutos: number = 0,
    resto: number = 0;

segundos = input.questionInt("Informe o tempo em segundos: ");

dias = Math.trunc(segundos / (24*60*60));
resto = segundos % (24*60*60);

horas = Math.trunc(resto / (60*60));
resto = resto % (60*60);

minutos = Math.trunc(resto / 60);
resto = resto % 60;

segundos = resto;

console.log("Isso equivale a...\n",
    dias,"dia(s)\n", 
    horas, "hora(s)\n", 
    minutos, "minuto(s)\n",
    segundos, "segundo(s)"  
)

