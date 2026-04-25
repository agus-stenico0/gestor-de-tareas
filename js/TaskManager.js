import { StorageService } from "./StorageServices.js"
import { Task } from "./Task.js"


export class TaskManager {
    constructor(){
        this.tareas = StorageService.cargar()
    }

    get pendientes() {
        return this.tareas.filter((tarea) => !tarea.completada).length
    }

    agregarTarea(texto) {
        if(!texto || !texto.trim()) {
            alert('El texto de la tarea no puede estar vacio')
            return false
        }

        const nuevaTarea = new Task(texto.trim(), false, Date.now())
        this.tareas.push(nuevaTarea)

        StorageService.guardar(this.tareas)

        return nuevaTarea
    }

    borrarTarea(id) {
        this.tareas = this.tareas.filter((tarea) => tarea.id !== id)

        StorageService.guardar(this.tareas)
    }

    toggleCompletada(id) {
        const tarea = this.tareas.find((tarea) => tarea.id === id)

        if(tarea) {
            tarea.completada = !tarea.completada
            StorageService.guardar(this.tareas)
        }
    }

    limpiarCompletadas() {
        this.tareas = this.tareas.filter(tarea => !tarea.completada)
        StorageService.guardar(this.tareas)
    }
} 