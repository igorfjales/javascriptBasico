/*
2º exercício

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0

*/

var containerElement = document.querySelector(".quadrados");

function adicionaQuadrado() {
    let quadrado = document.createElement("div");

    quadrado.style.width = 100;
    quadrado.style.height = 100;
    quadrado.style.backgroundColor = "#f00";

    containerElement.appendChild(quadrado);

    quadrado.onmouseover = function trocaCor() {
        let novaCor = getRandomColor();
        quadrado.style.backgroundColor = novaCor;
    };
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}