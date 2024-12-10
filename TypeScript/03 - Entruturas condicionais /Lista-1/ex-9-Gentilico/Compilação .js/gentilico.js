"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gentilico = /** @class */ (function () {
    function Gentilico(uf) {
        this.uf = uf.toUpperCase();
    }
    Gentilico.prototype.gentilico = function () {
        switch (this.uf) {
            case "AC": return "Acriano";
            case "AL": return "Alagoano";
            case "AP": return "Amazonense";
            case "BA": return "Baiano";
            case "CE": return "Cearense";
            case "DF": return "Basiliense";
            case "ES": return "Capixaba ou Espírito Santense";
            case "GO": return "Goiano";
            case "MA": return "Maranhense";
            case "MT": return "Mato-grossense";
            case "MS": return "Sul-mato-grossense";
            case "MG": return "Mineiro";
            case "PA": return "Paraense";
            case "PB": return "Paraibano";
            case "PR": return "Paranaense";
            case "PE": return "Pernambucano";
            case "PI": return "Piaiense";
            case "RJ": return "Fluminense";
            case "RN": return "Potiguar ou Norte-rio-grandense";
            case "RS": return "Gaúcho ou Sul-rio-grandense";
            case "RO": return "Rondoniano ou Rondoniense";
            case "RR": return "Roraimense";
            case "SC": return "Catarinense";
            case "SP": return "Paulista";
            case "SE": return "Sergipano";
            case "TO": return "Tocantinense";
        }
        return "UF não identificada.";
    };
    Gentilico.prototype.toString = function () {
        return "\nUF: " + this.uf +
            "\nGentílico: " + this.gentilico();
    };
    return Gentilico;
}());
exports.default = Gentilico;
