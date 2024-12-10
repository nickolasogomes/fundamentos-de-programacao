export default class IRPF {
    private salario;

    public constructor(salario: number) {
        this.salario = salario;
        this.calculaAliquota();

    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    private calculaAliquota(): number {
        if(this.salario <= 2112)
            return 0;

        if(this.salario < 2826.64)
            return 0.075;
        
        if(this.salario < 3751.04)
            return 0.15;
        
        if(this.salario < 4664.69)
            return 0.225;

        return 0.275;
    }

    private calculaDeducao(): number {
        return this.salario * this.calculaAliquota();
    }

    public toString(): string {
        return "\nSalário base: R$ " + this.salario.toFixed(2) + 
                "\nAlíquota: " + (this.calculaAliquota()*100).toFixed(2) + "%" + 
                "\nDedução: R$ " + this.calculaDeducao().toFixed(2);
    }
}