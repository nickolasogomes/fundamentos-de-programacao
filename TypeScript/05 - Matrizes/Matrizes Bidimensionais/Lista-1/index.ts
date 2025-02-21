import MatrizAleatoria from "./MatrizAleatoria";

console.log("Criando uma matriz aleatória M de ordem 4 x 3\n");
let umaMatriz: MatrizAleatoria = new MatrizAleatoria(4, 3);

console.log("Acessando o método toString()");
console.log(umaMatriz.toString());

console.log(
  "Alterando para que cada elemento seja obtido pela soma da linha com a coluna",
);
umaMatriz.somaLinhaColuna();
console.log(umaMatriz.toString());

console.log("Multiplicando a matriz por 3");
umaMatriz.multiplicaPor(3);
console.log(umaMatriz.toString());

console.log("Criando a matriz N de mesma ordem\n");
let n: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

console.log("Imprimindo N com a formatação padrão do console.log()");
console.log(n);
console.log();

console.log("Somando as matrizes M e N");
console.log(umaMatriz.somaCom(n));
console.log();

console.log("Criando a matriz O de ordem 3 x 4\n");
let o: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log("Imprimindo O com a formatação padrão do console.log()");
console.log(o);
console.log();

console.log("Somando as matrizes M e O (ordens diferentes)");
console.log(umaMatriz.somaCom(o));
console.log();

console.log("Gerando matriz binária a partir de M (zero onde era par, um onde era ímpar");
console.log(umaMatriz.binaria());
console.log();

console.log("Criando uma matriz quadrada aleatória P de ordem 3\n");
let outraMatriz: MatrizAleatoria = new MatrizAleatoria(3, 3);

console.log("Acessando o método toString()");
console.log(outraMatriz.toString());

console.log("Retornando a diagonal principal da matriz");
console.log(outraMatriz.diagonalPrincipal());
console.log();

console.log("Retornando a diagonal secundária da matriz");
console.log(outraMatriz.diagonalSecundaria());
console.log();

console.log("Imprimindo o triângulo superior da diagonal principal");
console.log(outraMatriz.trianguloSuperior());

console.log("Imprimindo o triângulo inferior da diagonal principal");
console.log(outraMatriz.trianguloInferior());

console.log("Imprimindo o triângulo superior da diagonal secundária");
console.log(outraMatriz.trianguloSuperiorSecundaria());

console.log("Imprimindo o triângulo inferior da diagonal secundária");
console.log(outraMatriz.trianguloInferiorSecundaria());

console.log("Gerando a matriz transposta");
console.log(outraMatriz.transposta());
console.log();

console.log("Voltando à matriz aleatória M de ordem 4 x 3\n");
console.log("Acessando o método toString()");
console.log(umaMatriz.toString());

console.log("Retornando a diagonal principal da matriz");
console.log(umaMatriz.diagonalPrincipal());
console.log();

console.log("Retornando a diagonal secundária da matriz");
console.log(umaMatriz.diagonalSecundaria());
console.log();

console.log("Imprimindo o triângulo superior da diagonal principal");
console.log(umaMatriz.trianguloSuperior());

console.log("Imprimindo o triângulo inferior da diagonal principal");
console.log(umaMatriz.trianguloInferior());

console.log("Imprimindo o triângulo superior da diagonal secundária");
console.log(umaMatriz.trianguloSuperiorSecundaria());

console.log("Imprimindo o triângulo inferior da diagonal secundária");
console.log(umaMatriz.trianguloInferiorSecundaria());

console.log("Imprimindo O com a formatação padrão do console.log()");
console.log(o);
console.log();

console.log("Multiplicando a matrix M (4x3) pela matriz O (3x4):");
console.log(umaMatriz.multiplicaPorMatriz(o));
console.log();