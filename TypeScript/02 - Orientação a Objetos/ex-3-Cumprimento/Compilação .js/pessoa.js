"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getSobrenome = function () {
        return this.sobrenome;
    };
    Pessoa.prototype.getNomeCompleto = function () {
        return this.nome + " " + this.sobrenome;
    };
    Pessoa.prototype.cumprimenta = function () {
        return "Olá!";
    };
    Pessoa.prototype.cumprimentaPeloNome = function (nome) {
        return "Olá " + nome + "!";
    };
    Pessoa.prototype.cumprimentaPessoa = function (outraPessoa) {
        return "Olá " + outraPessoa.getNome() + " " + outraPessoa.getSobrenome() + "!";
    };
    return Pessoa;
}());
exports.default = Pessoa;
