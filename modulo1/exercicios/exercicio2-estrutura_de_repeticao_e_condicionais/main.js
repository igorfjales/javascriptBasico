/*
    2º Exercício
    Crie uma função que dado um intervalo (entre x e y) exiba todos número pares
*/

function retornaPares(numero1, numero2) {
    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

retornaPares(3, 99);