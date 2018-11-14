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
peliculas:any[] = [];
  constructor(private jsonP: Jsonp, private http: Http) { }


  obtenerPopulares() {
    let url = this.movieDbUrl + "/discover/movie?sort_by=popularity.desc&api_key=" +
      this.apiKey + "&language=es&callback=JSONP_CALLBACK";
    /*return this.http.get(url).pipe(map(resp => resp.json()));*/
    return this.jsonP.get(url).pipe(map(resp => resp.json().results));
  }

  obtenerCartelera() {
    let fechaDesde = new Date();
    let fechaHasta = new Date();
    fechaHasta.setDate(fechaDesde.getDate() + 7);

    let desde = fechaDesde.getFullYear() + "-" + (fechaDesde.getMonth() + 1) + "-" + fechaDesde.getDay();
    let hasta = fechaHasta.getFullYear() + "-" + (fechaHasta.getMonth() + 1) + "-" + fechaHasta.getDay();
    let url = this.movieDbUrl + "/discover/movie?primary_release_date.gte=" + desde + "&primary_release_date.lte=" + hasta + "&api_key=" +
      this.apiKey + "&language=es&callback=JSONP_CALLBACK";
    return this.jsonP.get(url).pipe(map(resp => resp.json().results));
  }

  obtenerParaNinos() {
    let url = this.movieDbUrl + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=" +
      this.apiKey + "&language=es&callback=JSONP_CALLBACK";
    return this.jsonP.get(url).pipe(map(resp => resp.json().results));
  }

  buscarPelicula(texto: string) {

    let url = `${this.movieDbUrl}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonP.get(url).pipe(
      map(res => {
        this.peliculas = res.json().results;
        return res.json().results;      
      }));
  }

  buscarPeliculaPorId(id:string) {
    let url = this.movieDbUrl + '/movie/' + id + '?api_key=' + this.apiKey + "&language=es&callback=JSONP_CALLBACK";
    return this.jsonP.get(url).pipe(map(resp => resp.json()));
  }

}
