/*


**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let  
 nVitorias = 0;
let nDerrotas = 0;

rl.question("Quantas vezes o herói venceu? ", (vitorias) => {
  nVitorias = parseInt(vitorias);

  rl.question("Quantas vezes o herói perdeu? ", (derrotas) => {
    nDerrotas = parseInt(derrotas);

    const rankFinal = calculaRanking(nVitorias, nDerrotas);
    const saldoVitorias = nVitorias - nDerrotas;

    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível de ${rankFinal}`);

    rl.close();
  });
});

function calculaRanking(nVitorias, nDerrotas) {
  const saldoVitorias = nVitorias - nDerrotas;

  if (saldoVitorias < 10) {
    return "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    return "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    return "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    return "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    return "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    return "Lendário";
  } else {
    return  
 "Imortal";
  }
}