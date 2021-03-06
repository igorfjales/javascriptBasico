/*
    Condicionais no JS
     - IFs
     - Switch
*/

function retornaSexo(sexo) {
    // M, F

    // IF:
    if (sexo === "M") {
        return "Masculino";
    } else if (sexo === "F") {
        return "Feminino";
    } else {
        return "Outro";
    }

    /*
     OBS: A medida que se passa em um 'return' dentro de uma função, tudo o que está abaixo deste é
          ignorado, pois é um ponto de saída da função.
    */

    // Switch:
    switch (sexo) {
        case "M":
            return "Masculino";

        case "F":
            return "Feminino";

        default:
            return "Outro";
    }
}

var resultado = retornaSexo("M");
console.log(resultado);


/*
    Perceba que dentro das cláusulas condicionais dos IFs, podemos utilzar operadores de comparação diferentes.

    " = "  -> Recebe (Não compara).

    " == "  -> Compara se somente o valor é igual.
        Exemplo:
            if( 1 == "1" ) -> (true)
            -> valores iguais mas tipos diferentes, então iríamos entrar nesse IF usando '=='.


    " === " -> Compara se o valor e o tipo são iguais.
        Exemplo:
            if( 1 === "1" ) -> (false)
            -> valores iguais mas tipos diferentes, então NÃO iríamos entrar nesse IF usando '==='.

*/