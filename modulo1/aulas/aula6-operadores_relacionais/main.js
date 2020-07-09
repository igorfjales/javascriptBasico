/*
  Operadores Relacionais
  AND, OR, NOT
*/

var sexo = "M",
    idade = 20;

// Operador AND - &&   (Todas as partes precisam ser verdadeiras para satisfazer a condição)
if (sexo === "M" && idade >= 18) {
    console.log("Sexo Masculino e Maior de idade");
}

// Operador OR - ||    (Apenas uma parte precisa ser verdadeira para satisfazer a condição)
if (sexo === "M" || idade >= 18) {
    console.log("OK");
}

// Operador NOT - !   (Negação), também pode ser  !=  
if (sexo !== 'M') {
    console.log('Feminino')
}