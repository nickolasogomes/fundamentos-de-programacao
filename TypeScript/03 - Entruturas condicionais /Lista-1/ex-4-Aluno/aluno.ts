export default class Aluno {
    private nome;
    private nota1;
    private nota2;
    private notaE;

    public constructor(nome: string, nota1: number, nota2: number, notaE: number){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaE = notaE;
    }

    public getNome(): string {
        return this.nome;
    }

    public getNota1(): number{
        return this.nota1;
    }

    public getNota2(): number{
        return this.nota2;
    }

    public getNotaE(): number{
        return this.notaE;
    }

    public maiorSemestre(): number{
        if (this.nota1 > this.nota2)
            return this.nota1;
        return this.nota2;
    }

    public maiorGeral(){
        if(this.maiorSemestre() > this.notaE)
            return this.maiorSemestre();
        return this.notaE;
    }

    public toString(): string{
        return "\nNome: " + this.getNome() + 
                "\nNota do 1º semestre: " + this.getNota1().toFixed(2) + 
                "\nNota do 2º semestre: " + this.getNota2().toFixed(2) + 
                "\nMaior nota entre os dois semestres: " + this.maiorSemestre().toFixed(2) + 
                "\nNota do Exame: " + this.getNotaE().toFixed(2) + 
                "\nMaior nota geral: " + this.maiorGeral().toFixed(2);
    }

}