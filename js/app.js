import { TaskManager } from "./TaskManager.js";
import { UIRender } from "./UIRender.js";

const manager = new TaskManager()
const ui = new UIRender()

function actualizarUI() {
    ui.renderizarTareas(manager.tareas)
    ui.tareasPendientes(manager)
}

actualizarUI()

ui.agregarTarea.addEventListener('click', () => {
    const texto = ui.obtenerTexto()

    const nuevaTarea = manager.agregarTarea(texto)

    if(nuevaTarea) {
        ui.limpiarTextoInput()
        actualizarUI()
    }
})

ui.inputTarea.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        ui.agregarTarea.click()
    }
})

ui.listaTareas.addEventListener('click', (event) => {
    const li = event.target.closest('li')

    if(!li || !li.dataset.id) return

    const id = Number(li.dataset.id)

    if(event.target.matches("input[type='checkbox']")) {
        manager.toggleCompletada(id)
        actualizarUI()
    }

    if(event.target.matches('btn-borrar')) {
        manager.borrarTarea(id)
        actualizarUI()
    }

    
})

document.getElementById("btn-limpiar").addEventListener("click", () => {
    manager.limpiarCompletadas()
    actualizarUI()
})