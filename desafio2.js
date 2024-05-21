 ///Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor 
 // e o índice do menor valor.

let numeros = [5,3,2,1,7,6,4,8,30,0];
console.log(numeros)

numeros.forEach ( (numeros, idx) => {
       console.log ("O número é " + numeros + " e seu índice: " + idx)
    })

let indiceMaior = numeros.indexOf(Math.max(...numeros));
let indiceMenor = numeros.indexOf(Math.min(...numeros));

console.log(`O maior valor é ${numeros[indiceMaior]} e seu índice é ${indiceMaior}`);
console.log(`O menor valor é ${numeros[indiceMenor]} e seu índice é ${indiceMenor}`);
 