/*
3º exercício

A partir do seguinte vetor:

var nomes = ["Igor", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Igor
● Gabriel
● Lucas
*/

var nomes = ["Igor", "Gabriel", "Lucas", "Jales"];

var lista = document.querySelector(".lista");

for (const nome of nomes) {
    let linha = document.createElement("li");
    let textoNome = document.createTextNode(nome);
    linha.appendChild(textoNome);
    lista.appendChild(linha);
}