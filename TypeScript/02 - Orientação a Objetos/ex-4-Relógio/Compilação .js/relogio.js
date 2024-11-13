"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Relogio = /** @class */ (function () {
    function Relogio(horas, minutos) {
        this.horas = horas;
        this.minutos = minutos;
    }
    Relogio.prototype.getHoras = function () {
        return this.horas;
    };
    Relogio.prototype.getMinutos = function () {
        return this.minutos;
    };
    Relogio.prototype.horasEmGraus = function () {
        return (((this.horas % 12) + (this.minutos / 60)) * 30);
    };
    Relogio.prototype.minutosEmGraus = function () {
        return this.minutos * 6;
    };
    Relogio.prototype.toString = function () {
        return "\nHoras: " + this.horas + " h" +
            "\nHoras em graus: " + this.horasEmGraus().toFixed(2) + "°" +
            "\nMinutos: " + this.minutos + " min" +
            "\nMinutos em graus: " + this.minutosEmGraus().toFixed(2) + "°";
    };
    return Relogio;
}());
exports.default = Relogio;
