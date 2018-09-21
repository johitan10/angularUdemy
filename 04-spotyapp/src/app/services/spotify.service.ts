import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const HEADERS = new HttpHeaders ({
      "Authorization":'[{"key":"Authorization","value":"Bearer BQBGQLv6lAm-g6WEnMDa1RsnY_f1HEhx3h52TItYKT1OOEWp9mTAaTwcNL06cXJLsplH7f93kwEX5-4_bG4","description":""}]'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: HEADERS})
      .subscribe(data => {
        console.log(data);
      })
  }

}
