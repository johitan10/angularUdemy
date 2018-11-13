import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  urlYoutube = "https://www.googleapis.com/youtube/v3/";
  apiKey = "AIzaSyAFQCYMgN_C2iKavGaEYr_n5HC0csuivQk";
  private playList = "UULXRGxAzeaLDGaOphqapzmg";
  private nextPageToken = "";

  constructor(private http: Http) { }

  getVideos() {
    let url = this.urlYoutube + 'playlistItems';
    let params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playList);
    params.set('key', this.apiKey);
    if (this.nextPageToken !== '') {
      params.set('pageToken', this.nextPageToken);
    }


    return this.http.get(url, { search: params }).pipe(map(resp => {
      this.nextPageToken = resp.json().nextPageToken;
      let videos: any[] = [];
      for (let video of resp.json().items) {
        videos.push(video.snippet);
      }
      return videos;
    }));
  }
}
