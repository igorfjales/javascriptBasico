/*
5º exercício
Dado o seguinte vetor de objetos:

var usuarios = [
 {
 nome: "Igor",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

function descreveUsuarios(usuarios) {
    for (let usuario of usuarios) {
        console.log(
            "O",
            usuario.nome,
            "possui as habilidades: ",
            usuario.habilidades.join(", ")
        );
    }
}

var usuarios = [
    {
        nome: "Igor",
        habilidades: ["Javascript", "ReactJS", "Redux"],
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
    },
];

descreveUsuarios(usuarios);