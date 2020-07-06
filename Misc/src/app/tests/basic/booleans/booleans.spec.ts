import { usuarioIngresado } from './booleans';

describe('Pruebas de booleans', () => {
    it('Debe regresar true', () => {
        const resp = usuarioIngresado();
        expect( resp ).toBeTruthy();
        // expect( resp ).not.toBeFalsy();
    });
});
