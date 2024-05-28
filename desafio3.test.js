const calculoMultiplos = require('./desafio3');

it('Deve calcular multiplos de 5 e 7 corretamente', () => {
  const result = calculoMultiplos();
  
  
  const expectedmultiplos5 = 99500; 
  const expectedmultiplos7 = 71071; 
  const expectedTotal = expectedmultiplos5 + expectedmultiplos7;

  expect(result.multiplos5).toBe(expectedmultiplos5);
  expect(result.multiplos7).toBe(expectedmultiplos7);
  expect(result.total).toBe(expectedTotal);
});
``
