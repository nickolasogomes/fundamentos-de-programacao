import Produto from "./produto";
import * as readline from "readline";

const input = require("readline-sync");

/* Modele e implemente um objeto que retorne uma cadeia de caracteres com a etiqueta eletrônica de
um produto, contendo o valor do quilo, para ser fixada em prateleiras de um supermercado. Essa
informação é útil a fim de que o consumidor possa comparar preços, quando as embalagens dos
produtos possuem pesos diferentes. São atributos do produto: descrição, peso em quilos e preço.
Exemplos de etiquetas geradas:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Barra de Chocolate Diamante Negro
Peso: 0,090 kg
Preço: R$ 5,99
Preço do quilo: R$ 66,56
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ovo de Páscoa Diamante Negro
Peso: 0,176 kg
Preço: R$ 29,90
Preço do quilo: R$ 169,89
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let descricao: string = "",
    peso: number = 0,
    preco: number = 0;

descricao = input.question("Informe o nome do produto: ");
peso = input.questionFloat("Informe o peso do produto em kg: ");
preco = input.questionFloat("Informe o preço do produto: ");

let produto = new Produto(descricao, peso, preco);

console.log("Gerando etiqueta...\n");
console.log(produto.geraEtiqueta());