"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Caixa = /** @class */ (function () {
    function Caixa(senha, segredo) {
        this.senha = senha;
        this.segredo = segredo;
    }
    Caixa.prototype.revelaSegredo = function (senha) {
        if (senha == this.senha)
            return this.segredo;
        return "Tente novamente.";
    };
    return Caixa;
}());
exports.default = Caixa;
