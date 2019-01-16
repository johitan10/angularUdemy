import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../iterfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html'
})
export class HeroeEditComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  };

  nuevo: boolean = false;
  id: string;

  constructor(private heroeServcie: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros['id'];
      console.log(this.id);
      if (this.id === 'nuevo') {
        this.nuevo = true;
      } else {
        this.nuevo = false;
        this.heroeServcie.obtenerHeroe(this.id).subscribe(data=> {
          this.heroe = data;
        })
      }
    })
  }

  ngOnInit() {
  }

  guardar() {
    if (this.nuevo) {
      this.heroeServcie.nuevoHeroe(this.heroe).subscribe(data => {
        this.router.navigate(['/heroe', data.name]);
      }, error => {
        console.log(error);
      });
    } else {
      this.heroeServcie.actualizarHeroe(this.heroe, this.id).subscribe(data => {
        
      }, error => {
        console.log(error);
      });
    }
  }

  agregarNuevo(formulario:NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);    
    formulario.reset({
      casa:"Marvel"
    });

  }


}
