export default class Aluno {
    private nota;

    public constructor(nota: number){
        this.nota = nota;
    }

    public getNota(): number{
        return this.nota;
    }


    public setNota(nota: number): void{
        this.nota = nota;
    }

    public notaAlfabética(): string{
        if(this.nota < 0 || this.nota > 10)
            return "Intervalo irregular."

        if(this.nota >= 9)
            return "A"; 
        
        if(this.nota >= 8)
            return "B"; 

        if(this.nota >= 7)
            return "C";
        
        if(this.nota >= 6)
            return "D"; 

        return "E";
    }

    public toString(){
        return "\nNota: " + this.nota.toFixed(2) + 
                "\nNota Alfabética: " + this.notaAlfabética();
    }

}