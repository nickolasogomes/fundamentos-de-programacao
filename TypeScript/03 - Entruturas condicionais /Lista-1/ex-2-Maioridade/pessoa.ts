export default class Pessoa {
    private nome;
    private dia;
    private mes;
    private ano;
    private idade;

    public constructor (nome: string, dia: number, mes: number, ano: number){
        this.nome = nome;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.idade = this.calculaIdade(20240000);
    }

    public getNome(): string {
        return this.nome;
    }

    public dataDeNascimento(){
        return this.dia + "/" + this.mes + "/" + this.ano;
    }
    
    public dataDeNascimentoEmInteiro(): number{
        return (this.ano * 10000) + (this.mes * 100) + this.dia;
    }

    public calculaIdade(yyyymmdd: number): number {
        let idade = Math.trunc((yyyymmdd - this.dataDeNascimentoEmInteiro())/10000);
        this.idade = idade;
        return idade;
    }

    public maiorIdade(): string{
        if(this.idade >= 18)
            return "Maior de idade."
        return "Menor de idade."
    }

    public toString(): string {
        return "\nNome: " + this.getNome() + 
                "\nData de Nascimento: " + this.dataDeNascimento() + 
                "\nIdade: " + this.idade + 
                "\n" + this.maiorIdade();
    }

}