"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Automovel = /** @class */ (function () {
    function Automovel(tanque) {
        this.TANQUE = tanque;
        this.combustivel = 0;
    }
    Automovel.prototype.getCombustivel = function () {
        return this.combustivel;
    };
    Automovel.prototype.abastece = function (litros) {
        this.combustivel = Math.min((litros + this.combustivel), this.TANQUE);
    };
    Automovel.prototype.completaTanque = function () {
        this.combustivel = this.TANQUE;
    };
    Automovel.prototype.percentualCombustivel = function () {
        return this.combustivel / this.TANQUE * 100;
    };
    Automovel.prototype.toString = function () {
        return "\nCombustível: " + this.combustivel.toFixed(1) + " litro(s)" +
            "\nCapacidade do tanque: " + this.TANQUE + " litro(s)" +
            "\nPercentual de abastecimento: " + this.percentualCombustivel().toFixed(1) + "%";
    };
    return Automovel;
}());
exports.default = Automovel;
