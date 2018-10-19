import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeEditComponent } from './components/heroes/heroe-edit.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeEditComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
