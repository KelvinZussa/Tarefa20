//var multiplos5 = 0
//var multiplos7 = 0

//for (i = 0; i < 1000; i++) {
  ///  multiplos5 += (i % 3 == 0) ? i : 0;
   // multiplos7 += (i % 5 == 0) ? i : 0;
  //}

 
  ///console.log ("Somatórios dos Múltiplos de 5: " + multiplos5)
  ///console.log ("Somatórios dos Múltiplos de 7: " + multiplos7)
 /// console.log ("A soma de todos é " + (multiplos5 + multiplos7))

 function somaMultiplos5e7(limite) {
    let soma = 0;
    for (let i = 0; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Exemplo de uso:
const limite = 1000;
const resultado = somaMultiplos5e7(limite);
console.log(`A soma de todos os múltiplos de 5 ou 7 abaixo de ${limite} é: ${resultado}`);
