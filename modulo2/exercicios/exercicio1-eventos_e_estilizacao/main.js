/*
1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.
*/

var containerElement = document.querySelector(".quadrados");

function adicionaQuadrado() {
    var quadrado = document.createElement("div");
    quadrado.style.width = 100;
    quadrado.style.height = 100;
    quadrado.style.backgroundColor = "#f00";

    containerElement.appendChild(quadrado);
}