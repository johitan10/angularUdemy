import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSeleccionado: any;

  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe(data => {
      this.videos = data;
    });

  }

  ngOnInit() {
  }

  verVideo(video) {
    this.videoSeleccionado = video;
    $("#modalVideo").modal();
  }

  cerrar() {
    this.videoSeleccionado = null;
    $("#modalVideo").modal('hide');
  }

  cargarMas() {
    this.youtubeService.getVideos().subscribe(data => {
      console.log(data);
      this.videos.push.apply(this.videos, data);
    });
  }

}
