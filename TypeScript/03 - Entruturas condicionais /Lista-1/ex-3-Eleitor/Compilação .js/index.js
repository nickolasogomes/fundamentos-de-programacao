"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eleitor_1 = require("../eleitor");
/*
ELEITOR – Modele uma classe que represente um eleitor. Implemente de um método que determine
se o voto é: obrigatório, facultativo ou não permitido.
*/
var e1 = new eleitor_1.default("Mestre Oogway", 1000);
var e2 = new eleitor_1.default("Andy Davis", 6);
var e3 = new eleitor_1.default("Tom Holland", 28);
console.log(e1.toString());
console.log(e2.toString());
console.log(e3.toString());
