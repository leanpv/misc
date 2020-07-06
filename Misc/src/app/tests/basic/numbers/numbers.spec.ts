import { incrementar } from './numbers';

describe('Pruebas de numbers', () => {
    it('Debe regresar 100, si el numbero ingresado es mayor a 100', () => {
        const resp = incrementar(300);
        expect( resp ).toBe(100);
    });

    it('Debe regresar el numbero ingresado +1 si no es mayor a 100', () => {
        const resp = incrementar(50);
        expect( resp ).toBe(51);
    });
});
