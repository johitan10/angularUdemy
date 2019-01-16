import { Component, Input } from "@angular/core";
import { DeseosService } from "../providers/deseos.service";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { Lista } from "../modelos";
import { AgregarPage } from "../pages/agregar/agregar.component";

@Component({
   selector: 'app-listas',
   templateUrl: 'listas.component.html'
})
export class ListasComponent {
   
   @Input() terminada:boolean=false;


   constructor(public desesosService: DeseosService, 
      private navCtrl:NavController,
      private alertCtrl: AlertController) { }

   listaSeleccionada(listaEditar: Lista) {
      this.navCtrl.push(AgregarPage, {
         titulo: listaEditar.titulo,
         lista: listaEditar
      })
   }

   borrarLista(lista:Lista, slidingItem:ItemSliding) {
      this.desesosService.borrarLista(lista);
   }

   editarListas(lista:Lista, slidingItem:ItemSliding) {
      slidingItem.close();
      const alerta = this.alertCtrl.create({
         title: 'Editar lista',
         message: 'Editar nombre de la lista',
         inputs: [{
            name: 'titulo',
            placeholder: 'Nombre de la lista',
            value: lista.titulo
         }],
         buttons: [{
            text: 'Cancelar'
         }, {
            text: 'Guardar',
            handler: data => {
               if (data.titulo.length === 0) {
                  return;
               }
               lista.titulo = data.titulo;
               this.desesosService.guardarStorage();

            }
         }]
      });
      alerta.present();
   }
}