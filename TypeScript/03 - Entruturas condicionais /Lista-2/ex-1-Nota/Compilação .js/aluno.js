"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno = /** @class */ (function () {
    function Aluno(nota) {
        this.nota = nota;
    }
    Aluno.prototype.getNota = function () {
        return this.nota;
    };
    Aluno.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    Aluno.prototype.notaAlfabética = function () {
        if (this.nota < 0 || this.nota > 10)
            return "Intervalo irregular.";
        if (this.nota >= 9)
            return "A";
        if (this.nota >= 8)
            return "B";
        if (this.nota >= 7)
            return "C";
        if (this.nota >= 6)
            return "D";
        return "E";
    };
    Aluno.prototype.toString = function () {
        return "\nNota: " + this.nota.toFixed(2) +
            "\nNota Alfabética: " + this.notaAlfabética();
    };
    return Aluno;
}());
exports.default = Aluno;
