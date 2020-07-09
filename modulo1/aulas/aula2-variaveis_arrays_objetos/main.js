/*
  Variáveis e suas tipagens;
  Arrays
  Objetos
  Diferença entre "var" e "let"
  Imprimindo dados no console

No Javascript, não precisamos informar qual o tipo das nossas variáveis, pois a linguagem possui tipagem
dinâmica. Ou seja, assumem o tipo de dado do valor que for inserido nela.
*/
var teste = "testando"; // Aqui é string
teste = 10;             // Aqui é inteiro

var nome = "Igor";      // string
var idade = 20;         // int
var peso = 75.5;        // float
var humano = true;      // boolean

// Array
var nomeCompleto = ["Igor", "Freire", "Jales"];

// Objeto
var aluno = {
    nome: nomeCompleto[2],
    idade: 20,
    peso: 75.5,
    humano: true,
};

/* 
Variáveis também podem ser declaradas com a palavra chave "let" no lugar de "var". Qual a diferença?
A única diferença entre as duas é o escopo em que essas variáveis existem. Enquanto as variáveis declaradas
com "let" têm escopo de bloco, instrução ou expressão, as variáveis declaradas com "var" têm escopo global
ou escopo de função.
*/

let teste2 = "testando criação de variável com let";

// Exibindo valores armazenados nas variáveis:

console.log(nome, ',', idade, ',', peso, ',', humano);

console.log(nomeCompleto);
console.log(nomeCompleto[0]);
console.log(nomeCompleto[1]);
console.log(nomeCompleto[2]);

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.peso);
console.log(aluno.humano);
