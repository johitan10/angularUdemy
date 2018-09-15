import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private heroeServicio: HeroesService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroeServicio.obtenerPorTexto(params['texto']);
      this.termino =  params['texto'];
    });
  }

}
