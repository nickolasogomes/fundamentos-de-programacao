export default class Eleitor {
    private nome;
    private idade;

    public constructor(nome: string, idade: number) {
        this.nome = nome; 
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public voto(): string {
        if (this.idade > 17 && this.idade < 71)
            return "Voto Obrigatório.";
        if (this.idade > 15)
            return "Voto  Facultativo.";
        return "Voto não permitido";
            
    }

    public toString(): string {
        return "\nNome: " + this.getNome() + 
                "\nIdade: " + this.getIdade() +
                "\n" + this.voto();
    }

}