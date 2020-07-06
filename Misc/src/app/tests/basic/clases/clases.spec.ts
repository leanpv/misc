import { Jugador } from './clases';

describe('Pruebas de clase', () => {

    let jugador = new Jugador();

    beforeAll( () => {
        // console.log('beforeAll');
    });
    beforeEach( () => {
        // console.log('beforeEach: resetea el hp del jugador a 100 antes de cada IT');
        jugador = new Jugador();
    });
    afterAll( () => {
        // console.log('afterAll');
    });
    afterEach( () => {
        // console.log('afterEach');
    });

    it('Debe regresar 80, hp si recibe 20 dmg', () => {
        const resp = jugador.recibeDmg(20);
        expect( resp ).toBe(80);
    });

    it('Debe regresar 50, hp si recibe 50 dmg', () => {
        // console.log('esta prueba va a fallar');
        const resp = jugador.recibeDmg(50);
        expect( resp ).toBe(50);
    });

    it('Debe regresar 0, hp si recibe 100 dmg o más', () => {
        // console.log('esta prueba va a fallar');
        const resp = jugador.recibeDmg(100);
        expect( resp ).toBe(0);
    });
});
