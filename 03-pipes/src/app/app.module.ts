import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Capitalize } from './pipes/capitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    Capitalize,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
