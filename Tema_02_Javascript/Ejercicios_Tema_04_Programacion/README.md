# Ejercicios del Tema 4 "Programación Modular" de la asignatura "Programación" del ciclo DAW, Curso 2022-2023 traducidos a JavaScript

**En una carpeta "test" se guardan los tests mocha/should correspondientes a cada ejercicio**

*Notas para la instalación, uso y confección de los tests que me he hecho yo a modo de apuntes:*

1. Instalación de los paquetes.

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
    "name": "NOMBRE-DE-MIS-TESTS",
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


2. Archivo js que contiene la función o funciones a probar con los tests.

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