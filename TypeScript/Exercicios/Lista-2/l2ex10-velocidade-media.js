"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require("readline-sync");
/* VELOCIDADE MÉDIA - Leia uma distância (em quilômetros) e o tempo transcorrido (em horas).
Calcule e retorne a velocidade média atingida. Justifique o que acontece se o tempo digitado for zero. */
console.log("--------------------------------");
console.log("Exercício 10 - Velocidade Média");
console.log("--------------------------------");
var distancia = 0, tempo = 0, velocidadeMedia = 0;
distancia = input.questionFloat("\nDigite a distância percorrida em quilômetros: ");
tempo = input.questionFloat("Digite o tempo transcorrido em horas: ");
velocidadeMedia = distancia / tempo;
console.log("A velocidade média é: ", velocidadeMedia + "km/h");
/* A divisão por zero é uma indeterminação matemática, portanto */
