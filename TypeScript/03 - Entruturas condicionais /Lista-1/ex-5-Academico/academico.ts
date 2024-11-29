export default class Academico {
    private nome;
    private notaF;
    private frequencia;

    public constructor(nome: string, notaF: number, frequencia: number) {
        this.nome = nome;
        this.notaF = notaF;
        this.frequencia = frequencia;
    }

    public getNome(): string {
        return this.nome;
    }

    public getNotaFinal(): number {
        return this.notaF;
    }

    public getFrequencia(): number {
        return this.frequencia;
    }

    public status(): string {
        if (this.frequencia >= 0.75)
            if (this.notaF >= 6.0)
               return "Aprovado";
            else
               if (this.notaF >= 4.0)
                  return "Sem Presença Obrigatória";
    
         return "Reprovado";
    }

    public toString(): string {
        return "\nNome: " + this.getNome() + 
                "\nNota final: " + this.getNotaFinal().toFixed(2) +
                "\nFrequência: " + this.getFrequencia() * 100 + "%" + 
                "\nSituação: " + this.status();
    }
}