/*
    4º Exercício    
    Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

    De 0-1 ano: Iniciante
    De 1-3 anos: Intermediário
    De 3-6 anos: Avançado
    De 7 acima: Master

*/

function retornaExperiencia(anosDeEstudo) {
    if (anosDeEstudo >= 0 && anosDeEstudo <= 1) {
        return "Iniciante";
    } else if (anosDeEstudo > 1 && anosDeEstudo <= 3) {
        return "Intermediário";
    } else if (anosDeEstudo > 3 && anosDeEstudo <= 6) {
        return "Avançado";
    } else if (anosDeEstudo >= 7) {
        return "Master";
    }
}

var experiencia = retornaExperiencia(7);
console.log(experiencia);