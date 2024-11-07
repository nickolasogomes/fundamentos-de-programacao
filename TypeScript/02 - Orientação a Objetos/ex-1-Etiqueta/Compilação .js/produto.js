"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(novaDescricao, novoPeso, novoPreco) {
        this.descricao = novaDescricao;
        this.peso = novoPeso;
        this.preco = novoPreco;
    }
    //Métodos acessadores (Getters)
    Produto.prototype.getDescricao = function () {
        return this.descricao;
    };
    Produto.prototype.getPeso = function () {
        return this.peso;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    //Métodos modificadores (Setters)
    Produto.prototype.setDescricao = function (novaDescricao) {
        this.descricao = novaDescricao;
    };
    Produto.prototype.setPeso = function (novoPeso) {
        this.peso = novoPeso;
    };
    Produto.prototype.setPreco = function (novoPreco) {
        this.peso = novoPreco;
    };
    Produto.prototype.calculaPrecoQuilo = function () {
        //uso de variável local
        var calcula = this.preco / this.peso;
        /* cálculo poderia ser feito diretamente no retorno:
        return this.preco / this.peso; */
        return calcula;
    };
    Produto.prototype.toString = function () {
        return "Descrição do Produto: " + this.descricao +
            "\nPeso: " + this.peso + "kg" +
            "\nPreço: R$ " + this.preco.toFixed(2);
    };
    Produto.prototype.geraEtiqueta = function () {
        var etiqueta = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n" +
            this.descricao +
            "\nPeso: " + this.peso + "kg" +
            "\nPreço: R$ " + this.preco.toFixed(2) +
            "\nPreço por quilo: R$ " + this.calculaPrecoQuilo().toFixed(2) +
            "\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        return etiqueta;
    };
    return Produto;
}());
exports.default = Produto;
