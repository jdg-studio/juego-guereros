// son variables globales las cuales las funciones pueden llegar a ellas por que si las ponemos dentro de una funcion otras no van a poder activarlas
let sectionSeleccionarAtaque = document.getElementById("eligeTuAtaque")
let sectionReiniciar = document.getElementById("reiniciar")
let buttonGuerreroJugador = document.getElementById("selecciondeguerrero")
let buttonTierra = document.getElementById('botonTIERRA')
let buttonfuego = document.getElementById("botonFUEGO")
let buttonagua = document.getElementById("botonAGUA")
let buttonReiniciar = document.getElementById("reiniciar")

let ataqueNosotros 
let ataqueEnemigo
let resultado
let vidasNosotros = 3
let vidasEnemigo = 3
// esta funcion nos indica la accion que hace el boton seleccionar 
function cargarjuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"

    buttonGuerreroJugador.addEventListener("click", seleccionarGuerreroJugador)
    buttonTierra.addEventListener("click", ataqueTierra)
    buttonfuego.addEventListener("click", ataqueFuego)
    buttonagua.addEventListener("click", ataqueAgua)
    buttonReiniciar.addEventListener("click", reiniciarJuego)
}

// sleccionamos a nuestro guerrero
function seleccionarGuerreroJugador () {
    let sectionSeleccionarGuerrero = document.getElementById("seleccionar-guerrero")
    sectionSeleccionarGuerrero.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("eligeTuAtaque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputNifelheim = document.getElementById("Nifelheim")
    let inputMidgard = document.getElementById("Midgard")
    let inputSvartalfheim = document.getElementById("Svartalfheim")
    let inputMuspelheim = document.getElementById("Muspelheim")
    let inputVanaheim = document.getElementById("Vanaheim")
    let spannombreguerrero = document.getElementById("nombreguerrero")

        if (inputNifelheim.checked){
        
        spannombreguerrero.innerHTML = "NIFELHEIM"
       } else if (inputMidgard.checked){
        
        spannombreguerrero.innerHTML = "MIDGARD"
       } else if (inputSvartalfheim.checked){
       
        spannombreguerrero.innerHTML = "SVARTALFHEIM"
       } else if (inputMuspelheim.checked){
        
        spannombreguerrero.innerHTML = "MUSPELHEIM"
       } else if (inputVanaheim.checked){
        
        spannombreguerrero.innerHTML = "VANEHEIM"
       } else {
        alert("selecciona un guerrero")
       }

       seleccionarGuerreroEnemigo()
}

// se selleciona aleatoriamente el enmigo 
function seleccionarGuerreroEnemigo(){
    let seleccionenemigo = aleatorio(1,5)
    let spannombreEnemigo = document.getElementById("nombreEnemigo")
    
    if (seleccionenemigo == 1){
        
        spannombreEnemigo.innerHTML = "NIFELHEIM"
       } else if (seleccionenemigo == 2){
        
        spannombreEnemigo.innerHTML = "MIDGARD"
       } else if (seleccionenemigo == 3){ 
      
        spannombreEnemigo.innerHTML = "SVARTALFHEIM"
       } else if (seleccionenemigo == 4){
        
        spannombreEnemigo.innerHTML = "MUSPELHEIM"
       } else if (seleccionenemigo == 5){ 
       
        spannombreEnemigo.innerHTML = "VANEHEIM"
       } 
       
      
}

function ataqueTierra() {
    ataqueNosotros = "TIERRA" 
    ataqueAleatorioEnemigo ()
}
function ataqueFuego() {
    ataqueNosotros = "FUEGO" 
    ataqueAleatorioEnemigo ()
}
function ataqueAgua() {
    ataqueNosotros = "AGUA" 
    ataqueAleatorioEnemigo ()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    resultadoCombate()
}

function resultadoCombate() {

    let spanVidasNosotros = document.getElementById("vidasnosotros")
    let spanVidasEnemigos = document.getElementById("vidasenemigo")

    if (ataqueNosotros == ataqueEnemigo){
        resultado = "EMPATE"
    } else if (ataqueNosotros == "FUEGO" && ataqueEnemigo == "TIERRA") {
        resultado = "GANASTE"
            vidasEnemigo--
            spanVidasEnemigos.innerHTML = vidasEnemigo
    } else if (ataqueNosotros == "AGUA" && ataqueEnemigo == "FUEGO") {
        resultado = "GANASTE"
            vidasEnemigo--
            spanVidasEnemigos.innerHTML = vidasEnemigo
    }else if(ataqueNosotros == "TIERRA" && ataqueEnemigo == "AGUA") {
        resultado = "GANASTE"
            vidasEnemigo--
            spanVidasEnemigos.innerHTML = vidasEnemigo
    } else {
            resultado = "PERDISTE"
            vidasNosotros--
            spanVidasNosotros.innerHTML = vidasNosotros
    }

    crearMensaje()

    revisarVidasAtaque()


} 
function revisarVidasAtaque(){
    if (vidasNosotros == 0){
        crearMensajeFinal ("HAHAHAHA!")
    } else if(vidasEnemigo == 0){
        crearMensajeFinal ("TE HAS LLEVADO LA VICTORIA")
    }
}

function crearMensaje (){
    let sectionMensaje = document.getElementById("resultado")
    let divAtaqueJugador = document.getElementById("ataqueJugador")
    let divAtaqueEnemigo = document.getElementById("ataqueEnemigo")

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaquenemigo = document.createElement("p")
   
    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueNosotros
    nuevoAtaquenemigo.innerHTML = ataqueEnemigo

    divAtaqueJugador.appendChild(nuevoAtaqueJugador)
    divAtaqueEnemigo.appendChild(nuevoAtaquenemigo)
      
}
// esta fuccion solo se activa cuando las vidas de alguno lleguen a 0 por eso se activan estas variables y funciones 
function crearMensajeFinal (resultadofinal){
    let sectionMensaje = document.getElementById("resultado")
        sectionMensaje.innerHTML = resultadofinal

    let buttonTierra = document.getElementById('botonTIERRA')
    buttonTierra.disabled = true

    let buttonfuego = document.getElementById("botonFUEGO")
    buttonfuego.disabled = true 

    let buttonagua = document.getElementById("botonAGUA")
    buttonagua.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

}
// location es para reiniciar juego cuando se acabe 
function reiniciarJuego(){
    location.reload()
}

// funcion para que la pagina elija a el enemigo
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

// sirve para que primero cargue el html de la pagina y luego el java 
window.addEventListener ("load", cargarjuego)