export default class Relogio {
    private horas: number;
    private minutos: number;

    public constructor (horas: number, minutos: number){
        this.horas = horas;
        this.minutos = minutos;
    }

    public getHoras(): number {
        return this.horas;
    }

    public getMinutos(): number{
        return this.minutos;
    }

    public horasEmGraus(): number {
        return (((this.horas%12) + (this.minutos/60))*30);
    }

    public minutosEmGraus(): number {
        return this.minutos * 6;
    }

    public toString(): string {
        return "\nHoras: " + this.horas + " h" +
                "\nHoras em graus: " + this.horasEmGraus().toFixed(2) + "°" + 
                "\nMinutos: " + this.minutos + " min" + 
                "\nMinutos em graus: " + this.minutosEmGraus().toFixed(2) + "°";
    }
}

