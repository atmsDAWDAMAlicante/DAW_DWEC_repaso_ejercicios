// Variables globales
let vocales = ["a", "e", "i", "o", "u"];



// CÓDIGO de los Controles DIV NUMERO1 - CALLBACKS - MAP
const txtNUMERO1 = document.querySelector("#txtNUMERO1");
const btnNUMERO1 = document.querySelector("#btnNUMERO1");
const parrafoNUMERO1 = document.querySelector("#parrafoNUMERO1");

btnNUMERO1.addEventListener("click",function(){
  console.log("NUMERO1 funciona"); // Para ver que funciona



  let arrayVocalesMayusculas = [];
  arrayVocalesMayusculas = vocales.map((elemento)=>elemento.toUpperCase())

  // Bloque para imprimir
  parrafoNUMERO1.innerText = "";
  print(printArray(arrayVocalesMayusculas, true),1)
});// Fin del AddEventListener - CALLBACKS - MAP

// FIN CÓDIGO de los Controles DIV NUMERO1 - CALLBACKS



// CÓDIGO de los Controles DIV NUMERO2 - SETTIMEOUT
const txtNUMERO2 = document.querySelector("#txtNUMERO2");
const btnNUMERO2 = document.querySelector("#btnNUMERO2");
const parrafoNUMERO2 = document.querySelector("#parrafoNUMERO2");

btnNUMERO2.addEventListener("click",function(){
  console.log("NUMERO2 funciona"); // Para ver que funciona

  // Conversión números
  /*let segundos = parseInt(txtNUMERO2.value)
  if (isNaN(segundos))
    segundos = 1;*/

  // Bloque para imprimir
  parrafoNUMERO2.innerText = "";
  // EL SETTIMEOUT
  // se le tiene que pasar LA REFERENCIA A UNA FUNCIÓN y NO la ejecución INMEDIATA de una función 'print()'
  // CON CALLBACKS SE USAN FUNCIONES ANÓNIMAS
  setTimeout(()=>print(printArray(vocales,false),2),(segundos(txtNUMERO2.value)))

}); 

// FIN CÓDIGO de los Controles DIV NUMERO2 - SETTIMEOUT


// CÓDIGO de los Controles DIV PLANTILLA DOS BOTONES - EJERCICIO - CRONÓMETRO
const txtCRONOMETRO = document.querySelector("#txtCRONOMETRO");
const btnCRONOMETROInicioParada = document.querySelector("#btnCRONOMETROInicioParada");
const btnCRONOMETROPuestaaCero = document.querySelector("#btnCRONOMETROPuestaaCero");
const parrafoNUMERO7 = document.querySelector("#parrafoNUMERO7");
let momento = 0;

function cronometroFuncion(){
  momento++;
  print(momento,7)
}
let tiempoTranscurrido = setInterval(cronometroFuncion, 1000)

btnCRONOMETROInicioParada.addEventListener("click",function(){
  
  tiempoTranscurrido();
}); 

btnCRONOMETROPuestaaCero.addEventListener("click",function(){
  clearInterval(tiempoTranscurrido)
  print("Itervalo interrumpido", 7);
}); 

// FIN CÓDIGO de los Controles DIV PLANTILLA DOS BOTONES - EJERCICIO - CRONÓMETRO





// CÓDIGO de los Controles DIV NUMERO3
const txtNUMERO3 = document.querySelector("#txtNUMERO3");
const btnNUMERO3 = document.querySelector("#btnNUMERO3");
const parrafoNUMERO3 = document.querySelector("#parrafoNUMERO3");

btnNUMERO3.addEventListener("click",function(){

  alert("NUMERO3 funciona");
  print(txtNUMERO3.value,3)

}); 
// FIN CÓDIGO de los Controles DIV NUMERO3


// CÓDIGO de los Controles DIV NUMERO4
const txtNUMERO4 = document.querySelector("#txtNUMERO4");
const btnNUMERO4 = document.querySelector("#btnNUMERO4");
const parrafoNUMERO4 = document.querySelector("#parrafoNUMERO4");

btnNUMERO4.addEventListener("click",function(){

  alert("NUMERO4 funciona");
  print(txtNUMERO4.value,4)
  
}); 

// FIN CÓDIGO de los Controles DIV NUMERO4



// CÓDIGO de los Controles DIV NUMERO5
const txtNUMERO5 = document.querySelector("#txtNUMERO5");
const btnNUMERO5 = document.querySelector("#btnNUMERO5");
const parrafoNUMERO5 = document.querySelector("#parrafoNUMERO5");

btnNUMERO5.addEventListener("click",function(){

  alert("NUMERO5 funciona");
  print(txtNUMERO5.value,5)
  
}); 

// FIN CÓDIGO de los Controles DIV NUMERO5



// CÓDIGO de los Controles DIV NUMERO6
const txtNUMERO6 = document.querySelector("#txtNUMERO6");
const btnNUMERO6 = document.querySelector("#btnNUMERO6");
const parrafoNUMERO6 = document.querySelector("#parrafoNUMERO6");

btnNUMERO6.addEventListener("click",function(){

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
  elementoEnConcreto.innerHTML += `${mensaje}<br>`;
  /*
  let elementoConGetElementById = document.getElementById(cadenaParrafo);
  elementoConGetElementById.innerHTML = `NUMERO6 funciona ${mensaje}`;
  */
}

function printArray(array,linea){
  let resultado = "";
  let salto = "";
  if (linea)
      salto = "<br>";
  else
      salto = "";
  for (let elemento of array){
    resultado += `${elemento}${salto}`;
  }
  return resultado;
}

// FIN FUNCIONES DE SALIDA

// FUNCIONES OPERACIONES

function segundos(){
  let segundos = parseInt(txtNUMERO2.value)
  if (isNaN(segundos))
    segundos = 1;
  return segundos*1000;
}



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

  alert("PLANTILLADOSBOTONES 1 funciona");
  parrafoPLANTILLADOSBOTONES.innerHTML = "PLANTILLADOSBOTONES 1 funciona " + txtPLANTILLADOSBOTONES.value;
  
}); 

btnPLANTILLADOSBOTONES2.addEventListener("click",function(){

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