import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: []
})
export class MapaEditarComponent implements OnInit {

  formulario: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formulario = formBuilder.group({
      'titulo': data.titulo,
      'descripcion': data.desc
    })
  }

  ngOnInit() {
  }

  guardarCambios() {
    this.dialogRef.close(this.formulario.value);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
