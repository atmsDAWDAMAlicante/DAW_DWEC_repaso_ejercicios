# Ejercicio DWEC_U01_A03_CPE_ARCHIVOS:

*Algunos comentarios*

**A) Instalación:**
1- En Visual Studio Code se abre un terminal nuevo dentro de la carpeta donde se han descomprimido los archivos del ejercicio DWEC_U01_A03_CPE_ARCHIVOS
2- En el terminal se ejecuta 'npm install'
3- El terminal da, a fecha del commit (agosto de 2024), un par de avisos 'npm warn deprecated' y el siguiente mensaje final:
added 78 packages, and audited 79 packages in 10s
20 packages are looking for funding
  run 'npm fund' for details

Dentro de la carpeta se ha creado un directorio "node_modules" que no se cargará en GitHub ya que, el archivo .gitignore contiene "node_modules/".


**B) Ejecución de los tests:**
Para ejecutar los tests hay que ejecutar en la terminal el comando 'npm test' y se ejecutarán todos los tests. Para ejecutar los tests por separado habría que ejecutar 'npm run test1' (para evaluar la suma y la división, que son los tests que contiene el archivo test.js) y 'npm run test2' (para evaluar los tests que contiene el archivo test2.js, que son la resta y la multiplicación). Esto se puede ver en el archivo 'package.json', concretamente aquí:

   "scripts": {
        "test": "mocha",
        "test1": "mocha test/test",
        "test2": "mocha test/test2"
    },

