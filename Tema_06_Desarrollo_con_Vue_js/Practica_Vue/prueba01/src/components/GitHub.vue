<script>
import GitHubRepo from './GitHubRepo.vue';
export default {
    name:"componenteCabecera",
    components:{
        GitHubRepo
    },
    data(){
        
        return{
            // URL
            urlCompleta: "",
            urlParteFija: "https://api.github.com/users/",
            urlUsuario: "",
            // GET
            login:"",
            avatar_url:"",
            html_url:"",
            repos_url:"",

            // GET repositorios
            numRepos: 0,
            losRepositorios: [],
            // Booleanos
            mostrar: false,
            primeraVez: true,
            nuevaBusqueda: false
        }
    },
    props:[
        "unProp"
    ],
    methods:{
        borrarConsola(){
            console.clear();
        },
        obtenerUsuario(){
            this.primeraVez=false;
            this.nuevaBusqueda=false;
            // Formación de la URL
            this.urlCompleta = new URL(`${this.urlParteFija}${this.urlUsuario}`)
            console.log(`Se llama a la URL: ${this.urlCompleta}`)

            // Fetch
            fetch(`${this.urlCompleta}`)
            .then((response)=>{
                
                if(response.status !=200){
                    this.mostrar = false;
                    console.log(`Usuario inexistente: error ${response.status}`);
                } else {
                    console.log(`Usuario OK: ${response.status}`);
                    this.mostrar = true;
                    return response.json();
                }
            }).then((data)=>{
                this.login=data.login;
                this.avatar_url=data.avatar_url;
                this.html_url=data.html_url;
                this.repos_url=data.repos_url;

            }).catch((error)=>{
                console.log(`Error de conexión: error ${response.status}`)
            })

        },
        obtenerRepos(){
            this.nuevaBusqueda=true;
            fetch(`${this.repos_url}`) // se recoge con fetch los repositorios
            .then((response)=>{
                console.log(`Numero de repositorios antes del json: ${this.numRepos}`);
                return response.json();
            }).then((data)=>{
                this.losRepositorios = data;
                console.log(`Repositorios recogidos: ${this.losRepositorios.length}`);
            })
        }
    }
}

</script>

<template>
<main>
    <div>
        <input type="text" v-model="urlUsuario" @keydown.enter="obtenerUsuario">
        <button @click="borrarConsola">Borrar consola</button> Búsqueda: {{ urlParteFija }}{{ urlUsuario }}
    </div>
    
    <template v-if="primeraVez == false" style="display:inline-block">
        <div v-if="mostrar == true" class="usuarioExistente">
            <dl><dt>El usuario <span class="marcadomorado">{{ urlUsuario }}</span> SÍ existe:</dt>
                <dd>Usuario: <span class="marcadorojo">{{ login }}</span></dd>
                
                <dd>HTML URL: <a :href="html_url" target="_blank"><span class="marcadoazul">{{ html_url }}</span></a></dd>
                <dd>Repositorios: <a :href="repos_url" target="_blank"><span class="marcadoverde">{{ repos_url }}</span></a></dd>
            </dl>
            <button id="verRepos" @click="obtenerRepos">Ver repositorios</button>
            <figure><img :src="avatar_url" alt="Avatar">
                <figcaption>Url del avatar: <a :href="avatar_url" target="_blank"><span class="marcadoverde">{{ avatar_url }}</span></a></figcaption>
            </figure>

        </div>

        <div v-else class="usuarioInexistente">
            El usuario {{ urlUsuario }} NO existe.
        </div>

        <div class="divRepositorios" v-if="nuevaBusqueda == true">
            <div v-for="unRepositorio in losRepositorios" :key="`${unRepositorio.id}`">
            <GitHubRepo :repo="unRepositorio"></GitHubRepo>
            </div>
        </div>


    </template>
  </main>
</template>

<style scoped>
header, p{color:black;}

.usuarioInexistente{
    border: 1px solid red;
    background-color: rgb(248, 228, 228);
    color: red;
    font-weight: bold;
}

.usuarioExistente{
    display: inline-block;
    width: 45%;
    vertical-align: top;
    border: 1px solid blue;
    background-color: rgb(229, 251, 255);
    font-weight: bold;
    font-size: 0.9em;
    margin-top: 10px;
    margin-left: 20px;
}

img{width: 80%;}

.marcadorojo{color:red}
.marcadoverde{color:#339900}
.marcadoazul{color:blue}
.marcadomorado{color:purple}

#verRepos{
    background-color: #339900;
    margin-left: 40px;
    color: white;
}

.divRepositorios{
    display: inline-block;
    width: 45%;
    vertical-align: top;
    background-color: #d1f7bf;
    margin-left: 20px;
    color: black;
    border: 1px solid #339900;
    margin-top:10px;
}

</style>