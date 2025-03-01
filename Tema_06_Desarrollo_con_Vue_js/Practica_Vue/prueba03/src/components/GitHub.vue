<script>
import GitHubRepo from './GitHubRepo.vue'

export default {
  name: "github",
  components:{
    GitHubRepo
  }, 
  data(){
    return{
        usuario:"",
        urlGitHubGeneral:"https://api.github.com/users/",
        urlUsuario:"",
        usuarioExiste:false,
        primeraVez:true,
        verRepos:false,
        login:"",
        avatar_url:"",
        html_url:"",
        repos_url:"",
        los_repos:[]
        
    }
  }, methods:{
    borrarConsola(){
      console.clear();
    },
    obtenerUsuario(){
        this.primeraVez=false;
        this.verRepos=false;
        console.log("Obtener usuario")
        this.urlUsuario=`${this.urlGitHubGeneral}${this.usuario}`
        // Fetch
        fetch(this.urlUsuario)
        .then((response)=>{
            if(response.status!=200){
                this.usuarioExiste=false;
                console.log(`ERROR: ${response.status}`)              
            } else {
                this.usuarioExiste=true;
                return response.json();
            }
        })
        .then((data)=>{
            console.log(data);
            this.login=data.login;
            this.avatar_url=data.avatar_url;
            this.html_url=data.html_url;
            this.repos_url=data.repos_url;
        }).catch(error=>console.log("Error"))
        
    }, obtenerRepos(){
        this.verRepos=true;
        console.log(`${this.repos_url}`);
        fetch(`${this.repos_url}`)
        .then((response)=>{
            console.log(response.status)
            return response.json();
        }).then((data)=>{
            console.log(data.length)
            this.los_repos = data;
        })
    }
  }
}
</script>

<template>
<main class="container">
    <!-- INPUT Y BOTON -->
    <div class="row">
        <div class="input-group flex-nowrap col-8">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="text" class="form-control" aria-label="Username" 
            aria-describedby="addon-wrapping" v-model="usuario" @keydown.enter="obtenerUsuario">
            <button @click="borrarConsola" class="btn btn-success">#</button>
         </div>   
    </div>

    <!-- USUARIO: EXISTENTE O INEXISTENTE -->
    <div class="row" v-if="primeraVez==false">
        <p>Vamos a vistar la URL: <a :href="urlUsuario" target="_blank"> {{ urlUsuario }}</a></p>


    <div v-if="usuarioExiste==false" class="alert alert-danger" role="alert">
        El usuario {{ usuario }} no existe.
    </div>

<div class="row" v-else>
    <div class="card col col-4" style="width: 18rem;">
    <img :src="avatar_url" class="card-img-top" alt="Foto del avatar">
        <div class="card-body">
            <h5 class="card-title">{{login}}</h5>
            <p class="card-text"><a :href="html_url" target="_blank">{{ html_url }}</a></p>
            <!--<a :href="repos_url" target="_blank" class="btn btn-primary" @click="obtenerRepos">Ver repositorios</a>-->
            <button class="btn btn-primary" @click="obtenerRepos">Ver repositorios</button>
        </div>
    </div>
    <div v-if="verRepos==true" class="col col-6">
        <div v-for="unRepo in los_repos" :key="`${los_repos.id}`">
        <GitHubRepo :repo="unRepo"></GitHubRepo>
        </div>
    </div>
</div>
    </div>
</main>


</template>

<style scoped>
button{margin-left:40px;}
</style>
