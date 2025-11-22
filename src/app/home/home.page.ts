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
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonApp,
  IonSearchbar,
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
    IonDatetime,
    IonButtons,
    IonMenu,
    IonMenuButton,
    IonApp,
    IonSearchbar
  ],
})
export class HomePage {
  newtask: string = "";
  descripcion: string = "";
  priority: string = "";
  category: string = "";
  fechaVencimiento: string = "";
  segmentValue: string = 'all';
  selectedCategory: string = 'all';
  tasks: any[] = [];
  // control visibility del formulario
  showForm: boolean = false;
  showDatetimePicker: boolean = false;
  constructor(private taskservices: TaskService) { }

  // se ejecuta cada vez que la vista esta por mostrarse y actualiza los datos antes de renderizar igual que En React → (useEffect)
  ionViewWillEnter() {
    this.tasks = this.taskservices.getasks();
  }
  addTask() {
    if (this.newtask.trim() !== "") {
      this.taskservices.addTask({
        title: this.newtask,
        completed: false,
        dueDate: this.fechaVencimiento,
        description: this.descripcion,
        priority: this.priority,
        category: this.category
      });
      // reset campos del formulario
      this.newtask = "";
      this.descripcion = "";
      this.priority = "Medium";
      this.category = "trabajo";
      this.fechaVencimiento = "";
    }
    this.tasks = this.taskservices.getasks();
  }
  // Cambia el estado de completada o no completada
  toggleTask(index: number) {
    this.taskservices.toggleTaskStatus(index);
    // refrescar la lista local para que los getters vean el cambio
    this.tasks = this.taskservices.getasks();
  }
  //Elimina la tarea en esa posicion
  deleteTask(index: number) {
    this.taskservices.deleteTask(index);
    // refrescar la lista local para que los getters vean el cambio
    this.tasks = this.taskservices.getasks();
  }

  // Mostrar el formulario
  openForm() {
    this.showForm = true;
  }

  // Cerrar/ocultar el formulario
  closeForm() {
    this.showForm = false;
  }

  // Mostrar u ocultar el selector de fecha
  openDatetimePicker() {
    this.showDatetimePicker = true;
  }
  // Cerrar el selector de fecha
  closeDatetimePicker() {
    this.showDatetimePicker = false;
  }

  // Manejar submit del formulario cierrandolo y agregando la tarea
  submitForm() {
    this.addTask();
    this.closeForm();
  }
  // Filtrar tareas según el segmento seleccionado
  filteredTasks() {
    if (this.segmentValue === 'all') {
      return this.tasks;
    } else if (this.segmentValue === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    // retorna las tareas y un array vacío si no hay coincidencias
    return [];
  }
  // recibe la categoría seleccionada y la asigna a la variable selectedCategory
  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  //obtener el total de tareas
  get totalTasks(): number {
    return this.tasks.length;
  }

  //obtener el total de tareas completadas , obtiene un array con las tareas cuyo boolean completed es true y devuelve su longitud
  get completedTasks(): number {
    return this.tasks.filter(t => t.completed).length;
  }
  // calcular el progreso como un valor decimal ejemplo: 0.5 = 50% devuelve 0 para evitar errores 
  get progressValue(): number {
    return this.totalTasks === 0 ? 0 : this.completedTasks / this.totalTasks;
  }
  // mostrar el progreso en formato porcentaje redondeado con Math.round()
  get progressText(): string {
    return `${Math.round(this.progressValue * 100)}%`;
  }
  // mostrar el total de tareas sobre tareas completadas
  get progressCount(): string {
    return `${this.completedTasks}/${this.totalTasks}`;
  }



}


