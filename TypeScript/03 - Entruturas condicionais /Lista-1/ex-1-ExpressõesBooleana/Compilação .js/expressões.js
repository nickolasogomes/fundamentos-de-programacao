"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Expressoes = /** @class */ (function () {
    function Expressoes(numerador, denominador, senha, confirmacao, nota, percentualFaltas, cotacaoDolar, cotacaoEuro, cotacaoLibra, qtde, qtdeMaxima, saldo, credito) {
        this.numerador = numerador;
        this.denominador = denominador;
        this.senha = senha;
        this.confirmacao = confirmacao;
        this.nota = nota;
        this.percentualFaltas = percentualFaltas;
        this.cotacaoDolar = cotacaoDolar;
        this.cotacaoEuro = cotacaoEuro;
        this.cotacaoLibra = cotacaoLibra;
        this.qtde = qtde;
        this.qtdeMaxima = qtdeMaxima;
        this.saldo = saldo;
        this.credito = credito;
    }
    Expressoes.prototype.verificaIgualdade = function () {
        return !(this.numerador == this.denominador);
    };
    Expressoes.prototype.senhaValida = function () {
        return !(this.senha.length == 0);
    };
    Expressoes.prototype.verificaSenha = function () {
        return (this.senha == this.confirmacao) && !(this.senha.length == 0);
    };
    Expressoes.prototype.aprovado = function () {
        return this.nota >= 6.0 && this.percentualFaltas <= 0.25;
    };
    Expressoes.prototype.cotacaoMoedas = function () {
        return this.cotacaoDolar < this.cotacaoEuro || this.cotacaoLibra < this.cotacaoEuro;
    };
    Expressoes.prototype.verificaQtdeSaldoCredito = function () {
        return (this.qtde < this.qtdeMaxima) && (this.saldo > 0 || this.credito > 0);
    };
    Expressoes.prototype.toString = function () {
        return "\n(a) !(" + this.numerador + " == " + this.denominador + "): " + this.verificaIgualdade() +
            "\n(b) !(" + this.senha + ".length == 0)" + this.senhaValida() +
            "\n(c) (" + this.senha + " == " + this.confirmacao + ") && !(" + this.senha + ".length == 0): " + this.verificaSenha() +
            "\n(d) " + this.nota + " >= 6.0 && " + this.percentualFaltas + " <= 0.25: " + this.aprovado() +
            "\n(e) " + this.cotacaoDolar + " < " + this.cotacaoEuro + " || " + this.cotacaoLibra + " < " + this.cotacaoEuro + ": " + this.cotacaoMoedas() +
            "\n(f) (" + this.qtde + " < " + this.qtdeMaxima + ") && (" + this.saldo + " > 0 || " + this.credito + " > 0): " + this.verificaQtdeSaldoCredito();
    };
    return Expressoes;
}());
exports.default = Expressoes;
