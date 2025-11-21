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
  IonLabel
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
    CommonModule 
  ],
})
export class HomePage {
  newtask: string = "";
  tasks: any[] = [];
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

}
