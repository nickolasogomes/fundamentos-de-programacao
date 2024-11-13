export default class Cidade {
    private nome: string;
    private populacao: number;
    private area: number;

    public constructor (nome: string, populacao: number, area: number){
        this.nome = nome;
        this.populacao = populacao;
        this.area = area;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPopulacao(): number {
        return this.populacao;
    }

    public getArea(): number {
        return this.area;
    }

    public densidadePopulacional(): number{
        return this.populacao/this.area;
    }

    public toString(): string {
        return "\nNome: " + this.nome + 
                "\nPopulação: " + this.populacao + 
                "\nÁrea: " + this.area.toFixed(2) + " Km²" + 
                "\nDensidade Populacional: " + this.densidadePopulacional().toFixed(2) + " hab./km²"; 
    }


}