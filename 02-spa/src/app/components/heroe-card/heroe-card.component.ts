import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroeParametro:Heroe;
  @Input() idx:number;

  

  constructor(private router:Router) {
    
   }

  ngOnInit() {
  }

  verHeroe(id:number) {
    this.router.navigate([ '/heroe', id ])
  }

}
