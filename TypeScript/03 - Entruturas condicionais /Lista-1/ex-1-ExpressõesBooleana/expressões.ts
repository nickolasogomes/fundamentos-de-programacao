export default class Expressoes {
    private numerador;
    private denominador;
    private senha;
    private confirmacao;
    private nota;
    private percentualFaltas;
    private cotacaoDolar;
    private cotacaoEuro;
    private cotacaoLibra;
    private qtde;
    private qtdeMaxima;
    private saldo; 
    private credito;

    public constructor(numerador: number, denominador: number,
        senha: string, confirmacao: string, nota: number, percentualFaltas: number,
        cotacaoDolar: number, cotacaoEuro: number, cotacaoLibra: number, 
        qtde: number, qtdeMaxima: number, saldo: number, credito: number){
        this.numerador = numerador;
        this.denominador = denominador;
        this.senha = senha;
        this.confirmacao = confirmacao;
        this.nota = nota;
        this.percentualFaltas = percentualFaltas;
        this.cotacaoDolar = cotacaoDolar;
        this.cotacaoEuro = cotacaoEuro;
        this.cotacaoLibra = cotacaoLibra;
        this.qtde = qtde;
        this.qtdeMaxima = qtdeMaxima;
        this.saldo = saldo;
        this.credito = credito;    
    }

    public verificaIgualdade(): boolean {
        return !(this.numerador == this.denominador);
    }

    public senhaValida(): boolean {
        return !(this.senha.length == 0);
    }

    public verificaSenha(): boolean {
        return (this.senha == this.confirmacao) && !(this.senha.length == 0);
    }

    public aprovado(): boolean {
        return this.nota >= 6.0 && this.percentualFaltas <= 0.25;
    }

    public cotacaoMoedas(): boolean{
        return this.cotacaoDolar < this.cotacaoEuro || this.cotacaoLibra < this.cotacaoEuro;
    }

    public verificaQtdeSaldoCredito(){
        return (this.qtde < this.qtdeMaxima) && (this.saldo > 0 || this.credito > 0);
    }

    public toString(): string {
        return "\n(a) !("+this.numerador+" == "+this.denominador+"): " + this.verificaIgualdade() +
                "\n(b) !("+this.senha+".length == 0)" + this.senhaValida() + 
                "\n(c) ("+this.senha+" == "+this.confirmacao+") && !("+this.senha+".length == 0): " + this.verificaSenha() + 
                "\n(d) "+this.nota+" >= 6.0 && "+this.percentualFaltas+" <= 0.25: " + this.aprovado() +
                "\n(e) "+this.cotacaoDolar+" < "+this.cotacaoEuro+" || "+this.cotacaoLibra+" < "+this.cotacaoEuro+": " + this.cotacaoMoedas() + 
                "\n(f) ("+this.qtde+" < "+this.qtdeMaxima+") && ("+this.saldo+" > 0 || "+this.credito+" > 0): " + this.verificaQtdeSaldoCredito();
    }
}