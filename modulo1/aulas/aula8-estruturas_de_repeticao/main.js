/*
     Estruturas de repetição

     FOR / WHILE / DO WHILE
*/


// For -> Mais utilizado quando sabemos quantas vezes queremos que o loop se repita
console.log("For:");
for (let i = 0; i < 21; i++) {
    console.log(i);
}

// While -> Mais utilizado quando NÃO sabemos quantas vezes o loop deve se repetir
j = 1000000;

console.log("\nWhile:");
while (j > 10) {
    console.log(j);
    j /= 10;
}

// Do - while -> Executa primeiro para depois verificar uma condição
var k = 1;

console.log("\nDo - while:");
do {
    console.log("passei aqui");
} while (k != 1);