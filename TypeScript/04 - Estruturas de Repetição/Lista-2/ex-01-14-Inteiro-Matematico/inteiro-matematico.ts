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

    public elevado(expoente: number): number{
        
        console.log("---------------------"); 
        console.log( this.n + " elevado a " + expoente);
        console.log("---------------------\n");
        
        if(expoente == 0)
            return 1;
        
        if(this.n == 0)
            return 0;
        
        if(this.n == 1)
            return 1;

        let potencia = 1; 

        for(let i = expoente; i > 0; i--){
            potencia *= this.n;
        }

        console.log("Resultado: " + potencia);
        return potencia;
    }

    public fatorial(): number {

        console.log("---------------------"); 
        console.log( this.n + " Fatorial");
        console.log("---------------------\n");

        let resultado = this.n;
        for(let i = this.n - 1; i > 0; i--){
            resultado *= i;
        }

        console.log("Resultado: " + resultado);
        return resultado;
    }

    public maiorDivisor(): number{
        let maior = 1;
        for(let i = Math.floor(this.n/2); i > 0; i--){
            if(this.n % i == 0){
                maior = i;
                return maior;
            }
        }
        return maior;
    }

    public menorDivisor():number{
        let menor = 1;
        for(let i = 2; i <= this.n/2; i++)
            if(this.n % i == 0){
                menor = i;
                return menor;     
            }
        return menor;
    }

    public mdc(outro: number): number{
        let mdc = 1;
        if(this.n > outro)
            for(let i = Math.floor(this.n/2); i > 0; i--)
                if(this.n % i == 0 && outro % i == 0){
                    mdc = i;
                    return mdc;
                }
    
        for(let i = Math.floor(outro/2); i > 0; i--)
            if(this.n % i == 0 && outro % i == 0){
                mdc = i;
                return mdc;
            }
        return mdc;
    }

    //método AA3
    public divisoresComuns(m: number): number{
        let divisores:number = 0;
        let maior: number = Math.max(this.n, m);

        for(let i = 1; i <= maior; i++)
            if(this.n % i == 0 && m % i == 0)
                divisores ++;

        return divisores;
    }

}