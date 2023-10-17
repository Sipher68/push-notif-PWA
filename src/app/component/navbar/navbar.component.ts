import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonicModule, NgFor],
})
export class NavbarComponent {
  constructor() {}

  ngOnInit() {}
  items = [{ title: 'Home' }, { title: 'About' }, { title: 'Contact' }];
}
