// Funções no JS

// Declaração da função com seus parâmetros
function soma(numero1, numero2) {
    let resultado = numero1 + numero2;

    return resultado;
}

var resultado = soma(1, 2);
console.log(resultado);
  /*
Poderíamos fazer assim também:
console.log(soma(1, 2));
*/

/*
    Perceba que temos duas variáveis com o mesmo nome, "resultado". Aqui, vemos a aplicabilidade do "var" e
    do "let". Se quiséssemos usar a variável 'resultado' que foi declarada dentro do escopo da função, fora
    dela, não iríamos conseguir.
 */