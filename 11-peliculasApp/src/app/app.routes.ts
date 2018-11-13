import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { DetalleComponent } from "./components/detalle/detalle.component";


export const APP_ROUTES:Routes = [
    { path:'home', component : HomeComponent },
    { path:'buscar', component :BuscadorComponent },
    { path:'detalle/:id', component :DetalleComponent },
    { path:'', pathMatch:'full', redirectTo: 'home' },
    { path:'**', pathMatch:'full', redirectTo: 'home' }  
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);