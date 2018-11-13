import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graficas';
seleccionada = 1;

seleccionarTab(tab:number) {
  this.seleccionada = tab;
}


}
