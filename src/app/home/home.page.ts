import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonCheckbox,
  IonLabel,
  IonIcon,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonProgressBar,
  IonSegment,
  IonSegmentButton,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonCheckbox,
    IonLabel,
    FormsModule,
    CommonModule,
    IonIcon,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonProgressBar,
    IonSegment,
    IonSegmentButton,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonDatetimeButton,
    IonModal,
    IonDatetime
  ],
})
export class HomePage {
  newtask: string = "";
  tasks: any[] = [];
  // control visibility del formulario
  showForm: boolean = false;
  constructor(private taskservices: TaskService) { }

  // se ejecuta cada vez que la vista esta por mostrarse y actualiza los datos antes de renderizar igual que En React → (useEffect)
  ionViewWillEnter() {
    this.tasks = this.taskservices.getasks();
  }
  addTask() {
    if (this.newtask.trim() !== "") {
      this.taskservices.addTask({
        title: this.newtask,
        completed: false
      });
      this.newtask = "";
    }
  }
  toggleTask(index: number) {
    this.taskservices.toggleTaskStatus(index);
  }
  deleteTask(index: number) {
    this.taskservices.deleteTask(index);
  }

  // Mostrar el formulario
  openForm() {
    this.showForm = true;
  }

  // Cerrar/ocultar el formulario
  closeForm() {
    this.showForm = false;
  }

  // Manejar submit del formulario (por ahora cierra el form y puede añadirse lógica extra)
  submitForm() {
    // Aquí podrías llamar a addTask() si los campos estuvieran ligados a propiedades
    // this.addTask();
    this.closeForm();
  }



}

