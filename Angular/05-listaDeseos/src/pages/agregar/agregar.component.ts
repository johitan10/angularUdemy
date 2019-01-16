import { Component } from "@angular/core";
import { DeseosService } from "../../providers/deseos.service";
import { Lista, ListaItem } from "../../modelos";
import { NavParams } from "ionic-angular";

@Component({
      selector: 'page-agregar',
      templateUrl: 'agregar.component.html'
})
export class AgregarPage {

      nuevaLista: Lista;
      nombreItem: string = '';

      constructor(public desesosService: DeseosService,
            private navParams: NavParams) {
            if (this.navParams.get("lista")) {
                  this.nuevaLista = this.navParams.get("lista");
            } else {
                  this.nuevaLista = new Lista(navParams.get("titulo"));
                  this.desesosService.agregarLista(this.nuevaLista);
            }
      }

      agregarItem() {
            if (this.nombreItem.length === 0) {
                  return;
            }
            const nuevoItem = new ListaItem(this.nombreItem);
            this.nuevaLista.items.push(nuevoItem);
            this.desesosService.guardarStorage();
            this.nombreItem = '';
      }

      actualizarItem(item: ListaItem) {
            item.completado = !item.completado;

            const pendientes = this.nuevaLista.items.filter(itemData => {
                  return !itemData.completado;
            }).length;
            if (pendientes === 0) {
                  this.nuevaLista.terminada = true;
                  this.nuevaLista.terminadaEn = new Date();
            } else {
                  this.nuevaLista.terminada = false;
                  this.nuevaLista.terminadaEn = null;
            }
            this.desesosService.guardarStorage();
      }

      borrarItem(index: number) {

            this.nuevaLista.items.splice(index, 1);
            this.desesosService.guardarStorage();

      }

}