import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = new HttpHeaders({
      "Authorization": '[{"key":"Authorization","value":"Bearer BQDCMFSoAbqVUNMgsRHQiYuZTgEvSjZW3Tp9F9YKTS0ZkVIw8ExqwPkjC1g1TXOCyno7B6kpvNkf4_oVX1w","description":""}]'
    });
    return this.http.get(URL, { headers: HEADERS });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data => data['artists'].items));   
  }

  getArtistaPorId(id: string) {
    return this.getQuery('artists/' + id);   
  }

}
