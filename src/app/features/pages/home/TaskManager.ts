import { Component,NgZone } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton, IonList,
  IonLabel, IonIcon,
  IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonProgressBar, IonSegment,
  IonSegmentButton, IonTextarea, IonGrid,
  IonRow, IonCol, IonSelect, IonSelectOption,
  IonDatetime, IonButtons, IonSearchbar, IonCardSubtitle,
  IonRadio, IonToggle, IonModal
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';
import { AlertController } from '@ionic/angular';
import { Task } from "../../../core/models/task.model";
// Remote Config de Firebase
import { RemoteConfig, fetchAndActivate, getValue } from '@angular/fire/remote-config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
    IonInput, IonButton, IonList,
    IonLabel, FormsModule, CommonModule,
    IonIcon, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonProgressBar,
    IonSegment, IonSegmentButton, IonTextarea,
    IonGrid, IonRow, IonCol, IonSelect, IonSelectOption,
    IonDatetime, IonButtons, IonSearchbar, IonCardSubtitle,
    IonRadio, IonToggle, IonModal
  ],
})

export class HomePage {
  newtask: string = "";
  descripcion: string = "";
  priority: string = "";
  category: string = "";
  fechaVencimiento: string = "";
  segmentValue: string = 'all';
  selectedCategory: string = 'Todas';
  categoryselected: string | null = null;
  newcategory: string = '';
  tasks: any[] = [];
  categories: string[] = ['Trabajo', 'personal', 'Estudios', 'Hogar'];
  // control visibility del formulario
  showForm: boolean = false;
  showDatetimePicker: boolean = false;
  showAdminCategories: boolean = false;
  searchText: string = '';
  // Remote Config - control de visibilidad del botón "Nueva Tarea"
  showNewTaskButton: boolean = false; // Valor por defecto: oculto (false)

  // inyectar el servicio de tareas en el constructor y el servicio de alertas AlertController
  constructor(
    private taskservices: TaskService,
    private alertCtrl: AlertController,
    private remoteConfig: RemoteConfig,
    private ngZone: NgZone
  ) { }

  // se ejecuta cada vez que la vista esta por mostrarse y actualiza los datos antes de renderizar igual que En React → (useEffect)
  ionViewWillEnter() {
    this.tasks = this.taskservices.getasks();
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      this.categories = JSON.parse(storedCategories);
    }
    // llamar a Remote Config para verificar el feature flag
    this.checkNewTaskFeatureFlag();
  }

  // FUNCIÓN PARA OBTENER EL VALOR DE REMOTE CONFIG
  async checkNewTaskFeatureFlag() {
    try {
      // Esto es asíncrono y puede tardar un momento.
      await fetchAndActivate(this.remoteConfig);
      // 2. Lee el valor usando la clave que defini en fire
      const flagValue = getValue(this.remoteConfig, 'enable_new_task_button');
      // 3. Asigna el valor booleano a la variable
      this.showNewTaskButton = flagValue.asBoolean();
    } catch (error) {
      console.error('Error al obtener Remote Config.', error);
    }
  }
  addTask(task: Task) {
    this.taskservices.addTask(task);
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
  openAdminCategories() {
    this.showAdminCategories = true;
  }
  closeAdminCategories() {
    this.showAdminCategories = false;
  }

  // Manejar submit del formulario cierrandolo y agregando la tarea
  submitForm() {
    const task: Task = {
      id: Date.now(),
      title: this.newtask,
      description: this.descripcion,
      priority: this.priority,
      category: this.category,
      dueDate: this.fechaVencimiento,
      completed: false
    };
    this.addTask(task);
    this.closeForm();

    // Limpiar campos
    this.newtask = '';
    this.descripcion = '';
    this.priority = '';
    this.category = '';
    this.fechaVencimiento = '';
  }
  // Filtrar tareas según el segmento seleccionado y  el texto de búsqueda
  filteredTasks() {
    return this.tasks
      // filtrar por segmento (todas, pendientes, completadas)
      .filter(task => {
        if (this.segmentValue === 'completed') {
          return task.completed;
        } else if (this.segmentValue === 'pending') {
          return !task.completed;
        }
        return true; // all
      })
      // filtrar por categoría seleccionada
      .filter(task => {
        if (this.selectedCategory === 'Todas') {
          return true; // muestra todas las categorías
        }
        return task.category === this.selectedCategory;
      })
      // filtrar por búsqueda
      .filter(task =>
        task.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
  }

  // recibe la categoría seleccionada y la asigna a la variable selectedCategory
  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
  // Filtrar tareas por categoría y texto de búsqueda recibe el evento de búsqueda
  searchTasks(event: any) {
    this.searchText = event.target.value.toLowerCase();
  }

  filteredTasksBySearch() {
    return this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText)
    );
  }

  CreateNewCategory() {
    if (this.newcategory.trim() !== "") {
      this.category = this.newcategory;
      this.newcategory = '';
    }
  }

  private saveCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }


  async onCategoryChange(event: any) {
    const selectedValue = event.detail.value;
    if (selectedValue === 'new') {
      this.categoryselected = null; // Para que la opción 'new' no quede marcada
      this.addNewCategory();

    } else if (selectedValue === 'manage_categories') {
      this.categoryselected = null; // Para que la opción 'Administrar' no quede marcada
      this.openAdminCategories(); // Llama a la función que abre el modal

    } else {
      this.categoryselected = selectedValue;
    }
  }

  async addNewCategory() {
    // crear alerta
    const alert = await this.alertCtrl.create({
      header: 'Nueva Categoría',
      // campos de entrada
      inputs: [{ name: 'name', type: 'text', placeholder: 'Escribe categoría' }],
      // botones de acción de la alerta
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data && data.name && data.name.trim()) {
              this.categories.push(data.name);
              this.selectedCategory = data.name;
              this.category = data.name;
              localStorage.setItem('categories', JSON.stringify(this.categories));
            }
          }
        }
      ]
    });
    // mostrar alerta
    await alert.present();
  }

  deleteCategory(cat: string) {
    // 1. Encontrar la posición (índice) de la categoría en el arreglo.
    const index = this.categories.indexOf(cat);

    if (index > -1) {
      // Eliminar la categoría: 'splice' elimina 1 elemento a partir de 'index'.
      this.categories.splice(index, 1);

      // 4. Opcional: Desseleccionar si la categoría eliminada era la seleccionada.
      if (this.category === cat) {
        this.category = "";
      }
    }
    this.saveCategories();
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


