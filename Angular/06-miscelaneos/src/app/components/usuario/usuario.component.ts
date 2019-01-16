import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      console.log("PADRE " + params['id']);
    })
  }

  ngOnInit() {
  }

}
