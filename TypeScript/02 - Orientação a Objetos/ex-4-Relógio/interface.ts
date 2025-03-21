import Relogio from "./relogio";

/* Considere um relógio que marca horas e minutos. Coube-lhe a tarefa de fornecer informações para
uma interface gráfica de um relógio analógico. Disponha de métodos que retornem a posição de cada
ponteiro do relógio, em graus. Considere doze horas como a posição inicial, ou seja, 0º. Não julgue a
resolução como correta sem comparar o resultado com um relógio real. */

let r1: Relogio = new Relogio (13, 40);
let r2: Relogio = new Relogio (9, 15);
let r3: Relogio = new Relogio (12, 30);
let r4: Relogio = new Relogio (17, 55);
let r5: Relogio = new Relogio (12, 0);

console.log(r1.toString());
console.log(r2.toString());
console.log(r3.toString());
console.log(r4.toString());
console.log(r5.toString());
