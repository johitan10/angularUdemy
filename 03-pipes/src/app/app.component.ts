import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = "johan lopez";

  nombre2:string= "joHan daVId lopEz tamayo"

  arreglo = [1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  a:number = 0.234;

  salario = 1234.5;

  video = 't2WfrmI9cEM';
  
  heroe = {
    nombre:"Wolverine",
    clave:"WVN",
    edad:"500",
    direccion : {
      calle:"11224",
      casa:"asdadsd"
    }
  }

  valorPromesa = new Promise( (resolve, reject ) => { 
   setTimeout(() => resolve("Llego la data"), 3500 );
  })

  fecha = new Date();

}
