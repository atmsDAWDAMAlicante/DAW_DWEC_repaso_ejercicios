import * as miModulo from './funciones.js';
let salto = "<br>";

// Funciones de Prueba
function saludar1(){alert("Hola, Don Pepito")}
function saludar2(){alert("Hola, Don José")}
const btnNUMERO0 = document.querySelector("#btnNUMERO0");
btnNUMERO0.onclick = saludar1; // se ignora esta línea ya que en la siguiente se reescribe
document.querySelector("#btnNUMERO0").onclick = saludar2;

// CÓDIGO de los Controles DIV NUMERO1


const txtNUMERO1 = document.querySelector("#txtNUMERO1");
const btnNUMERO1 = document.querySelector("#btnNUMERO1");
const parrafoNUMERO1 = document.querySelector("#parrafoNUMERO1");



btnNUMERO1.addEventListener("click",function(event){
  parrafoNUMERO1.textContent = "";
  let mensaje = "Información de las funciones manejadoras de eventos:<br>";
  mensaje += `El this: <span class="marcadorojo">${this}</span> elemento sobre el que se produce el evento${salto}`;
  mensaje += `type es el tipo de evento producido <span class="marcadorojo">${event.type}</span>${salto}`;
  mensaje += `currentTarget <span class="marcadorojo">${event.currentTarget}</span> elemento asociado al manejador${salto}`;
  mensaje += `target <span class="marcadorojo">${event.target}</span> elemento sobre el que se produce el evento${salto}`;
  parrafoNUMERO1.innerHTML = mensaje;

});// Fin del AddEventListener 

// FIN CÓDIGO de los Controles DIV NUMERO1



// CÓDIGO de los Controles DIV NUMERO2
const txtNUMERO2 = document.querySelector("#txtNUMERO2");
const btnNUMERO2 = document.querySelector("#btnNUMERO2");
const parrafoNUMERO2 = document.querySelector("#parrafoNUMERO2");

// 1º Un array de jedis
let jedis2 = [{"nombre": "Yoda","luz": true},
  {"nombre": "Darth Sidious","luz": false},
  {"nombre": "Obi Wan Kenobi","luz": true},
  {"nombre": "Qi Gon Jin","luz": true},
  {"nombre": "Darth Maul","luz": false},
  {"nombre": "Darth Vader","luz": false}]

// 2º se crea un objeto gestionLuzJedis que implementa la función handleEvent
let gestionLuzJedis = {
  // dentro de la función handle va un this.---lo que se le pasa---.la propiedad de cada objeto del array
  handleEvent: function(evento){
    alert(`${this.datosJedi.nombre}${this.datosJedi.luz}`);
  }
};

// 3º EL RESULTADO SE MOSTRARÁ EN EL <P> PARRAFO2
// La lista de HTML
let listaMostrar = "<ul>";

// BUCLE DONDE SE FORMA LA LISTA
for (let jedi of jedis2)
{
  // 3.1 - Crear el <li> de la lista --- ESTAMOS EN EL BUCLE
  let elementoLista = document.createElement("li");
  elementoLista.textContent = `${jedi.nombre} ${jedi.luz}`

  // 3.2 - Crear el botón
  let crearBoton = document.createElement("button")
  crearBoton.textContent = "Editar Luz"


  // 3.3 - Crear un manejador de eventos para cada Jedi
  // CADA MANEJADOR NO ES LO DE ARRIBA QUE CONTIENE EL handle
  let gestionLuzManejador = Object.create(gestionLuzJedis);
  // Asignar el jedi actual al manejador ATENCIÓN QUE AQUÍ APARECE EL DATOS JEDI
  gestionLuzManejador.datosJedi = jedi; // Asignar el jedi actual


  // 3.4 - Añadir el manejador de eventos al botón
  crearBoton.addEventListener("click", gestionLuzManejador);

  // Añadir el botón y el texto al contenedor
  elementoLista.appendChild(crearBoton);
  parrafoNUMERO2.appendChild(elementoLista);
}



btnNUMERO2.addEventListener("click",function(){
  alert("NUMERO2 funciona");
  print(txtNUMERO2.value,2)
}); 

// FIN CÓDIGO de los Controles DIV NUMERO2


// CÓDIGO de los Controles DIV NUMERO3
const txtNUMERO3 = document.querySelector("#txtNUMERO3");
const btnNUMERO3 = document.querySelector("#btnNUMERO3");
const parrafoNUMERO3 = document.querySelector("#parrafoNUMERO3");

btnNUMERO3.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("NUMERO3 funciona");
  print(txtNUMERO3.value,3)

}); 
// FIN CÓDIGO de los Controles DIV NUMERO3


// CÓDIGO de los Controles DIV NUMERO4
const txtNUMERO4 = document.querySelector("#txtNUMERO4");
const btnNUMERO4 = document.querySelector("#btnNUMERO4");
const parrafoNUMERO4 = document.querySelector("#parrafoNUMERO4");

btnNUMERO4.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("NUMERO4 funciona");
  print(txtNUMERO4.value,4)
  
}); 

// FIN CÓDIGO de los Controles DIV NUMERO4



// CÓDIGO de los Controles DIV NUMERO5
const txtNUMERO5 = document.querySelector("#txtNUMERO5");
const btnNUMERO5 = document.querySelector("#btnNUMERO5");
const parrafoNUMERO5 = document.querySelector("#parrafoNUMERO5");

btnNUMERO5.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("NUMERO5 funciona");
  print(txtNUMERO5.value,5)
  
}); 

// FIN CÓDIGO de los Controles DIV NUMERO5



// CÓDIGO de los Controles DIV NUMERO6
const txtNUMERO6 = document.querySelector("#txtNUMERO6");
const btnNUMERO6 = document.querySelector("#btnNUMERO6");
const parrafoNUMERO6 = document.querySelector("#parrafoNUMERO6");

