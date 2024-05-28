const calculaloMultiplos = require('./desafio3');

test('should calculate correct sums for multiples of 5 and 7', () => {
  const result = calculaloMultiplos();
  
  
  const expectedmultiplos5 = 99500; 
  const expectedmultiplos7 = 71071; 
  const expectedTotal = expectedmultiplos5 + expectedmultiplos7;

  expect(result.multiplos5).toBe(expectedmultiplos5);
  expect(result.multiplos7).toBe(expectedmultiplos7);
  expect(result.total).toBe(expectedTotal);
});
``
