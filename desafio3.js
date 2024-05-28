function calculoMultiplos() {


let multiplos5 = 0
let multiplos7 = 0

for (let i = 0; i < 1000; i++) {
 multiplos5 += (i % 5 == 0) ? i : 0;
 multiplos7 += (i % 7 == 0) ? i : 0;
}

return {
    multiplos5, multiplos7, 
    total: multiplos5 + multiplos7
}
 
console.log ("Somatórios dos Múltiplos de 5: " + multiplos5)
console.log ("Somatórios dos Múltiplos de 7: " + multiplos7)
console.log ("A soma de todos é " + (multiplos5 + multiplos7))
}
 
module.exports = calculoMultiplos