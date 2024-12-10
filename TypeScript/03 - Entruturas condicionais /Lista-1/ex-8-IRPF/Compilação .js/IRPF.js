"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IRPF = /** @class */ (function () {
    function IRPF(salario) {
        this.salario = salario;
        this.calculaAliquota();
    }
    IRPF.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    IRPF.prototype.calculaAliquota = function () {
        if (this.salario <= 2112)
            return 0;
        if (this.salario < 2826.64)
            return 0.075;
        if (this.salario < 3751.04)
            return 0.15;
        if (this.salario < 4664.69)
            return 0.225;
        return 0.275;
    };
    IRPF.prototype.calculaDeducao = function () {
        return this.salario * this.calculaAliquota();
    };
    IRPF.prototype.toString = function () {
        return "\nSalário base: R$ " + this.salario.toFixed(2) +
            "\nAlíquota: " + (this.calculaAliquota() * 100).toFixed(2) + "%" +
            "\nDedução: R$ " + this.calculaDeducao().toFixed(2);
    };
    return IRPF;
}());
exports.default = IRPF;
