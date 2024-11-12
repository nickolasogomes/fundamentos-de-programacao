export default class Relogio {
    private horas: number;
    private minutos: number;
    private grausH: number;
    private grausM: number;

    public constructor (horas: number, minutos: number){
        this.horas = horas;
        this.minutos = minutos;
        this.grausH = 0;
        this.grausM = 0;
    }

    public getHoras(): number {
        return this.horas;
    }

    public getMinutos(): number{
        return this.minutos;
    }

    public convertaEmGraus(): number{
        this.grausH = this.horas / 24;
        this.grausM = this.minutos / 60;

    }
}

