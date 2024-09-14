# Ejercicios del Tema 4 "Programación Modular" de la asignatura "Programación" del ciclo DAW, Curso 2022-2023 traducidos a JavaScript

**En una carpeta "test" se guardan los tests mocha/should correspondientes a cada ejercicio**

*Notas para la instalación, uso y confección de los tests que me he hecho yo a modo de apuntes:*

## 1. Instalación de los paquetes.

1.1 Supuesto: el directorio **NO** tiene un archivo package.json

En la terminal se introduce el siguiente comando para instalar **mocha**:

```
npm i mocha
```

En la terminal se introduce el siguiente comando para instalar **should**:

```
npm i should
```

Finalizada la instalación, el archivo *package.json* tendrá un contenido mínimo. Ver apartado 1.3

```
{
    "devDependencies": {
        "mocha": "^10.0.0",
        "should": "^13.2.3"
    }
}
```

1.2 Supuesto: el directorio **SÍ** tiene un archivo package.json

Basta con ejecutar el siguiente comando en la terminal. El archivo package.json contiene la información necesaria para instalación.

```
npm install
```

1.3 Completar el archivo *package.json*

```
{
    "name": "NOMBRE-NECESARIO-PARA-SUBIRLO-A-NPM",
    "version": "1.0.0",
    "description": "UNA DESCRIPCIÓN DE MIS TESTS",
    "scripts": {
        "test": "mocha",
        "test1": "mocha test/test1",
        "test2": "mocha test/test2",
		"test3": "mocha test/test3",
		"test4": "mocha test/test4",
        "test5": "mocha test/test5",
		"test6": "mocha test/test6"
    },
    "author": "Yo mismo",
    "license": "MIT",
    "devDependencies": {
        "mocha": "^10.0.0",
        "should": "^13.2.3"
    }
}
```

**NOTA**: recordar utilizar la terminal en el directorio adecuado.

**NOTA**: UTILIZAR LA PALABRA '**test**' "test1": "mocha test/test1",

**NOTA**: al instalar estos dos paquetes *mocha* y *should*, en la carpeta '*node_modules*' habrán 78 elementos (+/-).

**NOTA**: en el directorio raiz del proyecto tienen que haber dos subdirectorios '**test**' y '**node_modules**'

**NOTA**: para que no se suba el directorio '*node_modules*' a GitHub, hay que añadir en el directorio raiz del proyecto el archivo '*.gitignore*' con el siguiente contenido

```
node_modules/
```

