// Intervalos e Timeouts

function exibeAlgo1() {
    console.log("Olá 1");
}

function exibeAlgo2() {
    console.log("Olá 2");
}

// Primeiro parâmetro é a função que será executada e o segundo é o intervalo em milissegundos.
setInterval(exibeAlgo1, 1000);

setTimeout(exibeAlgo2, 3000);

/*
setInterval -> Utilizado para executar uma função em determinado intervalo de tempo. No nosso caso, a função
de exibir 'Olá 1' será executada a cada 1s.

setTimeout -> Vai esperar um determinado intervalo de tempo antes de executar a função referenciada. No nosso caso,
irá esperar 3s antes de executar a função.

OBS: Não devemos colocar os parênteses dentro do setInterval e setTimeout ao chamar a função, pois não estamos
executando a função normalmente, estamos referenciando ela.
*/
