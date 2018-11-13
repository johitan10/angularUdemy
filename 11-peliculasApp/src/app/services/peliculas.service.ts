import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  apiKey: string = "c1485e2059adf3523ba56e05a9b80b40";
  apiKey4: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTQ4NWUyMDU5YWRmMzUyM2JhNTZlMDVhOWI4MGI0MCIsInN1YiI6IjViY2ZhZjhlOTI1MTQxNzJkYzAxZjRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7RI0bY3s-5YPNnfGUH-wuAbTY0z5pojjZlZMeMaRmE";
  movieDbUrl: string = "https://api.themoviedb.org/3";

  constructor(private jsonP: Jsonp, private http: Http) { }


  obtenerPopulares() {
    let url = this.movieDbUrl + "/discover/movie?sort_by=popularity.desc&api_key=" +
      this.apiKey + "&language=es&callback=JSONP_CALLBACK";
    /*return this.http.get(url).pipe(map(resp => resp.json()));*/
    return this.jsonP.get(url).pipe(map(resp => resp.json()));  
  }

  buscarPelicula( texto:string ){

    let url = `${ this.movieDbUrl }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonP.get( url ).pipe(
                map( res=> res.json()));
  }

}
