const prompt = require("prompt-sync")();

console.log("==============================================")
console.log("=========== Exercícios da Lista 04 ===========")
console.log("==============================================\n")

// Exercício 01 //

console.log("Exercício: 01");
var nomes = ["Arthur", "José", "Gabriel", "Kalil", "Camila"];
console.log("Nome na posição 2: " + nomes[2]);
nomes[3] = "Mariana";
console.log("Array atualizado: ", nomes);

// Exercício 02 //

console.log("\nExercício: 02");

function ordenarDoisNumeros(numeros) {
    var a = numeros[0];
    var b = numeros[1];

    if (a > b) {
        return [b, a];
    } else {
        return [a, b];
    }
}
var numeros = [22, 13];
var resultado = ordenarDoisNumeros(numeros);

console.log("Original: " + numeros);
console.log("Ordenado: " + resultado);

// Exercício 03 //

console.log("\nExercício: 03");

function ordenarTresNumeros(numeros) {
    var a = numeros[0];
    var b = numeros[1];
    var c = numeros[2];

    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        var temp = a;
        a = c;
        c = temp;
    }

    if (b > c) {
        var temp = b;
        b = c;
        c = temp;
    }

    return [a, b, c];
}

var numeros = [30, 13, 22];
var resultado = ordenarTresNumeros(numeros);
console.log("Original: " + numeros);
console.log("Ordenado: " + resultado);

// Exercício 04
console.log("\nExercício: 04");

var numeros = [];
for (var i = 1; i <= 3; i++) {
    var num = parseInt(prompt("Digite o número " + i + ": "));
    numeros.push(num);
}

console.log("\nArray original: " + numeros);
var invertido = [numeros[2], numeros[1], numeros[0]];
console.log("Array invertido: " + invertido);

// Exercício 05 //

console.log("\nExercício: 05");

var qtd = parseInt(prompt("Quantos números deseja inserir no array? "));
var numeros = [];
for (var i = 1; i <= qtd
    ; i++) {
    var num = parseInt(prompt("Digite o número " + i + ": "));
    numeros.push(num);
}
console.log("\nArray original: " + numeros);
var invertido = [];

for (var j = qtd - 1; j >= 0; j--) {
    invertido.push(numeros[j]);
}
console.log("Array invertido: " + invertido);

// Exercício 06 //

console.log("\nExercício: 06");

function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var numeros = [42, 10, 7, 99, 25, 1];
console.log("Original: " + numeros);
console.log("Ordenado: " + bubbleSort(numeros));

// Exercício 07 //

console.log("\nExercício: 07")
function encontrarIndices(vetor, numero) {
    let indices = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    return indices;
}
let numeros = [3, 5, 7, 5, 2, 5, 9];
console.log(encontrarIndices(numeros, 5));

// Exercício 08 // 

console.log("\nExercício 08")
function fibonacciArray() {
    var n = parseInt(prompt("Digite um número inteiro positivo: "));
    var fib = [];

    if (n > 0) fib.push(0);
    if (n > 1) fib.push(1);

    for (var i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log("Sequência de Fibonacci:", fib);
}
fibonacciArray();

// Exercício 09 //

console.log("Exercício: 09")
var n = parseInt(prompt("Digite um número inteiro positivo: "));
var fatorial = [1];
console.log("Fatorial de 0: 0! = 1");

for (var i = 1; i <= n; i++) {
    fatorial[i] = i * fatorial[i - 1];
    console.log(
        "Fatorial de " + i + ": " + i + " x elemento" + (i - 1) + " = " + fatorial[i]
    );
}
console.log("\nSequência de fatoriais até " + n + ": ", fatorial);

// Exercício 10 //

console.log("Exercício: 10")

var tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

var jogador = "X";
var jogadas = 0;

while (jogadas < 9) {
  console.log("\nTabuleiro:");
  console.log(tabuleiro[0]);
  console.log(tabuleiro[1]);
  console.log(tabuleiro[2]);

  var linha = parseInt(prompt("Digite a linha (0, 1 ou 2): "));
  var coluna = parseInt(prompt("Digite a coluna (0, 1 ou 2): "));

  if (tabuleiro[linha][coluna] === "") {
    tabuleiro[linha][coluna] = jogador;
    jogadas++;

    jogador = (jogador === "X") ? "O" : "X";
  } else {
    console.log("Posição já ocupada! Tente de novo.");
  }
}

console.log("\nTabuleiro final:");
console.log(tabuleiro[0]);
console.log(tabuleiro[1]);
console.log(tabuleiro[2]);