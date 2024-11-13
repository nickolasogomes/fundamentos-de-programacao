import Dado from "./dado";

/* Modele e implemente a rolagem de um dado com n faces. O número de faces deve ser informado na
criação do objeto e não pode ser alterado. Ofereça métodos para rolar o dado e para observar o
número da última rolagem. Para isso, pesquise como fazer a geração de números aleatórios na
linguagem. */

let dado = new Dado(10);

console.log("Joguei um dado com 10 faces!");
console.log(dado.jogueDado());

console.log("\nMais um vez.");
console.log(dado.jogueDado());

console.log("\nQual foi o valor da minha jogada anterior a essa?");
console.log(dado.jogadaAnterior());

console.log("\nE da minha última jogada?");
console.log(dado.ultimaJogada());