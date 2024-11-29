export default class PainelContador {
    private limiteSuperior;
    private limiteInferior;

    public constructor(limiteSuperior: number, limiteInferior: number) {
        this.limiteSuperior = limiteSuperior;
        this.limiteInferior = limiteInferior;
        this.validador(this.limiteSuperior, this.limiteInferior);
    }

    private validador(limiteSuperior: number, limiteInferior: number): void{
        if (limiteSuperior < limiteInferior)
            this.limiteSuperior = limiteInferior;
            this.limiteInferior = limiteSuperior;
    }

    public getLimiteSuperior(): number {
        return this.limiteSuperior;
    }

    public getLimiteInferior(): number {
        return this.limiteInferior;
    }

    public setLimiteSuperior(limiteSuperior: number): void {
        this.limiteSuperior = limiteSuperior;
    }

    public setLimiteIferior(limiteInferior: number): void {
        this.limiteInferior = limiteInferior;
    }

    public contagem(): void{
        console.log("-------------------");
        console.log("Contagem Crescente:");
        console.log("-------------------");
        for (let i = this.limiteInferior; i <= this.limiteSuperior ; i++){
            console.log(i);
        }
    }

    public contagemDecrescente(): void{
        console.log("-------------------");
        console.log("Contagem Decrescente:");
        console.log("-------------------");
        for (let i = this.limiteSuperior; i >= this.limiteInferior ; i--){
            console.log(i);
        }
    }

    public contagemPares(): void{
        console.log("-------------------");
        console.log("Contagem Pares:");
        console.log("-------------------");
        for (let i = this.limiteInferior; i <= this.limiteSuperior ; i++){
            if (i % 2 == 0)
                console.log(i);
        }
    }

    public contagemImpares(): void{
        console.log("-------------------");
        console.log("Contagem Impares:");
        console.log("-------------------");
        for (let i = this.limiteInferior; i <= this.limiteSuperior ; i++){
            if (i % 2 != 0)
                console.log(i);
        }
    }

    public contagemPassos(passo: number){
        console.log("-------------------");
        console.log("Contagem Passos:");
        console.log("-------------------");
        for (let i = this.limiteInferior; i <= this.limiteSuperior ; i+=passo){
            console.log(i);
        } 
    }

    public contagemOmitindo(multiplo: number){
        console.log("-------------------");
        console.log("Contagem Omitindo:");
        console.log("-------------------");
        for (let i = this.limiteInferior; i <= this.limiteSuperior ; i++){
            if(i%multiplo == 0) {
                console.log("*");
            }
            else
                console.log(i);
        } 
    }


}