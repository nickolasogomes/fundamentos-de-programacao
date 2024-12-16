"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InteiroMatematico = /** @class */ (function () {
    function InteiroMatematico(n) {
        this.n = 0;
        this.n = n;
    }
    InteiroMatematico.prototype.getN = function () {
        return this.n;
    };
    InteiroMatematico.prototype.setN = function (n) {
        this.n = n;
    };
    InteiroMatematico.prototype.getDivisores = function () {
        var divisores = [1];
        var i = 2;
        while (i <= this.n / 2) {
            if (this.n % i == 0)
                divisores.push(i);
            i++;
        }
        divisores.push(this.n);
        return divisores;
    };
    InteiroMatematico.prototype.serieFibonacci = function () {
        if (this.n <= 0)
            return [];
        if (this.n == 1)
            return [0];
        var fibonacci = [1, 1];
        for (var i = 2; i < this.n; i++)
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        return fibonacci;
    };
    InteiroMatematico.prototype.serieTribonacci = function () {
        if (this.n <= 0)
            return [];
        if (this.n == 1)
            return [0];
        var fibonacci = [1, 1, 2];
        for (var i = 3; i < this.n; i++)
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2] + fibonacci[i - 3]);
        return fibonacci;
    };
    InteiroMatematico.prototype.isPrimo = function (n) {
        if (n < 2)
            return false;
        if (n == 2)
            return true;
        for (var i = 3; i <= n / 2; i += 2)
            if (n % i == 0)
                return false;
        return true;
    };
    InteiroMatematico.prototype.getPrimos = function () {
        if (this.n <= 0)
            return [];
        if (this.n == 1)
            return [0];
        var primos = [2];
        for (var i = 3; primos.length < this.n; i += 2)
            if (this.isPrimo(i))
                primos.push(i);
        return primos;
    };
    return InteiroMatematico;
}());
exports.default = InteiroMatematico;
