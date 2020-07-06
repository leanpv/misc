import { FormsRegister } from './forms';
import { FormBuilder } from '@angular/forms';


describe('Formularios', () => {

    let componente: FormsRegister;

    beforeEach( () => {
        componente = new FormsRegister(new FormBuilder());
    });

    it('Debe de crear un form con 2 campos, email y pass', () => {
        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();
    });

    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El email debe ser un email valido', () => {
        const control = componente.form.get('email');
        control.setValue('leanpv@gmail.com');
        expect(control.valid).toBeTruthy();
    });
});
