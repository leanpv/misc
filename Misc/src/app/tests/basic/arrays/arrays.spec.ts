import { obtenerRobots } from './arrays';

describe('Pruebas de arrays', () => {
    it('Debe de regresar al menos 3 robots', () => {
        const resp = obtenerRobots();
        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir megaman y ultron', () => {
        const resp = obtenerRobots();
        expect( resp ).toContain('megaman');
        expect( resp ).toContain('ultron');
    });
});
