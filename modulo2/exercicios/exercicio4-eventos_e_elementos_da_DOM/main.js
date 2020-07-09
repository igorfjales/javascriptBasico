/*
4º exercício

Seguindo o resultado do exercício anterior adicione um input em tela e um botão.
Ao clicar no botão, uma função "adicionar" deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
*/
var inputElement = document.querySelector(".nome");
var lista = document.querySelector(".lista");

function adicionar() {
    if (inputElement.value !== "") {
        let linha = document.createElement("li");
        let textoNome = document.createTextNode(inputElement.value);
        linha.appendChild(textoNome);
        lista.appendChild(linha);

        inputElement.value = "";
    } else {
        alert("Insira um nome!");
    }
}