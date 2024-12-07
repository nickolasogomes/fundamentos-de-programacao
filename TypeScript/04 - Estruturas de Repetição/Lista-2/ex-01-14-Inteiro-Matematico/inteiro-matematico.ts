export default class InterioMatematico {
    private n;

    public constructor (n: number){
        this.n = n;
    }

    public getN(): number {
        return this.n;
    }

    public setN(n: number): void {
        this.n = n;
    }

    public tabuada(): string {
        let tabuada = "";
        console.log("---------------------"); 
        console.log("Tabuada do nº: " + this.n);
        console.log("---------------------"); 

        for(let i = 1; i <= 10; i++){
            tabuada += this.n + " x " + i + " = " + (this.n*i) + "\n";
        }
        console.log(tabuada + "\n");
        return tabuada;
    }

    public numeroDeDivisores(): number {
        let divisores = 1;

        for(let i = 1; i <= this.n/2; i++){
            if (this.n % i == 0)
                divisores += 1;
        }

        console.log("---------------------"); 
        console.log("Nº de divisores de " + this.n);
        console.log("---------------------\n");
        console.log("Resultado: " + divisores + "\n") 

        return divisores;
    }

    public produtoPelaSoma(m: number): number{
        let soma = 0;
        console.log("---------------------"); 
        console.log("Soma pelo produto de " + this.n + " e " + m);
        console.log("---------------------\n"); 

        if(this.n > m)  
            for(let i = 1; i <= m; i++){
                soma += this.n;
            }
        else
            for(let i = 1; i <= this.n; i++){
                soma += m;
            }

        console.log("Resultado: " + soma + "\n");
        return soma;          
    }

    
}