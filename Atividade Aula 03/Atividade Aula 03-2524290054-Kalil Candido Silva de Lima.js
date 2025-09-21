const prompt = require('prompt-sync')()

// para melhor experiência é recomendável que execute o código por completo no NODE.

// Atividades Aula 03 //

console.log("=============================================")
console.log("=========== Exercícios da Aula 03 ===========")
console.log("============================================= \n")


// Exercício 01 //

console.log("Atividade 01: ")
var nome = prompt("Informe seu nome para começar: ")
console.log(`\nSeja bem vindo ${nome}, espero que se divirta!!! \n`)

// Exercício 02 //

console.log("Atividade 02:")
var idade = prompt("Agora nos diga sua idade e iremos dizer se ela é par ou impar: ")
if (idade % 2 === 0) {
    console.log(`\n${nome} você tem ${idade} anos, uma idade par.`)
} else {
    console.log(`\n${nome} você tem ${idade} anos, uma idade impar.`)
}

// Exercício 03 //

console.log("\nAtividade 03:")
var anoNascimento = parseInt(prompt(`Em que ano você nasceu ${nome}: `));
var anoAtual = new Date().getFullYear();
var resultado = "";

for (var ano = anoAtual; ano >= anoNascimento; ano--) {
    resultado += ano + " ";
}
console.log("\nA seguir todos os anos em que você estava vivo:")
console.log(resultado);

// Exercício 04 //

console.log("\nAtividade 04:")
console.log("Digite o nome de 10 pessoas e diremos se elas são maiores ou menores de idade.")
var maiorIdade = 0;
var menorIdade = 0;

for (var i = 1; i <= 10; i++) {
    var idade = parseInt(prompt("Digite a idade da pessoa " + (i < 10 ? "0" + i : i) + ": "));

    if (idade >= 18) {
        maiorIdade++;
    } else {
        menorIdade++;
    }
}
console.log("\nTotal de maiores de idade: " + maiorIdade);
console.log("Total de menores de idade: " + menorIdade);

// Exercício 05 //

console.log("\nExercício 05:")
class Aluno {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}
var aluno = new Aluno("Kalil", 19, 82);

console.log("Nome na instanciacao do objeto: " + aluno.nome);
console.log("Idade na instanciacao do objeto: " + aluno.idade);
console.log("Peso na instanciacao do objeto: " + aluno.peso);

aluno.nome = "João";
aluno.idade = 20;
aluno.peso = 79;

console.log("\nNome após alteração da propriedade do objeto: " + aluno.nome);
console.log("Idade após alteração da propriedade do objeto: " + aluno.idade);
console.log("Peso após alteração da propriedade do objeto: " + aluno.peso);

// Lista de Exercício 03 //

console.log("\n==============================================")
console.log("=========== Lista de Exercícios 03 ===========")
console.log("==============================================\n")

// Exercício 01 //

console.log("Exercício 01:")
console.log("\nDigite 20 valores e nós iremos somar eles.")
var contador = 1;
var soma = 0;
while (contador <= 20) {
    var valor = parseFloat(prompt("Digite o valor real " + contador + ": "));
    soma += valor; 
    contador++;
}
console.log("O somatório dos 20 valores é: " + soma);

// Exercício 02 //

console.log("Exercício 02:")
console.log("\nDigite 20 valores e nós iremos somar eles.")
var contador = 1;
var soma = 0;
do {
    var valor = parseFloat(prompt("Digite o valor real " + contador + ": "));
    soma += valor;
    contador++;
} while (contador <= 20);

console.log("O somatório dos 20 valores é: " + soma);

// Exercício 03 //

console.log("\nExercício 03:")
console.log("Lanchonete, escolha seus lanchinhos")
const cardapio = {
    100: 1.70, // Cachorro quente
    101: 2.30, // Bauru simples
    102: 2.60, // Bauru com ovo
    103: 2.40, // Hambúrguer
    104: 2.50, // Cheeseburguer
    105: 1.00  // Refrigerante
  };
var total = 0;
var codigo;
  
  do {
    codigo = parseInt(prompt("Digite o código do produto (ou 0 para finalizar): "));
  
    if (codigo === 0) {
      break;
    }
  
    if (cardapio[codigo]) {
var qtd = parseInt(prompt("Digite a quantidade desejada: "));
      total += cardapio[codigo] * qtd;
    } else {
      console.log("Código inválido! Tente novamente.");
    }
  } while (codigo !== 0);

  console.log("O valor total a pagar é: R$ " + total.toFixed(2));

// Exercício 04 //

  console.log("\nExercício: 04");

var totalCobaias = 0;
var totalCoelhos = 0;
var totalRatos = 0;

for (var i = 1; i <= 15; i++) {
    console.log("Experiência " + (i < 10 ? "0" + i : i));

    var valor = parseInt(prompt("Digite a quantidade de cobaias: "));
    var codigo = parseInt(prompt("Digite o código (1 - Coelho, 2 - Rato): "));

    totalCobaias += valor;

    if (codigo === 1) {
        totalCoelhos += valor;
    } else if (codigo === 2) {
        totalRatos += valor;
    } else {
        console.log("Código inválido! Esse valor não será contabilizado.");
        totalCobaias -= valor;
    }
}

var porcentagemCoelhos = (totalCoelhos / totalCobaias) * 100;
var porcentagemRatos = (totalRatos / totalCobaias) * 100;

console.log("\nTotal de cobaias: " + totalCobaias);
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Percentual de coelhos: " + porcentagemCoelhos.toFixed(2) + "%");
console.log("Percentual de ratos: " + porcentagemRatos.toFixed(2) + "%");

// Exercício 05 //

console.log("\nExercício: 05");

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Número: " + i + " | Quadrado: " + (i * i));
    }
}
