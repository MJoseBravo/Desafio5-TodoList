const inputTarea = document.querySelector("#tarea")
const identificador = document.querySelector("#identificador")
const listadetareas = document.querySelector("#listadetareas")
const contadorTareas = document.querySelector("#totaltareas")
const realizadas = document.querySelector("#realizadas")
const tableTareas = document.querySelector("#ttareas")

let tareas = [
    { id: 1, texto: "Comprar fruta", completa: false },
    { id: 2, texto: "Ir al Gimnasio", completa: false },
    { id: 3, texto: "Estudiar", completa: false },
    { id: 4, texto: "Leer", completa: false}
]



const renderTareas = ()=> {
   
    let tablaData = ""
    tareas.forEach((tarea, index)=> {
        let checkTarea = ""
        if (tarea.completa) {
            checkTarea = "checked"
        }
        
    
        let idtarea = `<td>${index + 1}</td>`
        let nombretarea = `<td> <span>${tarea.texto}</span></td>`
        let checkbox = `<td> <input type="checkbox" ${checkTarea} onclick="marcarRealizada(${tarea.id}, this.checked)"></td>`
        let botoneliminar = `<td> <button class="eliminar" id=${tarea.id}>Eliminar</button></td>`
        
        tablaData += `<tr>${idtarea + nombretarea + checkbox + botoneliminar}</tr>`

    })
    tableTareas.innerHTML = `${tablaData}`
    
    eliminarTareas()
    actualizarContador()
}


const eliminarTareas = ()=> {
    const botones = document.querySelectorAll(".eliminar")
    botones.forEach((btn)=> {
        btn.addEventListener("click", ()=> {
            tareas = tareas.filter((elemento)=> elemento.id != btn.id )
            renderTareas()
        })
    })
}


const actualizarContador = ()=> {
    contadorTareas.textContent = tareas.length
    const totalTareasRealizadas = tareas.filter(tarea => tarea.completa).length
    realizadas.textContent = totalTareasRealizadas
}



function marcarRealizada(id, estado) {
    const tarea = tareas.find(tarea => tarea.id === id)
    if(tarea) {
        tarea.completa = estado
        actualizarContador()
    }
}


formulario.addEventListener('submit', (e)=> {
    e.preventDefault()

    const nuevaTarea = {
        id: Date.now(),
        texto: inputTarea.value,
        completa: false 
    }
    tareas.push(nuevaTarea)

    inputTarea.value = ""

    renderTareas()
})

renderTareas()