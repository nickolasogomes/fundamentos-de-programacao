import InterioMatematico from "./inteiro-matematico";

let n1 = new InterioMatematico(20);

// n1.tabuada();

// n1.numeroDeDivisores();

// n1.produtoPelaSoma(40);

// n1.elevado(2);

// n1.fatorial();

// console.log(n1.maiorDivisor());
// console.log(n1.menorDivisor());

console.log(n1.divisoresComuns(10));

function testarDesempenho() {
    const testes = [
        { n: 10, m: 15 },
        { n: 100, m: 150 },
        { n: 1000, m: 1500 },
        { n: 10000, m: 15000 },
        { n: 100000, m: 150000 },
    ];

    for (const { n, m } of testes) {
        const teste = new InterioMatematico(n);

        console.log(`Testando com n=${n}, m=${m}`);
        const inicio = performance.now();

        const resultado = teste.divisoresComuns(m);

        const fim = performance.now();

        console.log(`Resultado: ${resultado}`);
        console.log(`Tempo: ${(fim - inicio).toFixed(4)}ms`);
    }
    
}

testarDesempenho();
