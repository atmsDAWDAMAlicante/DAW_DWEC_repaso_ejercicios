<script>
import GitHubRepo from './GitHubRepo.vue'

export default {
  name: "GitHub",
  components:{
    GitHubRepo
  }, data(){
    return {
        titulo: "GitHub",

        // Variables display
        primeraVez:true,
        usuarioExistente:false,
        verRepo:false,

        // URL de GitHub
        urlBasica: "https://api.github.com/users/",
        usuario: "",
        urlCompleta: "",

        // Datos del usuario
        login:"",
        avatar_url:"",
        html_url:"",
        repos:[]
    }
  }, methods:{
        borrarConsola(){
            console.clear();
        },
        borrarUsuario(){
            this.usuario="";
        },
        obtenerUsuario(){
            this.primeraVez = false;
            this.verRepo=false;
            // Componer la URL
            this.urlCompleta = this.urlBasica + this.usuario
            console.log("URL:" + this.urlCompleta)
            
            // Fetch usuario
            fetch(this.urlCompleta)
            .then((response)=>{
                if (response.status !=200){
                    this.usuarioExistente = false;
                    console.log("Usuario inexistente: " + response.status);
                } else {
                    this.usuarioExistente = true;
                    console.log("Usuario OK: " + response.status);
                    return response.json();
                }
            })
            .then((data)=>{
                //console.log(data)
                this.login=data.login;
                this.avatar_url=data.avatar_url;
                this.html_url=data.html_url;
                
                console.log(this.login);
            }).catch((error)=>{console.log("ERROR: " + error)})
        },
        obtenerRepos(){
            this.verRepo=true;
            console.log(`${this.urlCompleta}/repos`)
            fetch(`${this.urlCompleta}/repos`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.repos=data;
                console.log(this.repos)
            })
        }
  }
}

</script>

<template>
  <header class="container">
    <div class="row">
    <div class="col col-8">
    <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="usuario"
        @keydown.enter="obtenerUsuario">
        <span class="input-group-text" id="basic-addon1">@</span>
    </div>
    </div>
    <div class="col col-2">
        <button class="btn btn-warning" @click="borrarConsola">#</button>

    </div>
    <div class="col col-1">
        <button class="btn btn-primary" @click="borrarUsuario">@</button>
    </div>
    </div>
  </header>

  <main class="container" v-if="primeraVez == false">
    <div class="row" v-if="usuarioExistente == false">
        <div class="alert alert-danger" role="alert">
            El usuario {{ usuario }} no existe
        </div>
    </div>
    <div class="row" v-else>
        <div class="col col-7">
            <div class="card" style="width: 18rem;">
                <img :src="avatar_url" class="card-img-top" alt="Avatar del usuario">
                <div class="card-body">
                    <h5 class="card-title">Usuario: {{ login }}</h5>
                    <p><a :href="html_url" target="_blank">Ver perfil de usuario</a></p>
                    <button class="btn btn-primary" @click="obtenerRepos">Ver repos</button>
                </div>
                </div>

        </div>
        <div class="col col-4" v-if="verRepo == true">
            <div v-for="unRepo in repos" :key="unRepo.id">
                <GitHubRepo :cadaRepo="unRepo"></GitHubRepo>
            </div>
        </div>
    
    </div>
  </main>
</template>

<style scoped>
h2{color:yellow;}

</style>
