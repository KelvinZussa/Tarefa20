const { mdc } = require("./Desafio1");

describe('Validação', () => {
    it('calculo do mdc', () => {
        expect(mdc(72,120)).toBe(24)
        
    });
});