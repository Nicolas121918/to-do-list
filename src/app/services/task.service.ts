// este archivo podra ser usado desde cualquier parte de la app
import { Injectable } from "@angular/core";


// creamos una instancia de Injectable en el root para poder manejar una sola lista de tareas para toda la app
@Injectable({
    providedIn: 'root'
})

export class TaskService {
    // inicializamos una este arreglo que acepta cualquier tipo de dato Por ahora 
    private tasks: any[] = [];

    constructor() { }

    // Get para obtener todas las tareas y depues visualizarlas 
    getasks() {
        return this.tasks;
    }
    // recibe una tarea como parametro de cualquier tipo y la inserta en el array (tasks)
    addTask(task: any) {
        this.tasks.push(task)
    }
    //Elimina una tarea con esa posicion    
    deleteTask(index: number) {
        this.tasks.splice(index, 1)
    }

    // recibe un indice para marcarla como completada o no completada 
    toggleTaskStatus(index: number) {
        /* this.tasks[index].completed =
            this.tasks[index].completed ? false : true; */
        this.tasks[index].completed = !this.tasks[index].completed;
    }

}