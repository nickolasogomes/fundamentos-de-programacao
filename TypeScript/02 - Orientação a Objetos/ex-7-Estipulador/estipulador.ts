export default class Estipulador {
    private nome: string;
    private preco: number;
    private taxa: number;

    public constructor (nome: string, preco: number, taxa: number){
        this.nome = nome;
        this.preco = preco;
        this.taxa = taxa;
    }

    public calculaPreco(): number {
        return this.preco * (1 + (this.taxa/100));
    }

    public toString(): string {
        return "\nNome: " + this.nome + 
                "\nPreço requerido pelo vendedor: R$ " + this.preco.toFixed(2) + 
                "\nTaxa: " + this.taxa + " %" + 
                "\nPreço para venda com taxa: R$ " + this.calculaPreco().toFixed(2);
    }


}