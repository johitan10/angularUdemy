import { Injectable } from "@angular/core";
import { Lista } from "../modelos";

@Injectable()
export class DeseosService {

   listas:Lista[] = [];

   constructor() {
      const lista1 = new Lista("Lista 1");
      const lista2 = new Lista("Lista 2");
      this.listas.push(lista1, lista2);
      console.log(this.listas);
   }

}