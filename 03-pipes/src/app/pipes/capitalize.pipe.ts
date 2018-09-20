import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'capitalizado'
})
export class Capitalize implements PipeTransform {
    transform(value: string, todas:boolean = true) {
        value = value.toLocaleLowerCase();
        let nombres = value.split(" ");
        if (todas) {
        for (let i in nombres) {
            console.log(nombres[i]);
            nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
        } 
    } else {
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }
        return nombres.join('-');
    }

}