import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  popularesNinos:any;
  populares:any;

  constructor(public peliculasService: PeliculasService) {

    this.peliculasService.obtenerCartelera().subscribe(data => {
      this.cartelera = data;
    });

    this.peliculasService.obtenerPopulares().subscribe(data => {
      this.populares = data;
    });

    this.peliculasService.obtenerParaNinos().subscribe(data => {
      this.popularesNinos = data;
    });
  }


  ngOnInit() {
  }

}
