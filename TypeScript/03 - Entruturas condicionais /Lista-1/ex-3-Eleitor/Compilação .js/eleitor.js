"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eleitor = /** @class */ (function () {
    function Eleitor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Eleitor.prototype.getNome = function () {
        return this.nome;
    };
    Eleitor.prototype.getIdade = function () {
        return this.idade;
    };
    Eleitor.prototype.voto = function () {
        if (this.idade > 17 && this.idade < 71)
            return "Voto Obrigatório.";
        if (this.idade > 15)
            return "Voto  Facultativo.";
        return "Voto não permitido";
    };
    Eleitor.prototype.toString = function () {
        return "\nNome: " + this.getNome() +
            "\nIdade: " + this.getIdade() +
            "\n" + this.voto();
    };
    return Eleitor;
}());
exports.default = Eleitor;
