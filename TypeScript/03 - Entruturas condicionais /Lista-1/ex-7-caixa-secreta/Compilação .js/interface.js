"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var caixa_1 = require("../caixa");
var c1 = new caixa_1.default("VScode", "TypeScript");
console.log("Inseri senha errada: \n" + c1.revelaSegredo("SenhaErrada"));
console.log("\nTentei com a senha certa agora: \n" + c1.revelaSegredo("VScode"));
