import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private validatorServ: ValidatorsService) {
    this.crearFormulario();
    this.cargarDataFormulario();
    this.crearListeners();
  }

  ngOnInit( ) {}

  noValid(formControlName) {
    // console.log(formControlName);
    return this.formulario.get(formControlName).invalid && this.formulario.get(formControlName).touched;
  }

  noValidDir(formControlName) {
    // console.log(formControlName);
    return this.formulario.get(`direccion.${ formControlName }`).invalid && this.formulario.get(`direccion.${ formControlName }`).touched;
  }

  noValidPasatiempo(formControlName) {
    // console.log('pasatiempos', this.formulario.get(`pasatiempos.${ formControlName }`));
    return this.formulario.get(`pasatiempos.${formControlName}`).invalid && this.formulario.get(`pasatiempos.${formControlName}`).touched;
  }

  get pasatiempos() {
    return this.formulario.get('pasatiempos') as FormArray;
  }


  pass2NoValid() {
    const pass1 = this.formulario.get('password').value;
    const pass2 = this.formulario.get('password2').value;
    return ( pass1 === pass2 ) ? false : true;
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', [Validators.required, Validators.minLength(4)], this.validatorServ.takedUser],
      // los validadores asincronos van en la tercer posicion del arreglo
      password: ['', [Validators.required, Validators.minLength(5) ]],
      password2: ['', [Validators.required, Validators.minLength(5) ]],
      check: ['', Validators.requiredTrue],
      direccion: this.formBuilder.group({
        address: ['', [Validators.required, this.validatorServ.noWord ] ],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: [''],
      }),
      pasatiempos: this.formBuilder.array([])
    },
    {
      validators: this.validatorServ.equalPass('password', 'password2')
    }
    );
  }

  crearListeners() {
    this.formulario.valueChanges.subscribe(formulario => {
      console.log(formulario);
    });

    // this.formulario.statusChanges.subscribe(status => {
    //   console.log({ status });
    // });

    this.formulario.get('usuario').statusChanges.subscribe(status => {
      console.log({ status });
    });
  }

  cargarDataFormulario() {
    this.formulario.reset({
      email: 'leanpv@gmail.com',
      password: '12345',
      password2: '12345',
      usuario: '',
      check: true,
      direccion: {
        address: 'Cabrera 3000',
        city: 'Capital Federal',
        state: 'CABA',
        zip: '11123'
      }
    });
    // Cargar elementos predeterminados dentro del array
    ['Correr', 'Ver series'].forEach( valor => this.pasatiempos.push( this.formBuilder.control(valor, Validators.required)));
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  agregarPasatiempo() {
    this.pasatiempos.push( this.formBuilder.control('', Validators.required));
  }

  guardar() {
    console.log(this.formulario);

    if (this.formulario.invalid || this.formulario.pending) {
      return Object.values( this.formulario.controls ).forEach( control => {
        // console.log(control);
        if (control instanceof FormGroup || control instanceof FormArray) {
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
