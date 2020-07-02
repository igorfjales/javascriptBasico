/**
 * AJAX
 * 
 * Requisição assícrona que realizamos para um backend.
 * 
 * Requisições assíncronas não ocorrem no mesmo fluxo que o do nosso código,
 * por isso, podem demorar algum tempo para ter um retorno, pois, é uma requisição 'para fora dos sistema atual'.
 * 
 * Forma de fazer uma requisição a um servidor e ter a posse das informações
 * de retorno, sem que seja necessário fazer o reload da página.
 */

var xhr = new XMLHttpRequest(); // dá acesso aos métodos para realizarmos requisições e fazermos verificações dela.

xhr.open('GET', 'https://api.github.com/users/igorfjales'); /* Utilizamos como 1º parâmetro o método HTTP 
                                                               e o 2º a URL que desejamos acessar. */
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}