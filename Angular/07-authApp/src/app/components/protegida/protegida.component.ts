import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  userProfile: any;

  constructor(private auth: AuthService) {

    if (this.auth.userProfile) {
      this.userProfile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err,data) => {
        this.userProfile = data;
      });
    }
  }

  ngOnInit() {
  }

}
