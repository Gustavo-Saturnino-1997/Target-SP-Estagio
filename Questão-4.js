const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let totalFaturamento = 0;
for (let estado in faturamento) {
    totalFaturamento += faturamento[estado];
}

const formatarEmReais = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

console.log(`Valor total mensal de faturamento: ${formatarEmReais(totalFaturamento)} e abaixo a porcentagem de representação de cada estado:`)

for (const estado in faturamento) {
    const valor = faturamento[estado];
    const percentual = (valor / totalFaturamento) * 100;
    console.log(`Percentual de representação de ${estado}: ${percentual.toFixed(2)}%`);
}






