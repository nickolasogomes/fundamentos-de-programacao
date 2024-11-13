"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estipulador = /** @class */ (function () {
    function Estipulador(nome, preco, taxa) {
        this.nome = nome;
        this.preco = preco;
        this.taxa = taxa;
    }
    Estipulador.prototype.calculaPreco = function () {
        return this.preco * (1 + (this.taxa / 100));
    };
    Estipulador.prototype.toString = function () {
        return "\nNome: " + this.nome +
            "\nPreço requerido pelo vendedor: R$ " + this.preco.toFixed(2) +
            "\nTaxa: " + this.taxa + " %" +
            "\nPreço para venda com taxa: R$ " + this.calculaPreco().toFixed(2);
    };
    return Estipulador;
}());
exports.default = Estipulador;
