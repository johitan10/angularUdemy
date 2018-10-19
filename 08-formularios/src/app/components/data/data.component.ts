import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  formulario: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: 'Johan David',
      apellido: 'Lopez'
    },
    correo: 'johan930131@gmail.com',
    pasatiempos: ['comer', 'dormir', 'correr']
  }

  constructor() {
    this.formulario = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, this.noLopez])
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password': new FormControl('', Validators.required),
      'password1': new FormControl()
    });

    this.formulario.controls['password1'].setValidators([
      Validators.required, this.noIgual.bind(this.formulario)
    ]);

    this.formulario.controls['username'].valueChanges
      .subscribe(data => {
        console.log(data);
      })

      this.formulario.get('nombreCompleto.nombre').statusChanges
      .subscribe(data => {
        console.log(data);
      })

  }

  guardarCambios() {
    console.log(this.formulario.value);
    this.formulario.reset(this.usuario);
  }

  agregarPasatiempo() {
    (<FormArray>this.formulario.controls['pasatiempos']).push(new FormControl('', Validators.required));
  }

  noLopez(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'lopez') {
      return {
        noLopez: true
      }
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    let form: any = this;

    if (control.value !== form.controls['password'].value) {
      return {
        diferentes: true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "strider") {
          resolve({ existe: true })
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return promesa;
  }

}
