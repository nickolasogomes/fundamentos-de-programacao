import Automovel from "./automovel";
//import * as readline from "readline";

//const input = require("readline-sync");

/* Modele um objeto que implemente um automóvel, com abstração focada nas informações básicas de
abastecimento. Cada automóvel tem um tanque de combustível com determinada capacidade em
litros. Essa capacidade não sofre alterações ao longo da existência do modelo.
O tanque de combustível inicia vazio e há duas formas de abastecer o veículo. Na primeira forma, o
tanque é completado até o máximo da capacidade. Na outra, deve-se informar quantos litros de
combustível serão colocados (obviamente, não excedendo a capacidade do tanque).
A representação textual do objeto fornece uma cadeia de caracteres que contém: a quantidade de
combustível, a capacidade do tanque e, percentualmente, quanto o tanque está cheio. */


let lancer: Automovel = new Automovel(59);

console.log("\nComprei um lancer!");
console.log(lancer.toString());

console.log("\nAbasteci com 20 litros.");
lancer.abastece(20);
console.log(lancer.toString());

console.log("\nDecidi encher o tanque.");
lancer.completaTanque();
console.log(lancer.toString());

console.log("\nTentei colocar mais 10 litros.");
lancer.abastece(10);
console.log(lancer.toString());