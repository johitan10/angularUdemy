import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private authService: AuthService) {
    this.authService.handleAuthentication();
  }

  login() {
    this.authService.login();
  }

  salir() {
    this.authService.logout();
  }

}
