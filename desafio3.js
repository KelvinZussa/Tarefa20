var multiplos5 = 0
var multiplos7 = 0

for (i = 0; i < 1000; i++) {
multiplos5 += (i % 3 == 0) ? i : 0;
 multiplos7 += (i % 5 == 0) ? i : 0;
}

 
console.log ("Somatórios dos Múltiplos de 5: " + multiplos5)
console.log ("Somatórios dos Múltiplos de 7: " + multiplos7)
console.log ("A soma de todos é " + (multiplos5 + multiplos7))

 