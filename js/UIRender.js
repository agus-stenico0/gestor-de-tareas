import { StorageService } from "./StorageServices.js"


export class UIRender {
    constructor() {
        this.listaTareas = document.querySelector('.lista-tareas')
        this.inputTarea = document.querySelector('.nueva-tarea input')
        this.agregarTarea = document.getElementById('btn-agregarTarea')
        this.pendientes = document.getElementById('tareas-pendientes')
    }

    renderizarTareas(tareas) {
        this.listaTareas.innerHTML = ''

        if(tareas.length === 0) {
            this.listaTareas.innerHTML = ` 
                <li class='sin-tareas'>Sin tareas pendientes.</li>
            `
        }

        tareas.forEach(tarea => {
            const elementLi = this.crearElementoTarea(tarea)
            this.listaTareas.appendChild(elementLi)
        });
    }
    crearElementoTarea(tarea) {
        const li = document.createElement('li')

        if(tarea.completada) {
            li.classList.add('completada')
        }

        li.dataset.id = tarea.id

        const mostrarTexto = tarea.completada ? `<del>${tarea.texto}</del>` : tarea.texto

        li.innerHTML = `
            <label>
                <input type="checkbox" ${tarea.completada ? 'checked' : ''}
                    <span>${mostrarTexto}</span>
                
            </label>
            <button class="btn-borrar">❌</button>
        `

        return li
    }

    limpiarTextoInput() {
        this.inputTarea.value = ''
    }
    obtenerTexto() {
        return this.inputTarea.value
    }

    tareasPendientes(manager) {
        const cantidad = manager.pendientes
        

        if(cantidad === 0) {
            this.pendientes.textContent = `No hay tareas pendientes`
        } else {
            this.pendientes.textContent = `Tienes ${cantidad} tareas pendientes`
        }

    }
}