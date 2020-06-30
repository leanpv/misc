import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit( ) {
    this.cargarDataFormulario();
  }

  noValid(formControlName) {
    // console.log(formControlName);
    return this.formulario.get(formControlName).invalid && this.formulario.get(formControlName).touched;
  }

  noValidDir(formControlName) {
    // console.log(formControlName);
    return this.formulario.get(`direccion.${ formControlName }`).invalid && this.formulario.get(`direccion.${ formControlName }`).touched;
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5) ]],
      check: ['', Validators.requiredTrue],
      direccion: this.formBuilder.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: [''],
      })
    });
  }

  cargarDataFormulario() {
    this.formulario.reset({
      email: 'leanpv@gmail.com',
      password: '12345',
      check: '',
      direccion: {
        address: 'Cabrera 3000',
        city: 'Capital Federal',
        state: 'CABA',
        zip: '11123'
      }
    });
  }

  guardar() {
    console.log(this.formulario);

    if (this.formulario.invalid) {
      return Object.values( this.formulario.controls ).forEach( control => {
        if (control instanceof FormGroup) {
          Object.values( control.controls ).forEach( ctrl => ctrl.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    this.formulario.reset({
      email: 'email-reseteado@gmail.com'
    });
  }
}
