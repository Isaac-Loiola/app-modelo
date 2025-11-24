import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonDatetime, IonButton, IonText, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [IonButtons, IonText, IonButton, IonDatetime, IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ReservasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
