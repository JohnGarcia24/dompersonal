//Controlando etiquetas con el DOM

//1. Almacenar en  memoria, es decir: crear una variable, la etiqueta que quiero controlar

let etiquetaImagen=document.getElementById("fotografia")

//2. Controlando nuetsras etiquetas
//2.1. Controlar es cambiar la fuente (SRC) de una etiqueta

etiquetaImagen.src="./img/kimetsu3.png"

//2.2. _Controlar es cambiar el contenido de texto de una etiqueta 

let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3. Controlar es agregar estilos
etiquetaTitulo.classList.add("fuente","alineado")

//2.4. Controla es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

//2.5 Controla es DETERTAR EVENTOS

let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})

