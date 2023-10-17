import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/shared/authentication-service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class SignUpPage {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}
  ngOnInit() {}
  signUp(email: any, password: any) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        // Do something here
        console.log('User Created Succesfully', res);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
