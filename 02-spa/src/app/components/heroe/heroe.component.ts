import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  private detalleHeroe:Heroe;

  constructor(private heroeServicio:HeroesService,
              private activatedRoute:ActivatedRoute
              ) {
        this.activatedRoute.params.subscribe( params => 
          this.detalleHeroe = this.heroeServicio.obtenerPorId(params['id']) 
        );
    }

}
