import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo:null,
    pais:"COL",
    sexo: "Hombre",
    acepta:false
  }

  paises = [{
    codigo:"COL",
    nombre:"Colombia"
  },{
    codigo:"ESP",
    nombre:"España"
  }]

  sexos = ["Hombre", "Mujer", "Sin definir"]

  constructor() { }

  guardar(forma:NgForm) {
    console.log(forma);
  }

}
