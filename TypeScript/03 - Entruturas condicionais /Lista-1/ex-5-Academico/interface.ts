import Academico from "./academico";

/*
ACADÊMICO – Implemente uma classe que abstraia um acadêmico, considerando a nota final e a
frequência, obrigatoriamente informados no construtor. A frequência é um número real entre 0,0 e 1,0
(onde 0,8 corresponde a uma frequência de 80%).
Disponha de um método que retorne a situação desse aluno (em termos de “Aprovado”, “Reprovado”
e “Sem Presença Obrigatória”), diante dos requisitos:
• Para aprovação: nota maior ou igual a 6,0 e frequência mínima de 75%;
• Para cursar a disciplina sem presença obrigatória: reprovado com nota maior ou igual a 4,0 e
com frequência mínima de 75%.
*/

let a1 = new Academico("Nerdola", 10, 0.99);
let a2 = new Academico("Burrão", 2.5, 0.33);
let a3 = new Academico("Vacilão", 4, 0.75);

console.log(a1.toString());
console.log(a2.toString());
console.log(a3.toString());

