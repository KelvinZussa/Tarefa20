///Calcule o MDC (máximo divisor comum) entre dois números

function mdc(a, b) {
    if (b === 0) {
      return a;
    }
    return mdc(b, a % b);
  }
  
  let numero1 = 72;
  let numero2 = 120;
  console.log("O MDC é: " + mdc(numero1, numero2));
  
  module.exports = {mdc}