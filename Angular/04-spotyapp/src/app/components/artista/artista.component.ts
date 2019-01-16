import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any;
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotify.getArtistaPorId(id).subscribe(data => {
      this.artista = data;
      this.loading=false;
    })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      this.loading=false;
    })
  }
}
