import Pessoa from "./pessoa";

/*
MAIORIDADE – Modele uma classe que represente um indivíduo. Implemente um método que
determine se a maioridade já foi atingida.
*/

let elon = new Pessoa("Elon Musk", 28, 6, 1971);
let denzel = new Pessoa("Denzel Washington", 28, 12, 1954);
let fadinha = new Pessoa("Rayssa Leal", 4, 1, 2008);

elon.calculaIdade(20241118);
console.log(elon.toString());

denzel.calculaIdade(20241118);
console.log(denzel.toString());

elon.calculaIdade(20241118);
console.log(fadinha.toString());
