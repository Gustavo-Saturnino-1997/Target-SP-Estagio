const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));
let menorValor = Infinity;
let maiorValor = -Infinity;
let somaFaturamento = 0;
let diasComFaturamento = 0;

dados.forEach(({ valor }) => {
    if (valor > 0) {  // Ignorar dias sem faturamento
        if (valor < menorValor) menorValor = valor;
        if (valor > maiorValor) maiorValor = valor;
        somaFaturamento += valor;
        diasComFaturamento++;
    }
});

const mediaFaturamento = somaFaturamento / diasComFaturamento;

let diasAcimaDaMedia = 0;
dados.forEach(({ valor }) => {
    if (valor > mediaFaturamento) {
        diasAcimaDaMedia++;
    }
});

const formatarEmReais = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}
console.log(`Menor valor de faturamento: R$ ${formatarEmReais(menorValor)}`);
console.log(`Maior valor de faturamento: R$ ${formatarEmReais(maiorValor)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);

