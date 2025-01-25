import * as miModulo from './funciones.js';


// CÓDIGO de los Controles DIV NUMERO1
const txtNUMERO1 = document.querySelector("#txtNUMERO1");
const btnNUMERO1 = document.querySelector("#btnNUMERO1");
const parrafoNUMERO1 = document.querySelector("#parrafoNUMERO1");

btnNUMERO1.addEventListener("click",function(){

  //alert(miModulo.sumar(2,3));
  let resultado = "";
  parrafoNUMERO1.innerHTML= "";

  // definición de una colección de nodos de index.html

   let coleccionNodos1 = document.documentElement;

  resultado += `El atributo lang tiene el valor ${coleccionNodos1.lang}`; // devuelve "es" -- esto es un objeto
  let coleccionNodos2 = document.body.childNodes;
  resultado += "<ol>"
  for (let elementosColeccion2 of coleccionNodos2){
    resultado += `<li>${elementosColeccion2}</li>`
  }
  resultado += "</ol>"
  console.log(resultado)
  print(resultado,1)

});// Fin del AddEventListener 

// FIN CÓDIGO de los Controles DIV NUMERO1



// CÓDIGO de los Controles DIV NUMERO2
const txtNUMERO2 = document.querySelector("#txtNUMERO2");
const btnNUMERO2 = document.querySelector("#btnNUMERO2");
const parrafoNUMERO2 = document.querySelector("#parrafoNUMERO2");
const bloque1apartadoA = document.querySelector("#bloque1apartadoA");
const bloque1apartadoB = document.querySelector("#bloque1apartadoB");
btnNUMERO2.addEventListener("click",function(){

  //alert("NUMERO2 funciona");
  print("",2)
  // nuevoA crea un título
  let nuevoA = document.createElement("span");
  nuevoA.textContent = "Hola, Don Pepito";
  // nuevoB crea un párrafo
  let nuevoB = document.createElement("p");
  nuevoB.textContent = "Hola, Don José";
  bloque1apartadoB.append(nuevoB);
  bloque1apartadoA.append(nuevoA);
  // Ahora quiero utilizar outerHTML en el h1
  // outerHTML REEMPLAZA
  bloque1apartadoA.outerHTML = "<span class='marcadorojo'>Hola, Don Pepito</span>";

}); 

// FIN CÓDIGO de los Controles DIV NUMERO2


// CÓDIGO de los Controles DIV NUMERO3
const txtNUMERO3 = document.querySelector("#txtNUMERO3");
const btnNUMERO3 = document.querySelector("#btnNUMERO3");
const parrafoNUMERO3 = document.querySelector("#parrafoNUMERO3");

btnNUMERO3.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  //alert("NUMERO3 funciona");

  const enlaceA = document.querySelector("#enlaceA");
  let resultado = "<ol>"
  for (let elementos of enlaceA.attributes){
    resultado += `<li>${elementos.name} ${elementos.value}</li>`
  }
  resultado += "</ol>"
resultado += "<p>" + enlaceA.dataset.atributo1 + "</p>"
  print(resultado,3)



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
  //elementoEnConcreto.innerHTML += `NUMERO${numero} funciona ${mensaje}<br>`;
  elementoEnConcreto.innerHTML += `${mensaje}<br>`;
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