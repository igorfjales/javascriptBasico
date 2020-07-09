/*
2º exercício

Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.

Depois de preencher o input e buscar, a seguinte lista deve aparecer abaixo:

<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
*/


var inputElement = document.querySelector("#app input");
var lista = document.querySelector("#list");
var btnBuscar = document.querySelector("#app button");

btnBuscar.onclick = function buscar() {
    if (inputElement.value !== "") {
        let nomeUsuario = inputElement.value;
        axios
            .get("https://api.github.com/users/" + nomeUsuario + "/repos")
            .then(function (response) {
                renderList(response.data);
            })
            .catch(function (response) {
                if ((response.status = 404)) {
                    mostraErro();
                }
            });
    } else {
        lista.innerHTML = "";
        alert("Campo de entrada em branco");
    }
};

function renderList(repositorios) {
    lista.innerHTML = "";

    for (let repositorio of repositorios) {
        let linha = document.createElement("li");
        let nomeRep = document.createTextNode(repositorio.name);
        linha.appendChild(nomeRep);

        lista.appendChild(linha);
    }
}

function mostraErro() {
    lista.innerHTML = "";

    let linha = document.createElement("li");
    let erro = document.createTextNode("Usuário não encontrado");
    linha.appendChild(erro);

    lista.appendChild(linha);
}