"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno = /** @class */ (function () {
    function Aluno(nome, nota1, nota2, notaE) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaE = notaE;
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.getNota1 = function () {
        return this.nota1;
    };
    Aluno.prototype.getNota2 = function () {
        return this.nota2;
    };
    Aluno.prototype.getNotaE = function () {
        return this.notaE;
    };
    Aluno.prototype.maiorSemestre = function () {
        if (this.nota1 > this.nota2)
            return this.nota1;
        return this.nota2;
    };
    Aluno.prototype.maiorGeral = function () {
        if (this.maiorSemestre() > this.notaE)
            return this.maiorSemestre();
        return this.notaE;
    };
    Aluno.prototype.toString = function () {
        return "\nNome: " + this.getNome() +
            "\nNota do 1º semestre: " + this.getNota1().toFixed(2) +
            "\nNota do 2º semestre: " + this.getNota2().toFixed(2) +
            "\nMaior nota entre os dois semestres: " + this.maiorSemestre().toFixed(2) +
            "\nNota do Exame: " + this.getNotaE().toFixed(2) +
            "\nMaior nota geral: " + this.maiorGeral().toFixed(2);
    };
    return Aluno;
}());
exports.default = Aluno;
