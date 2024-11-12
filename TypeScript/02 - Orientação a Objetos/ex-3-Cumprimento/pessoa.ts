export default class Pessoa {
    private nome: string;
    private sobrenome: string;

    public constructor (nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public getNome() :string{
        return this.nome;
    }

    public getSobrenome(): string {
        return this.sobrenome;
    }

    public getNomeCompleto(): string{
        return this.nome + " " + this.sobrenome;
    }

    public cumprimenta(): string {
        return "Olá!"
    }

    public cumprimentaPeloNome(nome: string): string{
        return "Olá " + nome + "!";
    }

    public cumprimentaPessoa(outraPessoa: Pessoa): string {
        return "Olá " + outraPessoa.getNome() + " " + outraPessoa.getSobrenome() + "!";
    }
}