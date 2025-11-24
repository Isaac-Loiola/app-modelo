import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastroClientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
