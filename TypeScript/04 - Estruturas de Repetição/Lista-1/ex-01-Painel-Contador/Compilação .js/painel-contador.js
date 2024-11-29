"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PainelContador = /** @class */ (function () {
    function PainelContador(limiteSuperior, limiteInferior) {
        this.limiteSuperior = limiteSuperior;
        this.limiteInferior = limiteInferior;
        this.validador(this.limiteSuperior, this.limiteInferior);
    }
    PainelContador.prototype.validador = function (limiteSuperior, limiteInferior) {
        if (limiteSuperior < limiteInferior)
            this.limiteSuperior = limiteInferior;
        this.limiteInferior = limiteSuperior;
    };
    PainelContador.prototype.getLimiteSuperior = function () {
        return this.limiteSuperior;
    };
    PainelContador.prototype.getLimiteInferior = function () {
        return this.limiteInferior;
    };
    PainelContador.prototype.setLimiteSuperior = function (limiteSuperior) {
        this.limiteSuperior = limiteSuperior;
    };
    PainelContador.prototype.setLimiteIferior = function (limiteInferior) {
        this.limiteInferior = limiteInferior;
    };
    PainelContador.prototype.contagem = function () {
        console.log("-------------------");
        console.log("Contagem Crescente:");
        console.log("-------------------");
        for (var i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            console.log(i);
        }
    };
    PainelContador.prototype.contagemDecrescente = function () {
        console.log("-------------------");
        console.log("Contagem Decrescente:");
        console.log("-------------------");
        for (var i = this.limiteSuperior; i >= this.limiteInferior; i--) {
            console.log(i);
        }
    };
    PainelContador.prototype.contagemPares = function () {
        console.log("-------------------");
        console.log("Contagem Pares:");
        console.log("-------------------");
        for (var i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            if (i % 2 == 0)
                console.log(i);
        }
    };
    PainelContador.prototype.contagemImpares = function () {
        console.log("-------------------");
        console.log("Contagem Impares:");
        console.log("-------------------");
        for (var i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            if (i % 2 != 0)
                console.log(i);
        }
    };
    PainelContador.prototype.contagemPassos = function (passo) {
        console.log("-------------------");
        console.log("Contagem Passos:");
        console.log("-------------------");
        for (var i = this.limiteInferior; i <= this.limiteSuperior; i += passo) {
            console.log(i);
        }
    };
    PainelContador.prototype.contagemOmitindo = function (multiplo) {
        console.log("-------------------");
        console.log("Contagem Omitindo:");
        console.log("-------------------");
        for (var i = this.limiteInferior; i <= this.limiteSuperior; i++) {
            if (i % multiplo == 0) {
                console.log("*");
            }
            else
                console.log(i);
        }
    };
    return PainelContador;
}());
exports.default = PainelContador;