[Vídeo sobre package.json] (https://www.youtube.com/watch?v=7HTfEG_sj9s)


## 2. Archivo js que contiene la función o funciones a probar con los tests.

El archivo debe tener las funciones (con return) y, al final, exportar las funciones que se vayan a probar, con el código siguiente (ejemplo de una funcion Sumar):

```
	/* Primero las funciones */

	function Sumar(a,b){
		return a+b;
	}

	function Otra(a){
		return a;
		}

	/* Exportación de funciones */
	module.exports = {
		  Sumar,
		  Otra
	}
```

**NOTA**: cuidado con las comas en la enumeración de las funciones que se exportan. La última NO lleva coma.


## 3. Ejecución de los tests.

Ejecución de todos los tests a través de la terminal:

```
npm test
```

Ejecución de un test en particular (*test1* sería el nombre del test en particular)

```
npm run test1
```

**NOTA**: para la ejecución de un test en particular hay que indicar el nombre del test que figura en el archivo *package.json*. Por ejemplo, el *test1* está en el archivo *test_01.js* pero en el archivo *package.json* se indica que *"***test1***": "mocha test/test_01"*, por tanto hay que ejecutar en la terminal *npm run test1*.


## 4. Contenido de los archivos de los tests **mocha**.

Parte superior, declaración de las variables cargando la librería y los módulos (cuidado con las rutas):

```
let assert = require('assert');
let ejercicio_01 = require("../ejerciciosCarpeta/ejercicio_01.js");
```

Parte inferior, el test en sí. El ejemplo de abajo produce un error ya que la función suma devuelve return a+b;

```
it("Funcion suma, ejercicio 1",function(){
    assert.equal(ejercicio_01.suma(3,4),6);
});
```

Por tanto no pasará el test y en la consola se mostará el siguiente mensaje:

```
  1 failing

  1) Funcion suma, ejercicio 1:

      AssertionError [ERR_ASSERTION]: 7 == 6
      + expected - actual

      -7
      +6
```

**NOTA**: Se ve claro que el '1) Funcion suma, ejercicio 1*:' nombre del error es el que está junto al *it*.

**DETALLE**:
```
it(		"Funcion suma, ejercicio 1",				function()
		{
			assert.equal(		**ejercicio_01.suma(3,4)**		,6	);
		}
	);

```

**LINKS**:

[npm] (https://www.npmjs.com/package/mocha)

[GitHub] (https://github.com/mochajs)

[Javascript Testing with Mocha (Everything You Need To Know)] (https://medium.com/@JaysNotebook/learning-mocha-everything-you-need-to-know-74e8200f90ec)




## 5. Contenido de los archivos de los tests **should**.

Parte superior, declaración de las variables cargando la librería y los módulos (cuidado con las rutas):

```
// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../ejercicios/ejercicio_03.js');
```

Alternativa:

```
// Carga de la librería should
import should from 'should';

// Carga del módulo con las funciones a probar
import ejercicios from '../ejercicios/ejercicio_03.js';
```

Parte inferior, los test en sí.

La *función a probar* es:

```
function mensaje(a){
    return a;
}
```

Los **tests** son:

```
it("mensaje", function(){
    ejercicios.mensaje.should.be.a.Function();
    should.equal(ejercicios.mensaje("Hola"), "Hola")
})
```

```
it("mensaje", function(){
    ejercicios.mensaje.should.be.a.Function();
    should("Hola").be.exactly(ejercicios.mensaje("Hola")).and.be.a.String();
})
```

```
it("mensaje con error", function(){
    ejercicios.mensaje.should.be.a.Function();
    (ejercicios.mensaje("Hola")).should.be.exactly("Adios");
})
```

El último da error, y el **mensaje de error** que sale por la terminal es el siguiente:

```
  1) mensaje con error:

      AssertionError: expected 'Hola' to be 'Adios'
      + expected - actual

      -Hola
      +Adios
```

**DETALLES**:

Esta línea comprueba que *ejercicios.mensaje* es *should.be.a.* una función *Function()*

```
    ejercicios.mensaje.should.be.a.Function();
```

Esta línea usa el método *should.equal* para verificar la igualdad (estricta) entre el return de la función *ejercicios.mensaje("Hola")* y el valor esperado *, "Hola");*

```
    should.equal(ejercicios.mensaje("Hola"), "Hola");
```

Esta línea comprueba que "Hola" *should("Hola")* es exactamente igual *be.exactly* al return de la función *ejercicios.mensaje("Hola")*
y, además, comprueba que es un string *.and.be.a.String();*


```
    should("Hola").be.exactly(operaciones.mensaje("Hola")).and.be.a.String();
```

Esta línea (la del error) lo he puesto al revés (además del error). Delante he puesto el return. Se comprueba que el return de la función *ejercicios.mensaje("Hola")*  es exactamente igual *.should.be.exactly* a *("Adios");*

```
(ejercicios.mensaje("Hola")).should.be.exactly("Adios");
```

## 6. **MÉTODOS (aserciones/) DE SHOULD**:

[npm] (https://www.npmjs.com/package/should)

[https://shouldjs.github.io/] (https://shouldjs.github.io/)

[GitHub] (https://github.com/shouldjs/should.js)

### 6.1 - Declaración de variables

Mínimo las dos variables 'should' y 'ejercicios'.

```
// Carga de la librería should
let should = require('should');

// Carga del módulo con las funciones a probar
let ejercicios = require('../RUTA-AL-ARCHIVO-A-PROBAR.js');
```
Opcional: para pasar muchos datos de pruebas al test de una vez (como *[DataRow()]* en C#)

```
let arrayPrueba =  [
    [1,1],
    [2,2],
    [3,3]
];
```


### 6.2 - **it** esquema básico

```
it ("un título", function(){
    ejercicios.LA-FUNCION.should.be.a.Function; // comprobación que LA-FUNCION es una función
    // aserción
});
```

### 6.3 - equal


**equal**(se pasan estos parametros), "la función da esto", "mensaje en caso de no pasar la prueba")

```
it ("Función tradicional: suma()", function(){
    ejercicios.suma.should.be.a.Function; // comprobación que suma() es una función
    should.**equal**(ejercicios.suma(2,2), 4, "mensaje en caso de no pasar la prueba"); // se le pasan 2 y 2, deberá devolver 4
});
```