* Gestión de usuarios y repositorios de GitHub
Esta práctica tiene como objetivo *crear una aplicación Vue compleja* a través de componentes de un solo archivo. 
La aplicación es una aplicación de página única que permitirá al usuario visualizar determinados datos disponibles 
a través de la *API de GitHub*.

La aplicación utilizará *dos componentes* que se encargarán de formatear los datos provenientes de dicha API (en formato JSON). 
También deberá proporcionar los *controles* apropiados para *descargar los datos correspondientes* a través de llamadas AJAX. 
Para el formato visual se puede utilizar la librería Bootstrap si se desea.

[[./imagenes/DWEC_U06_A02_CPE_01.gif]]

Se utilizarán las siguientes *URLs* de la *API de GitHub*:

- https://api.github.com/users/{USER} - 
Al hacer una petición ~GET~ a este punto de destino sustituyendo ~{USER}~ 
por un usuario concreto, se obtendrán los *datos de dicho usuario*. 
Por ejemplo, los datos del usuario de GitHub llamado ~vuejs~ están disponibles aquí: 
https://api.github.com/users/vuejs. 

Para la práctica solamente necesitaremos los siguientes campos del objeto de datos devuelto:
  - ~login~ - Login del usuario para mostrarlo por pantalla.
  - ~avatar_url~ - URL de la imagen del avatar del usuario.
  - ~html_url~ - URL de la página de GitHub del usuario.
  - ~repos_url~ - URL para obtener la lista de repositorios del usuario.
  
- https://api.github.com/users/{USER}/repos - Al hacer una petición ~GET~ a este punto de destino 
sustituyendo ~{USER}~ por un usuario concreto, se obtendrá el *listado de los repositorios* de dicho usuario. 
En este caso los datos devueltos tienen formato de *array*. 
Por ejemplo, los repositorios del usuario de GitHub llamado ~vuejs~ están disponibles aquí: 
https://api.github.com/users/vuejs/repos.

De cada elemento (repositorio) del array nos interesarán las siguientes propiedades:
  - ~full_name~ - Nombre completo del repositorio
  - ~html_url~ - URL para acceder al repositorio a través de la web de GitHub
  - ~description~ Descripción del repositorio
  - ~forks_count~ - Número de forks que tiene el repositorio


Para realizar la *petición* a la API de servidor se puede utilizar el método ~fetch~ del navegador. 
Si se desea se puede utilizar también la librería *axios*.

La aplicación estará formada por *tres componentes*:
- Componente principal - Fichero ~App.vue~.
- Componente ~GitHub~ - Fichero ~components/GitHub.vue~.
- Componente ~GitHubRepo~ - Fichero ~components/GitHubRepo.vue~.


** Componentes
*** Aplicación VueJS
    - Se encargará de mostrar el título de la página y cargar el componente ~GitHub~.

*** Componente ~GitHub~
- *Plantilla*:

  - *Campo de texto* para que el usuario introduzca un nombre de usuario de GitHub. 
  Debe tener un *evento* de tipo ~keydown~ que se active *al pulsar la tecla INTRO* 
  y que llame al método ~obtenerUsuario~.
  - *Mensaje de error* para indicar si el usuario no existe. Inicialmente estará oculto.
  - *Capa* para mostrar los *datos* del usuario. Inicialmente estará oculta. Debe mostrar:
    - La imagen del avatar del usuario.
    - El login del usuario.
    - Un enlace a la URL de GitHub del usuario.
    - Un botón tipo ~<button>~ denominado ~Repositorios~. 
	Este botón deberá llamar al método ~obtenerRepositorios~ cuando se pulse.
	
  - *Capa* para mostrar la *lista de repositorios* del usuario. 
  Mostrará un componente ~GitHubRepo~ para cada repositorio del usuario. 
  Inicialmente estará oculta. Cada componente ~GitHubRepo~ deberá recibir un repositorio como parámetro.
  
- *Variables de datos*:
  - Se deberán crear variables de datos para controlar el estado de la aplicación. 
  
  Entre otras cosas, se debe almacenar:
    - El nombre de usuario que se haya introducido en el campo de texto.
    - Los datos obtenidos de la API de GitHub con la información del usuario.
    - El listado de repositorios del usuario obtenidos de la API de GitHub.
	
  - Para implementar la funcionalidad de ocultar / mostrar se deberán utilizar *variables auxiliares* 
  que almacenen el estado visible / invisible de cada uno de los elementos de la plantilla: mensaje de error, 
  datos del usuario y listado de repositorios. 
  
  Además, se deberá *desactivar el campo de búsqueda* cuando se pulse la tecla INTRO 
  y se volverá a activar cuando se reciban los datos.
  
- *Métodos*:
  - ~obtenerUsuario~ - Este método se encargará de realizar la llamada a la API de GitHub para obtener los datos del usuario. 
  Se encargará también de modificar las variables de estado 
  para almacenar la información y mostrar u ocultar las capas correspondientes.
  
  - ~obtenerRepos~ - Este método se encargará de realizar la llamada a la API de GitHub 
  para obtener los repositorios del usuario. 
  Para ello utilizará la propiedad que contiene la URL de los repositorios del usuario seleccionado 
  (tal como se ha explicado antes, dicha propiedad es ~repos_url~). 
  
  Se encargará también de modificar las variables de estado para almacenar la información 
  y mostrar u ocultar las capas correspondientes.

*** Componente ~GitHubRepo~

- *Plantilla*:
  - *Enlace* formado por:
    - Un texto con el *nombre completo del repositorio*.
    - Una URL de destino, que será la *URL del repositorio* para acceder a través de la web de GitHub.
    - Un atributo ~title~ cuyo contenido será la *descripción* del repositorio. 
	El atributo ~title~ se utiliza para mostrar información en un cuadro emergente cuando el ratón 
	está situado encima del elemento que lo contiene.
  - Texto alineado a la derecha que muestre el *número de forks del repositorio*.
  
- *Props*:
  - ~repo~ - Almacenará el repositorio pasado como parámetro.

** Claves de resolución

- Ten cuidado al realizar las pruebas: la API de GitHub solo permite *60 peticiones a la hora* 
sin autenticar. Para diseñar los componentes utiliza variables de datos que almacenen objetos de prueba 
con las mismas propiedades que los que devuelve la API. De esta manera evitarás consumir la cuota de peticiones.

- La API de GitHub incluye también una propiedad ~id~ con cada repositorio. Puedes utilizar dicha propiedad 
como clave para el bucle ~v-for~ que procesará el listado de repositorios.

- Recuerda que si un usuario no existe, la API devolverá un error 404. La librería ~fetch~ 
no lo procesa como un error, sino como una petición válida que devuelve un código de error. 
Por tanto, la promesa se resolverá correctamente (se ejecutará la función callback de ~then~). 
Puedes utilizar ~response.ok~ para comprobar si el usuario existe (código 200).

** Formato de la entrega
- Cada alumno dispondrá de un repositorio en GitHub para su trabajo personal. 
Dicho repositorio se creará automáticamente al hacer clic en el enlace y aceptar la tarea (/assignment/).
- Todos los archivos de la práctica se guardarán en el repositorio y se subirán a GitHub periódicamente. 
Es conveniente ir subiendo los cambios aunque no sean definitivos.
- Para cualquier tipo de *duda o consulta* se pueden abrir ~Issues~ 
haciendo referencia al profesor dentro del texto del ~Issue~.
- Una vez *finalizada* la tarea se debe crear un ~Issue~ en el repositorio 
haciendo referencia al profesor incluyendo el texto dentro del ~Issue~.
