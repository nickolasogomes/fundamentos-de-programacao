export default class Caixa {
    private senha;
    private segredo;

    public constructor (senha: string, segredo: string) {
        this.senha = senha;
        this.segredo = segredo;
    }

    public revelaSegredo(senha: string): string {
        if (senha == this.senha)
            return this.segredo;
        return "Tente novamente."
    }
} 