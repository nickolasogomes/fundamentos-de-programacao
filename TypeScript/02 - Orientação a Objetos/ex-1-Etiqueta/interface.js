"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
var input = require("readline-sync");
var descricao = "", peso = 0, preco = 0;
descricao = input.question("Informe o nome do produto: ");
peso = input.questionFloat("Informe o peso do produto em kg: ");
preco = input.questionFloat("Informe o preço do produto: ");
var produto = new produto_1.default(descricao, peso, preco);
console.log("Gerando etiqueta...\n");
console.log(produto.geraEtiqueta());
