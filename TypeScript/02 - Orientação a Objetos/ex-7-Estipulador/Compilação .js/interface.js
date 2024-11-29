"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estipulador_1 = require("../estipulador");
var salgadinho = new estipulador_1.default("Coxinha", 5.50, 15);
var carro = new estipulador_1.default("Lancer", 68600, 5);
var celular = new estipulador_1.default("S20 Fe", 2000, 200);
console.log(salgadinho.toString());
console.log(carro.toString());
console.log(celular.toString());
