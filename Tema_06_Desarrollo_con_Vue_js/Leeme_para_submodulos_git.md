##Creación de submódulos

Para practicar y rehacer el ejercicio de Vue.js en distintas ramas reiniciándolo cada vez hago lo siguiente:

1º Crear un submódulo, para que sea independiente del resto de directorios de esta carpeta de ejercicios.

```
git submodule add URL_DEL_REPOSITORIO_A_CLONAR *NOMBRE_DE_LA_CARPETA_DE_DESTINO*

```
Dentro de la carpeta de destino:

git log y localizo el commit
git log --oneline --graph --all muestra los commits de una forma más cómoda

Crear la rama desde el commit escogido
git checkout -b rama1 51848fc982a4a93bd7b7957c764fe747a63c16b0

Verificar que estoy en la rama adecuada:
git branch

Para subir a GitHub la nueva rama y trabajar en ella
git push --set-upstream origin rama1

