import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../iterfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor(private heroesService: HeroesService) {
    this.heroesService.obtenerHeroes().subscribe(data => {
      this.heroes = data;
    })
  }

  ngOnInit() {
  }

  eliminar(key:string) {

    this.heroesService.eliminarHeroe(key).subscribe(data =>{
      if (!data) {
        delete this.heroes[key];
      }
    })

  }

}
