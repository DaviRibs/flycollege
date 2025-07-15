// Criar um algoritmo calcular a média de consumo de um carro.
// com base no consumo mensal
// Julho - 670L
// Agosto Rodou 1000 km
// Por dia qual a média de consumo?

//const consumoMensal = 670;
//const distanciaMensal = 1000;

//const diasNoMes = 31;

//const calcMediaLitros = consumoMensal / diasNoMes;

//console.log(`O resultado da média é: ${calcMediaLitros.toFixed(2)}`);

// Criar um algoritmo que calcule area da parede

// const altura = 4.3;
// const largura = 10.78;

// const area = altura * largura;
// console.log(`A area da parede é: ${area.toFixed(2)}m2`);

// Criar um algoritmo que calcule de parece e me diga

// Quantos litros de tinta eu preciso para printar a parede
// sabendo que cada litro de t inta pinta apenas 3m2

// const altura = 5.48;
// const largura = 8.78;
// const tinta = 3;
// const area = altura * largura;
// const litrosTinta = area / tinta;

// console.log(`A area da parede é:  ${area.toFixed(2)}m2`);
// console.log(`
//   A area da parede é: ${area.toFixed(2)}m2
//   Você precisa de ${litrosTinta.toFixed(2)} litros de tinta`);

// const idade = 29;
// if (idade >= 18) {
//   console.log("Você é maior de idade");
// } else {
//   console.log("Voce é menor de idade");

// }

// Crie um algortimo que calcule a area de uma parede
// E faça o orçamento de um pintor.
// Sabendo que o pintor cobra 10 reais por metro quadrado.
// Se area for maior que 10m2, o pinto cobrará uma taxa adicional de 20%
// Sobre o valor da area

const altura = 10.2;
const largura = 4.6;

const area = altura * largura;

const valorPorMetro = 10;

const valorTotal = area * valorPorMetro;

if (area > 10) {
  const valorDaTaxa = valorTotal * 0.2;
  const CalculoTotal = valorTotal + valorDaTaxa;
  console.log(`A area da parede é: ${are} `);
}
