import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = 4.6097100;
  lng: number = -74.0817500;

  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento) {
    if (evento) {
      this.marcadores.push(new Marcador(evento.coords.lat, evento.coords.lng));
      this.guardarStorage();
      this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
    }
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  eliminarMarcador(idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.descripcion }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        marcador.descripcion = result.descripcion;
        marcador.titulo = result.titulo;
        this.guardarStorage();
        this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
      }
    });
  }
}
