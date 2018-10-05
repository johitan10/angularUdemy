import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `    
    Usuario Nuevo
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.parent.params.subscribe(params => {
      console.log("HIJA " + params['id']);
    })
  }

  ngOnInit() {
  }

}
