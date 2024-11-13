"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dado = /** @class */ (function () {
    function Dado(faces) {
        this.FACES = faces;
        this.anterior = 1;
        this.ultima = 1;
    }
    Dado.prototype.getFaces = function () {
        return this.FACES;
    };
    Dado.prototype.jogadaAnterior = function () {
        return this.anterior;
    };
    Dado.prototype.ultimaJogada = function () {
        return this.ultima;
    };
    Dado.prototype.jogueDado = function () {
        this.anterior = this.ultima;
        this.ultima = Math.ceil(Math.random() * this.FACES);
        return this.ultima;
    };
    return Dado;
}());
exports.default = Dado;
