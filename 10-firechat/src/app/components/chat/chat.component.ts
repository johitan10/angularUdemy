import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{
  ngOnInit(): void {
    this.elemento = document.getElementById("app-mensajes");
  }

  mensaje: string = "";
  elemento:any;

  constructor(public chatService: ChatService) {

    this.chatService.cargarMensajes().subscribe(() => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    });

  }


  enviarMensaje() {
    if (this.mensaje.length !== 0) {
      this.chatService.agregarMensaje(this.mensaje)
        .then(() => this.mensaje = "")
        .catch((err) => console.error("Error al guardar", err));
    }    
  }

}
