export default class Produto {
    private descricao: string;
    private peso: number;
    private preco: number;

    public constructor(novaDescricao: string, novoPeso: number, novoPreco: number) {
        this.descricao = novaDescricao;
        this.peso = novoPeso;
        this.preco = novoPreco;
    }

    //Métodos acessadores (Getters)
    public getDescricao(): string {
        return this.descricao;
    }

    public getPeso(): number {
        return this.peso;
    }

    public getPreco(): number {
        return this.preco;
    }

    //Métodos modificadores (Setters)
    public setDescricao(novaDescricao: string): void {
        this.descricao = novaDescricao;
    }

    public setPeso(novoPeso: number): void {
        this.peso = novoPeso;
    }

    public setPreco(novoPreco: number): void {
        this.peso = novoPreco;
    }

    public calculaPrecoQuilo (){
        //uso de variável local
        let calcula = this.preco / this.peso;

        /* cálculo poderia ser feito diretamente no retorno:
        return this.preco / this.peso; */
        return calcula;
    }

    public toString(): string {
        return "Descrição do Produto: " + this.descricao + 
                "\nPeso: " + this.peso + "kg" +
                "\nPreço: R$ " + this.preco.toFixed(2)
    }

    public geraEtiqueta(): string {
        let etiqueta = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n"+
                        this.descricao + 
                        "\nPeso: " + this.peso + "kg" +
                        "\nPreço: R$ " + this.preco.toFixed(2) +
                        "\nPreço por quilo: R$ " + this.calculaPrecoQuilo().toFixed(2)+
                        "\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        return etiqueta;
    }
}