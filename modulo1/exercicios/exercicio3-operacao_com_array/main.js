/*
3º Exercício
Crie uma função que verifique se um vetor de habilidades possui a habilidade "Javascript"
e retorne um booleano caso exista ou não.
*/

function verificaHabilidade(habilidades) {
    let index = habilidades.indexOf("Javascript", 0);

    if (index !== -1) {
        return true;
    } else {
        return false;
    }
}

var habilidades = ["Java", "Python", "C#", "Javascript"];

var retorno = verificaHabilidade(habilidades);
console.log(retorno);