import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';

// importação dos componentes ion que serão usados na tela
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, 
  IonButton, IonButtons, IonList, IonMenuButton

} from '@ionic/angular/standalone';

// definição do componente Standalone (sem NgMogule)

@Component({
  // criando uma seletor ( tag ) 
  selector: 'app-cadastro-cliente',
  standalone: true,
  templateUrl: './cadastro-cliente.page.html', // template de interface
  styleUrl: './cadastro-cliente.page.scss', // estilos opicionais
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, 
    IonButton, IonButtons, IonList, IonMenuButton, ReactiveFormsModule
  ]
})

export class CadastroClientePage{

  // FormBuilder injetado para criação de formulários
  constructor(private fb: FormBuilder){}

  // criação do formulário reativo com validações
  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(8)]]

  })

  // Array para armazenar clientes cadastrados temporariamente
  clientes: any[] = [];

  // Método chamado ao clicar em "salvar cliente"; 
  salvar(){
    // somente adicionado se o formulário estivar válido
    if(this.form.valid){
      this.clientes.push(this.form.value); // adiciona o cliente na lista
      this.form.reset(); // limpa os campos do formulãrio  após salvar
    }
  }

  // rermove cliente da lista
  remover(i: number){
    this.clientes.splice(i, 1);
  }
}