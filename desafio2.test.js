const { obterIndices } = require('./desafio2')

describe('obterIndices', () => {
    it('deve retornar o índice do maior e menor valor', () => {
        const numeros = [5, 3, 2, 1, 7, 6, 4, 8, 30, 0];
        const resultado = obterIndices(numeros);
        
        expect(resultado.maior).toEqual({ valor: 30, indice: 8 });
        expect(resultado.menor).toEqual({ valor: 0, indice: 9 });
    })
});