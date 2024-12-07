"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InterioMatematico = /** @class */ (function () {
    function InterioMatematico(n) {
        this.n = n;
    }
    InterioMatematico.prototype.getN = function () {
        return this.n;
    };
    InterioMatematico.prototype.setN = function (n) {
        this.n = n;
    };
    InterioMatematico.prototype.tabuada = function () {
        var tabuada = "";
        console.log("---------------------");
        console.log("Tabuada do nº: " + this.n);
        console.log("---------------------");
        for (var i = 1; i <= 10; i++) {
            tabuada += this.n + " x " + i + " = " + (this.n * i) + "\n";
        }
        console.log(tabuada + "\n");
        return tabuada;
    };
    InterioMatematico.prototype.numeroDeDivisores = function () {
        var divisores = 1;
        for (var i = 1; i <= this.n / 2; i++) {
            if (this.n % i == 0)
                divisores += 1;
        }
        console.log("---------------------");
        console.log("Nº de divisores de " + this.n);
        console.log("---------------------\n");
        console.log("Resultado: " + divisores + "\n");
        return divisores;
    };
    InterioMatematico.prototype.produtoPelaSoma = function (m) {
        var soma = 0;
        console.log("---------------------");
        console.log("Soma pelo produto de " + this.n + " e " + m);
        console.log("---------------------\n");
        if (this.n > m)
            for (var i = 1; i <= m; i++) {
                soma += this.n;
            }
        else
            for (var i = 1; i <= this.n; i++) {
                soma += m;
            }
        console.log("Resultado: " + soma + "\n");
        return soma;
    };
    return InterioMatematico;
}());
exports.default = InterioMatematico;
