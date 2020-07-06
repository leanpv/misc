import { mensaje } from './string';

describe('Pruebas de strings', () => {
    it('Debe regresar un string', () => {
       const resp = mensaje('leanpv');
       expect( typeof resp ).toBe('string');
    });

    it('Debe de regresar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje(nombre);
        expect( resp ).toContain(nombre);
    });
});
