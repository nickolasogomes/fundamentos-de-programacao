"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, dia, mes, ano) {
        this.nome = nome;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.idade = this.calculaIdade(20240000);
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dataDeNascimento = function () {
        return this.dia + "/" + this.mes + "/" + this.ano;
    };
    Pessoa.prototype.dataDeNascimentoEmInteiro = function () {
        return (this.ano * 10000) + (this.mes * 100) + this.dia;
    };
    Pessoa.prototype.calculaIdade = function (yyyymmdd) {
        var idade = Math.trunc((yyyymmdd - this.dataDeNascimentoEmInteiro()) / 10000);
        this.idade = idade;
        return idade;
    };
    Pessoa.prototype.maiorIdade = function () {
        if (this.idade >= 18)
            return "Maior de idade.";
        return "Menor de idade.";
    };
    Pessoa.prototype.toString = function () {
        return "\nNome: " + this.getNome() +
            "\nData de Nascimento: " + this.dataDeNascimento() +
            "\nIdade: " + this.idade +
            "\n" + this.maiorIdade();
    };
    return Pessoa;
}());
exports.default = Pessoa;
