import Expressoes from "./expressões";

/* EXPRESSÕES – Dê o resultado das expressões booleanas abaixo (true ou false):
(a) !(numerador == denominador)
(b) !(senha.length == 0)
(c) (senha == confirmacao) && !(senha.length == 0)
(d) nota >= 6.0 && percentualFaltas <= 0.25
(e) cotacaoDolar < cotacaoEuro || cotacaoLibra < cotacaoEuro
(f) (qtde < qtdeMaxima) && (saldo > 0 || credito > 0)
Considere:
• numerador = 2
• denominador = 4
• senha = "abc"
• confirmacao = "123"
• nota = 9.0
• percentualFaltas = 0.05
• cotacaoDolar = 6.0
• cotacaoEuro = 7.0
• cotacaoLibra = 8.0
• qtde = 0
• qtdeMaxima = 10
• saldo = 0.0
• credito = 999.0
As expressões podem ser testadas na linguagem e o resultado impresso. 
*/

let exercicio = new Expressoes(2,4,"abc","123", 9.0, 0.05, 6.0, 7.0, 8.0, 0, 10, 0.0, 999.0);

console.log(exercicio.toString());