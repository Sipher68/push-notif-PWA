import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NavbarComponent,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
})
export class AppComponent {
  constructor() {
    // this.initializeFirebase();
  }

  // public async initializeFirebase(): Promise<void> {
  //   if (Capacitor.isNativePlatform()) {
  //     return;
  //   }
  //   AngularFireModule.initializeApp(environment.firebase);
  // }
}
