<script>
import GitHubRepo from './GitHubRepo.vue';

export default {
    name:"componenteGitHub",
    components:{
        GitHubRepo
    },
    data(){
        return{
            // pruebas
            titulo:"GitHub",
            temandounprop:"Te mando un prop",

            // Variables para el display
            primeraVez:true,
            usuarioExistente:true,
            reposVisibles:false,

            // Variables para formar las URL
            urlBasica:"http://api.github.com/users/",
            usuario:"",
            urlCompleta:"",
            login:"",
            avatar_url:"",
            html_url:"",
            repos:[]
        }
    },
    methods:{
        borrarConsola(){
            console.clear();
        },
        borrarInput(){
            this.usuario="";
        },
        obtenerUsuario(){
            this.primeraVez = false;
            // Composición de la URL
            this.urlCompleta = `${this.urlBasica}${this.usuario}`
            console.log(this.urlCompleta);

            // Fetch
            fetch(this.urlCompleta)
            .then((response)=>{
                if (response.status!=200){
                    this.usuarioExistente = false;
                    console.log(`Usuario inexistente. Error: ${response.status}`)
                    return;
                } else {
                    this.usuarioExistente = true;
                    console.log(`Usuario correcto: ${response.status}`)
                    return response.json();
                }
            })
            .then((data)=>{
                console.log(data);
                this.login = data.login;
                this.avatar_url = data.avatar_url;
                this.html_url = data.html_url;
                this.repos = data.repos;
                console.log(`Login: ${this.login}`);
                console.log(`Avatar: ${this.avatar_url}`);
                console.log(`Html_url: ${this.html_url}`);
            }).catch((error)=>console.log("Se ha producido un error: " + error))
        },
        obtenerRepos(){
            console.log("Obtener repositorios")
            fetch(`${this.urlCompleta}/repos`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                this.repos=data
        });
        }
    }
}

</script>

<template>

<main class="container">
    <div class="row">
        <div class="col col-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                v-model="usuario" @keydown.enter="obtenerUsuario">  
            </div>
        </div>
        <div class="col col-1">
            <button @click="borrarConsola" class="btn btn-danger">#</button>
        </div>
        <div class="col col-1">
            <button @click="borrarInput" class="btn btn-success">@</button>
        </div>
    </div>
</main>

<div v-if="primeraVez==false">
    <div class="row" v-if="usuarioExistente==false">
        <div class="col col-2">&nbsp;</div>
        <div class="col col-8 alert alert-danger" role="alert">
            El usuario {{ usuario }} no existe.
        </div>
    </div>

    <div class="row" v-else>
        <div class="col col-4">
            <div class="card" style="width: 18rem;">
                <img :src="avatar_url" class="card-img-top" alt="Avatar">
                    <div class="card-body">
                        <h5 class="card-title">{{login}}</h5>
                        <p class="card-text">
                            <a :href="html_url" target="_blank">{{html_url}}</a>
                        </p>
                        <a @click="obtenerRepos" class="btn btn-primary">Ver repositorios</a>
                    </div>
                    </div>
        </div>
        <div class="col col-6" >
        <div v-for="unRepo in repos" :key="unRepo.id">
            <GitHubRepo :repo="unRepo"></GitHubRepo></div>
        </div>
    </div>


</div>



</template>

<style scoped>
input{width: 200px;}
</style>