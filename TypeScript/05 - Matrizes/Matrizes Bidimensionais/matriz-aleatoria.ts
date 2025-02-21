export default class MatrizA{
    public readonly LINHAS: number;
    public readonly COLUNAS: number;
    private m: number [][];

    public constructor (l: number, c: number){
        this.LINHAS = l;
        this.COLUNAS = c;
        this.m = [];

        for(let i = 0; i < this.LINHAS; i++){
            this.m [i] = [];
            for(let j = 0; j < this.COLUNAS; j++)
                this.m[i][j] = Math.ceil(Math.random() * 100);
        }
    }

    public toString():string{
        let aux: string = "";
        return aux;
    }
}