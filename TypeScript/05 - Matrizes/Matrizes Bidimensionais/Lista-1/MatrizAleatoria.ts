export default class MatrizAleatoria {
  public readonly L: number;
  public readonly C: number;
  private m: number[][];

  public constructor(l: number, c: number) {
     this.L = l;
     this.C = c;
     this.m = [];

     for (let i = 0; i < this.L; i++) {
        this.m[i] = [];

        for (let j = 0; j < this.C; j++)
           this.m[i][j] = Math.ceil(Math.random() * 100);
     }
     // Para cada linha, percorre todas as colunas
     // Usamos esse raciocínio para quase tudo
  }

  public somaLinhaColuna(): void {
     for (let i = 0; i < this.L; i++)
        for (let j = 0; j < this.C; j++)
           this.m[i][j] = i + j;
  }

  public multiplicaPor(n: number): void {
     for (let i = 0; i < this.L; i++)
        for (let j = 0; j < this.C; j++)
           this.m[i][j] *= n;
  }

  public somaCom(n: number[][]): number[][] {
     // A soma só é possível com matrizes de mesma ordem
     if (n.length != this.L)
        return [];

     if (n[0].length != this.C)
        return [];

     let aux: number[][] = [];

     for (let i = 0; i < this.L; i++) {
        aux[i] = [];

        for (let j = 0; j < this.C; j++)
           aux[i][j] = this.m[i][j] + n[i][j];
     }

     return aux;
  }

  public binaria(): number[][] {
     let aux: number[][] = [];

     for (let i = 0; i < this.L; i++) {
        aux[i] = [];

        for (let j = 0; j < this.C; j++)
           aux[i][j] = this.m[i][j] % 2;
     }

     return aux;
  }

  public isQuadrada(): boolean {
     return (this.L == this.C);
  }

  // Dois métodos abaixo usam o mesmo raciocínio
  public diagonalPrincipal(): number[] {
     let aux: number[] = [];

     if (this.isQuadrada())
        for (let i = 0; i < this.L; i++)
           aux[i] = this.m[i][i];

     return aux;
  }

  public diagonalSecundaria(): number[] {
     let aux: number[] = [];

     if (this.isQuadrada())
        for (let i = 0; i < this.L; i++)
           aux[i] = this.m[i][this.L-i-1];

     return aux;
  }

  // Quatro métodos abaixo usam o mesmo raciocínio
  public trianguloSuperior(): string {
     if (!this.isQuadrada())
        return "Não é uma matriz quadrada\n";

     let aux: string = "";

     for (let i = 0; i < this.L; i++) {
        for (let j = 0; j < this.C; j++) {
           if (j > i)
              aux += this.m[i][j];
           else
              aux += "..";

           aux += "\t";
        }   

        aux += "\n";
     }

     return aux;
  }

  public trianguloInferior(): string {
     if (!this.isQuadrada())
        return "Não é uma matriz quadrada\n";

     let aux: string = "";

     for (let i = 0; i < this.L; i++) {
        for (let j = 0; j < this.C; j++) {
           if (j < i)
              aux += this.m[i][j];
           else
              aux += "..";
              // Se não quisermos demarcar os elementos ausentes,
              // o ideal é sequer percorrê-los, interrompendo antes

           aux += "\t";
        }   

        aux += "\n";
     }

     return aux;
  }

  public trianguloSuperiorSecundaria(): string {
     if (!this.isQuadrada())
        return "Não é uma matriz quadrada\n";

     let aux: string = "";

     for (let i = 0; i < this.L; i++) {
        for (let j = 0; j < this.C; j++) {
           if (j < this.L-i-1)
              aux += this.m[i][j];
           else
              aux += "..";

           aux += "\t";
        }   

        aux += "\n";
     }

     return aux;
  }

  public trianguloInferiorSecundaria(): string {
     if (!this.isQuadrada())
        return "Não é uma matriz quadrada\n";

     let aux: string = "";

     for (let i = 0; i < this.L; i++) {
        for (let j = 0; j < this.C; j++) {
           if (j > this.L-i-1)
              aux += this.m[i][j];
           else
              aux += "..";

           aux += "\t";
        }   

        aux += "\n";
     }

     return aux;
  }

  // Dificuldade compatível com a avaliação
  public transposta(): number[][] {
     let aux: number[][] = [];

     for (let i = 0; i < this.L; i++) {
        aux[i] = [];

        for (let j = 0; j < this.C; j++)
           aux[i][j] = this.m[j][i];
     }

     return aux;
  }   

  // Dificuldade que excede o nível da avaliação
  public multiplicaPorMatriz(n: number[][]): number[][] {
     // A multiplicação só é possível quando o número de
     // colunas da primeira matriz é igual ao número de 
     // linhas da segunda matriz
     if (this.C != n.length !)
        return [];

     let aux: number[][] = [];
     // A(mxp) . B(pxn) = C(mxn)
     let linhas: number = this.L,
        colunas: number = n[0].length;

     for (let i = 0; i < linhas; i++) {
        aux[i] = [];
        
        for (let j = 0; j < colunas; j++) {
           aux[i][j] = 0;
           for (let k = 0; k < this.C; k++)
              aux[i][j] += this.m[i][k] * n[k][j];
              // lembrar que this.C == n.lenght
        }
     }

     return aux;

     /*
      Os limites (linhas, colunas e this.C) ficam claros quando uma matriz
      de 2x3 é multiplicada por outra de 3x4:
      - A matriz resultante é de 2 x 4
      - O contador i itera até 2 (linhas da matriz resultante)
      - O contador j itera até 4 (colunas da matriz resultante)
      - O contador k itera até 3 (colunas de M e também linhas de N)

      Exemplo:
      1 2 3       1  2  3  4
      4 5 6   X   5  6  7  8
                  9 10 11 12                         
      */
  }

  public toString(): string {
     let aux: string = "";

     for (let i = 0; i < this.L; i++) {
        for (let j = 0; j < this.C; j++)
           aux += this.m[i][j] + "\t";
           // tabulação

        aux += "\n";
        // quebra a cada linha
     }

     return aux;
  }
}