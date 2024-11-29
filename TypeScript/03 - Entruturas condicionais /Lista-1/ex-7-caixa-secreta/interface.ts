import Caixa from "./caixa";

let c1 = new Caixa("VScode", "TypeScript");

console.log("Inseri senha errada: \n" + c1.revelaSegredo("SenhaErrada"));

console.log("\nTentei com a senha certa agora: \n"+ c1.revelaSegredo("VScode"));