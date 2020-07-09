/*
    Criando, editando e removendo 
    elementos do HTML usando o JS.
*/

var linkElement = document.createElement("a"); // Cria tag 'a' no HTML

linkElement.setAttribute("href", "https://github.com/igorfjales"); // Seta um atributo href com seu valor
linkElement.setAttribute("title", "GitHub Igor Jales");

var textElement = document.createTextNode("Acessar GitHub Igor Jales"); // Cria texto para o link

linkElement.appendChild(textElement); // Insere texto na tag 'a' criada anteriormente

var containerElement = document.querySelector("#app"); // Referencia a div com o id 'app'
containerElement.appendChild(linkElement); // Insere a tag 'a' criada anteriormente dentro da div com id 'app'

var inputElement = document.querySelector("#nome");
containerElement.removeChild(inputElement); // remove elemento do html