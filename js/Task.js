export class Task {
    constructor(texto, completada = false, id = null) {
        this.id = id
        this.texto = texto
        this.completada = completada
    }

    static desdeObjeto(obj) {
        return new Task(obj.texto, obj.completada, obj.id)
    }
}