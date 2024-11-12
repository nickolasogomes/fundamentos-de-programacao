import Pessoa from "./pessoa";

/* Modele a interação de pessoas cumprimentando-se. Cada pessoa é representada unicamente pelo
primeiro nome. Em termos de modelagem e implementação, uma pessoa pode cumprimentar outra
de três maneiras: sem saber o nome; sabendo apenas nome (passado como parâmetro); ou
conhecendo a outra pessoa (tendo outro objeto passado como parâmetro). No primeiro caso, o
cumprimento será apenas “Olá!”, enquanto os outros dois incluem o nome da outra pessoa no
cumprimento: “Olá, Tony Stark!”. */

let homem_aranha: Pessoa = new Pessoa ("Peter", "Parker");
let homem_de_ferro: Pessoa = new Pessoa ("Tony", "Stark");

console.log(homem_aranha.cumprimenta());
console.log(homem_de_ferro.cumprimentaPeloNome("Peter"));
console.log(homem_aranha.cumprimentaPessoa(homem_de_ferro));