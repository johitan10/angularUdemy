import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  pelicula:any;
  regtresarA:string;

  constructor(public _ps: PeliculasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.regtresarA = params.pag;
      _ps.buscarPeliculaPorId(params.id).subscribe(data => {
        this.pelicula = data;
      })
    })
   }

  ngOnInit() {
  }

}
