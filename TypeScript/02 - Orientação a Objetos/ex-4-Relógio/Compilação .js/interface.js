"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var relogio_1 = require("../relogio");
/* Considere um relógio que marca horas e minutos. Coube-lhe a tarefa de fornecer informações para
uma interface gráfica de um relógio analógico. Disponha de métodos que retornem a posição de cada
ponteiro do relógio, em graus. Considere doze horas como a posição inicial, ou seja, 0º. Não julgue a
resolução como correta sem comparar o resultado com um relógio real. */
var r1 = new relogio_1.default(13, 40);
var r2 = new relogio_1.default(9, 15);
var r3 = new relogio_1.default(12, 30);
var r4 = new relogio_1.default(17, 55);
var r5 = new relogio_1.default(12, 0);
console.log(r1.toString());
console.log(r2.toString());
console.log(r3.toString());
console.log(r4.toString());
console.log(r5.toString());
