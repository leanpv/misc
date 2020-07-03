import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ErrorValidate } from '../interfaces/ErrorValidate';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {}

  // coleccion que regresa un objeto

  noWord( control: FormControl ): ErrorValidate {

    if (control.value && (control.value.toLowerCase() === 'custom')) {
      return {
        noWord: true
      };
    }
    return null;
  }

  equalPass(pass1Name: string, pass2Name: string) {
    return ( formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
        // Cuando se devuelve null siginifica que la validacion pasa sin problemas
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }

  takedUser( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ( control.value === 'leanpv') {
          resolve({ existe: true});
        } else {
          resolve( null );
        }
      }, 3500);
    });
  }
}
