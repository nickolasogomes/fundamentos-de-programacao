export default class Dado {
    public readonly FACES: number;
    private anterior: number;
    private ultima: number;

    public constructor (faces: number){
        this.FACES = faces;
        this.anterior = 1;
        this.ultima = 1;
    }

    public getFaces(): number {
        return this.FACES;
    }

    public jogadaAnterior(): number {
        return this.anterior;
    }

    public ultimaJogada(): number {
        return this.ultima;
    }

    public jogueDado(): number {
        this.anterior = this.ultima;
        this.ultima = Math.ceil(Math.random() * this.FACES);
        return this.ultima;
    }
}