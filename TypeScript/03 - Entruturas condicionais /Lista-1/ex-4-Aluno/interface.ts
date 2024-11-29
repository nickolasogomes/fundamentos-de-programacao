import Aluno from "./aluno";

/* 
ALUNO – Considere um objeto que represente um aluno de Ensino Médio, abstraindo as notas de
dois semestres e da avaliação de exame. Implemente métodos que retornem:
(a) a maior nota, considerando os dois semestres;
(b) a maior nota, considerando também a avaliação de exame.
*/

let a1 = new Aluno("Níckolas", 9, 8.73, 9.7);
let a2 = new Aluno("João", 2.6, 10, 6);
let a3 = new Aluno("Nerdola", 9.99, 9.98, 9.97);

console.log(a1.toString());
console.log(a2.toString());
console.log(a3.toString());