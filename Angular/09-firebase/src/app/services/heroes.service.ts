import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Heroe } from '../iterfaces/heroe.interface';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url:string ="https://heroes-da936.firebaseio.com/heroes.json";
  urlActualizar:string ="https://heroes-da936.firebaseio.com/heroes";

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.post(this.url, body, {headers}).pipe(map(
      res => {
        return res.json();
      }))
  }

  actualizarHeroe(heroe:Heroe, key:string) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.put(this.urlActualizar + '/' + key + '.json', body, {headers}).pipe(map(
      res => {
        return res.json();
      }))
  }

  obtenerHeroe(key:string) {
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.get(this.urlActualizar + '/' + key + '.json', {headers}).pipe(map(
      res => {
        return res.json();
      }))
  }

  obtenerHeroes() {
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.get(this.url, {headers}).pipe(map(
      res => {
        return res.json();
      }))
  }

  eliminarHeroe(key:string) {
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.delete(this.urlActualizar + '/' + key + '.json', {headers}).pipe(map(
      res => {
        return res.json();
      }))
  }

}
