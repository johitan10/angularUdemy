import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, ocultar:boolean = true): any {
    if (!ocultar) {
      return value;
    }
    let salida ="";
    console.log(value.split(''));
    value.split('').forEach(element => {
      salida+='*';
    });
    return salida;
  }

}
