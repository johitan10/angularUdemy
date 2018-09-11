import { Component } from "@angular/core";

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
}) 
export class BodyComponent {
    frase:any = {
        mensaje: 'frase uno',
        autor: 'no se'
    }

    mostrar:boolean = true;

    personajes: string[] = ['Hulk', 'Capitan America', 'Iron Man'];



}