import Eleitor from "./eleitor";

/* 
ELEITOR – Modele uma classe que represente um eleitor. Implemente de um método que determine
se o voto é: obrigatório, facultativo ou não permitido.
*/

let e1 = new Eleitor("Mestre Oogway", 1000);
let e2 = new Eleitor("Andy Davis", 6);
let e3 = new Eleitor("Tom Holland", 28);

console.log(e1.toString());
console.log(e2.toString());
console.log(e3.toString());