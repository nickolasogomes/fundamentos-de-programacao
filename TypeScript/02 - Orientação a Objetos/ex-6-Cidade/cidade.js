"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cidade = /** @class */ (function () {
    function Cidade(nome, populacao, area) {
        this.nome = nome;
        this.populacao = populacao;
        this.area = area;
    }
    Cidade.prototype.getNome = function () {
        return this.nome;
    };
    Cidade.prototype.getPopulacao = function () {
        return this.populacao;
    };
    Cidade.prototype.getArea = function () {
        return this.area;
    };
    Cidade.prototype.densidadePopulacional = function () {
        return this.populacao / this.area;
    };
    Cidade.prototype.toString = function () {
        return "\nNome: " + this.nome +
            "\nPopulação: " + this.populacao +
            "\nÁrea: " + this.area.toFixed(2) + " Km²" +
            "\nDensidade Populacional: " + this.densidadePopulacional().toFixed(2) + " hab./km²";
    };
    return Cidade;
}());
exports.default = Cidade;
