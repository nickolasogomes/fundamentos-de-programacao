export default class Automovel {
    public readonly TANQUE: number;
    private combustivel: number;

    public constructor (tanque: number){
        this.TANQUE = tanque;
        this.combustivel = 0;
    }

    public getCombustivel(): number {
        return this.combustivel;
    }

    public abastece(litros: number): void {
        this.combustivel = Math.min((litros + this.combustivel), this.TANQUE);
    }

    public completaTanque(): void {
        this.combustivel = this.TANQUE;
    }

    public percentualCombustivel(): number {
        return this.combustivel/this.TANQUE*100;
    }

    public toString(): string {
        return "\nCombustível: " + this.combustivel.toFixed(1) + " litro(s)" + 
                "\nCapacidade do tanque: " + this.TANQUE + " litro(s)" +
                "\nPercentual de abastecimento: " + this.percentualCombustivel().toFixed(1) + "%";
    }
}