
const palavra = "Target";
let palavraLidaaoContrario = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraLidaaoContrario += palavra[i];
}

const palavraNormal = console.log(`Palavra: ${palavra}`);
const palavraIntertida = console.log(`Palavra invertida: ${palavraLidaaoContrario}`)


