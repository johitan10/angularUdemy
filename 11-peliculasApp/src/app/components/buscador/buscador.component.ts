import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  buscar: string;
  peliculas: any[] = [];
  constructor(public _ps: PeliculasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params.texto) {
        this.buscar = params.texto;
        this.bucarPelicula();
      }
    })

   }

  ngOnInit() {
  }

  bucarPelicula() {
    console.log(this.buscar);
    if (this.buscar.length > 0) {
      this._ps.buscarPelicula(this.buscar).subscribe(data => {
        this.peliculas = data;
      });
    }
  }
}
