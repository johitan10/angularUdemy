import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { APP_ROUTING } from './app.routes';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    DetalleComponent,
    PeliculaImagenPipe,
    GaleriaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
