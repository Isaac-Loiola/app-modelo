import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonDatetime, IonList, IonLabel, IonListHeader, IonItem } from '@ionic/angular/standalone';
// import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonDatetime, IonList, IonLabel, IonListHeader, IonItem]
})
export class CalendarioPage implements OnInit {

  constructor() { }

  dataSelectionada: string = '';
  listaDatas: Date[] = [];

  adicionarData(){
    if(this.dataSelectionada){
      const nova = new Date(this.dataSelectionada);
      const existe = this.listaDatas.some(
        d => d.toDateString() === nova.toDateString()
      );
      if(!existe)
        this.listaDatas.push(nova);
    }
  }
  removerData(i: number){
    this.listaDatas.slice(i, 1);
  }

  ngOnInit() {
  }

}