btnNUMERO6.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("NUMERO6 funciona");
  print(txtNUMERO6.value,6)
}); 

// FIN CÓDIGO de los Controles DIV NUMERO6






// CÓDIGO de los Controles DIV PLANTILLA DOS BOTONES
const txtPLANTILLADOSBOTONES = document.querySelector("#txtPLANTILLADOSBOTONES");
const btnPLANTILLADOSBOTONES1 = document.querySelector("#btnPLANTILLADOSBOTONES1");
const btnPLANTILLADOSBOTONES2 = document.querySelector("#btnPLANTILLADOSBOTONES2");
const parrafoPLANTILLADOSBOTONES = document.querySelector("#parrafoPLANTILLADOSBOTONES");

btnPLANTILLADOSBOTONES1.addEventListener("click",function(){
  
  alert("PLANTILLADOSBOTONES 1 funciona");
  parrafoPLANTILLADOSBOTONES.innerHTML = "PLANTILLADOSBOTONES 1 funciona " + txtPLANTILLADOSBOTONES.value;
  
}); 

btnPLANTILLADOSBOTONES2.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("PLANTILLADOSBOTONES 2 funciona");
  parrafoPLANTILLADOSBOTONES.innerHTML = `PLANTILLADOSBOTONES 2 funciona ${txtPLANTILLADOSBOTONES.value}`;
  
}); 

// FIN CÓDIGO de los Controles DIV PLANTILLA DOS BOTONES

// CÓDIGO de los Controles DIV PLANTILLA UN BOTON
const txtPLANTILLAUNBOTON = document.querySelector("#txtPLANTILLAUNBOTON");
const btnPLANTILLAUNBOTON = document.querySelector("#btnPLANTILLAUNBOTON");
const parrafoPLANTILLAUNBOTON = document.querySelector("#parrafoPLANTILLAUNBOTON");

btnPLANTILLAUNBOTON.addEventListener("click",function(){
  alert("PLANTILLA UN BOTON funciona");
  parrafoPLANTILLAUNBOTON.innerHTML = `PLANTILLA UN BOTON funciona ${txtPLANTILLAUNBOTON.value}` ;
  
}); 

// ------------------------------------------------------

// FIN CÓDIGO de los Controles DIV PLANTILLA UN BOTON

// FUNCIONES DE SALIDA

function print(mensaje, numero){
  let cadenaParrafo = `parrafoNUMERO${numero}`
  let elementoEnConcreto = document.querySelector("#"+cadenaParrafo)
  elementoEnConcreto.innerHTML += `<br>`;
  /*
  let elementoConGetElementById = document.getElementById(cadenaParrafo);
  elementoConGetElementById.innerHTML = `NUMERO6 funciona ${mensaje}`;
  */
}

// FIN FUNCIONES DE SALIDA

// ------------------------------------------------------

// PARA RESTAURAR SI SE ESTROPEA TODO
/*
// DOS BOTONES

// CÓDIGO de los Controles DIV PLANTILLA DOS BOTONES
const txtPLANTILLADOSBOTONES = document.querySelector("#txtPLANTILLADOSBOTONES");
const btnPLANTILLADOSBOTONES1 = document.querySelector("#btnPLANTILLADOSBOTONES1");
const btnPLANTILLADOSBOTONES2 = document.querySelector("#btnPLANTILLADOSBOTONES2");
const parrafoPLANTILLADOSBOTONES = document.querySelector("#parrafoPLANTILLADOSBOTONES");

btnPLANTILLADOSBOTONES1.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("PLANTILLADOSBOTONES 1 funciona");
  parrafoPLANTILLADOSBOTONES.innerHTML = "PLANTILLADOSBOTONES 1 funciona " + txtPLANTILLADOSBOTONES.value;
  
}); 

btnPLANTILLADOSBOTONES2.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("PLANTILLADOSBOTONES 2 funciona");
  parrafoPLANTILLADOSBOTONES.innerHTML = `PLANTILLADOSBOTONES 2 funciona ${txtPLANTILLADOSBOTONES.value}`;
  
}); 

// FIN CÓDIGO de los Controles DIV PLANTILLA DOS BOTONES


// CÓDIGO de los Controles DIV PLANTILLA UN BOTON
const txtPLANTILLAUNBOTON = document.querySelector("#txtPLANTILLAUNBOTON");
const btnPLANTILLAUNBOTON = document.querySelector("#btnPLANTILLAUNBOTON");
const parrafoPLANTILLAUNBOTON = document.querySelector("#parrafoPLANTILLAUNBOTON");

btnPLANTILLAUNBOTON.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("PLANTILLA UN BOTON funciona");
  parrafoPLANTILLAUNBOTON.innerHTML = `PLANTILLA UN BOTON funciona ${txtPLANTILLAUNBOTON.value}` ;
  
}); 

// FIN CÓDIGO de los Controles DIV PLANTILLA UN BOTON

*/
// FIN PARA RESTAURAR SI SE ESTROPEA TODO


  // Controles H1 tituloSuperior
  const todosLosDivs = document.querySelectorAll("div");
  const tituloSuperior = document.querySelector("#tituloSuperior");
  let contadorTituloSuperior = 0;
todosLosDivs[0].addEventListener("click",()=>{
contadorTituloSuperior++;
    if (contadorTituloSuperior==1){
      tituloSuperior.style.color="#0000FF";
    }
    else if (contadorTituloSuperior == 2){
      tituloSuperior.style.color="#339900";
    }
    else{
      tituloSuperior.style.color="#FF0000";
      contadorTituloSuperior=0;
    }  
  })
    // FIN Controles H1 tituloSuperior