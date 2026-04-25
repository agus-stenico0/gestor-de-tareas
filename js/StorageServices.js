import { Task } from "./Task.js"

export class StorageService {
    static CLAVE = "gestor_de_tareas_v1"

    static guardar(tareas) {
        localStorage.setItem(StorageService.CLAVE, JSON.stringify(tareas))
    }

    static cargar() {
        const datos = localStorage.getItem(StorageService.CLAVE)

        if(!datos) return []

        const objects = JSON.parse(datos)

        return objects.map((obj) => Task.desdeObjeto(obj))
    }

    static limpiar() {
        localStorage.removeItem(StorageService.CLAVE)
    }
}