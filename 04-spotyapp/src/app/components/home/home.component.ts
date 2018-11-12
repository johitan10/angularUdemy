import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[]=[];
  loading:boolean;
  error : boolean = false;
  mensajeError : string;

  constructor(private spotify:SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.nuevasCanciones = data;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = err.error.error.message;

    });
   }

  ngOnInit() {
    
  }

  consultarNewRelease() {
   
  }

}
