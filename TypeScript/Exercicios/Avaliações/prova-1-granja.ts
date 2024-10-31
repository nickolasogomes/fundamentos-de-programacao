import * as readline from 'readline';

const input = require("readline-sync");

/* GRANJA: Desenvolva uma aplicação em que o usuário informe 
a quantidade de ovos produzida por uma granja em um dia. A metade
desses ovos serão embalados em dúzias, a outra metade em meias-dúzias
e o restante ficará para a próxima produção. Siga o exemplo: 
 
Digite a quantidade de ovos produzida: 49

Dúzias: 2
Meias-dúzias: 4
Resto: 1

*/

let ovos: number = 0, 
    duzias: number = 0,
    meiasD: number = 0,
    resto: number = 0;

ovos = input.questionInt("Digite a quantidade de ovos produzida: ");

duzias = Math.trunc((ovos/2)/12);
resto = ovos - (duzias * 12);

meiasD = Math.trunc(resto/6);
resto = resto % 6;

console.log("\nDuzias: "+ duzias, "\nMeias-duzias: "+meiasD, "\nResto: "+resto);