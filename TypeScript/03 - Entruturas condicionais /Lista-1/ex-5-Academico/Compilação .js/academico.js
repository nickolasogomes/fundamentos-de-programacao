"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Academico = /** @class */ (function () {
    function Academico(nome, notaF, frequencia) {
        this.nome = nome;
        this.notaF = notaF;
        this.frequencia = frequencia;
    }
    Academico.prototype.getNome = function () {
        return this.nome;
    };
    Academico.prototype.getNotaFinal = function () {
        return this.notaF;
    };
    Academico.prototype.getFrequencia = function () {
        return this.frequencia;
    };
    Academico.prototype.status = function () {
        if (this.frequencia >= 0.75)
            if (this.notaF >= 6.0)
                return "Aprovado";
            else if (this.notaF >= 4.0)
                return "Sem Presença Obrigatória";
        return "Reprovado";
    };
    Academico.prototype.toString = function () {
        return "\nNome: " + this.getNome() +
            "\nNota final: " + this.getNotaFinal().toFixed(2) +
            "\nFrequência: " + this.getFrequencia() * 100 + "%" +
            "\nSituação: " + this.status();
    };
    return Academico;
}());
exports.default = Academico;
