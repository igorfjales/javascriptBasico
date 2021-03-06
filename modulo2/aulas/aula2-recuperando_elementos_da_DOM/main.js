/*
  Recuperando elementos HTML da DOM de diversas formas
*/

var inputElement = document.querySelector("input.nome"); // Recupera um input com uma classe 'nome'
var btnElement = document.querySelector("button.botao"); // Recupera um button com uma classe 'botao'

btnElement.onclick = function () {
    alert(inputElement.value);                             // (.value) Referencia o valor de dentro do input
};


/*
    Recuperação de elementos da DOM através dos atributos no HTML:

    # getElementBy...

    var inputElement = document.getElementById('nome'); ->      Recupera elemento da DOM pelo seu ID.

    var inputElement = document.getElementsByName('nome') ->    Recupera elemento através do atributo 'name' no HTML

    var inputElement = document.getElementByTagName('input') -> Recupera elemento pela sua tag, sempre
                                                                retorna um vetor pois mais de um elemento
                                                                pode ser encontrado com a mesma tag.

    var inputElement = document.getElementByClassName('nome')-> Recupera todos os elementos que possuem a
                                                                a mesma classe, também em forma de vetor.

    # querySelector:

    - Permite percorrer a DOM localizando o elemento html desejado através de um caminho

    var inputElement = document.querySelector("div#app input"); -> procura um elemento input dentro de uma div
                                                                   com id 'app'.

    var inputElement = document.querySelector('input[name=nome]'); -> Também podemos localizar por um atributo.

    var inputElement = document.querySelector('input');    -> Traz o primeiro elemento que encontrar;
    var inputElement = document.querySelectorAll('input'); -> Retorna um vetor com todos elementos encontrados;

*/
