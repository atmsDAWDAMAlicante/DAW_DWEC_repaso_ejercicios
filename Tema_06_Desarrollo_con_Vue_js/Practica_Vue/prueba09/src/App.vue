<script>
import RepositorioGitHub from './components/RepositorioGitHub.vue';

export default {
  name: "Principal",
  components:{
    RepositorioGitHub
  },
  data(){
    return {
      // Variables de control
      titulo: "Buscar repositorios GitHub",

      // Variables del display
      primeraVez: true,
      usuarioExistente: false,

      // Variables de la URL de GitHub
      urlBasica: "https://api.github.com/users/",
      usuario: "",
      sufijo: "/repos",
      urlCompleta: "",
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
    obtenerRepos(){
      // Cambiar variables display
      this.primeraVez = false;
      this.urlCompleta = `${this.urlBasica}${this.usuario}`
      // Fetch usuario
      fetch(this.urlCompleta)
      .then((response)=>{
        if (response.status!=200){
          this.usuarioExistente = false;
          console.log(`Usuario inexistente: ${response.status}`);
        } else {
          this.usuarioExistente = true;
          console.log(`Usuario correcto: ${response.status}`);
          return response.json();
        }
      })
      .then((data)=>{
        this.login = data.login;
        this.avatar_url = data.avatar_url;
        this.html_url = data.html_url;
        console.log(data.repos)

        fetch(`${this.urlCompleta}${this.sufijo}`)
        .then((response)=>{
          console.log(`${this.urlCompleta}${this.usuario}${this.sufijo}`)
          return response.json()})
        .then((data)=>{
          console.log(data)
          this.repos=data})
      })
      .catch((error)=>console.log(`Se ha producido un error: ${error}`))
    }
  }
}


</script>

<template>
  <header><h1>{{ titulo }}</h1></header>

  <main class="container">
    <div class="row">
      <div class="col col-2">
        &nbsp;
      </div>
      <div class="col col-6">
        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
          v-model="usuario" @keydown.enter="obtenerRepos">  
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
      </div>
      <div class="col col-1">
        <button class="btn btn-danger" @click="borrarConsola">#</button>
      </div>
      <div class="col col-1">
        <button class="btn btn-success" @click="borrarInput">#</button>
      </div>
    </div>


  </main>


  <main class="container">
    <div class="row" v-if="primeraVez==false">
      <div class="col col-1">&nbsp;</div>
      <div class="col col-5" v-if="usuarioExistente == false">
        <div class="alert alert-danger" role="alert">
          El usuario {{ usuario }} no existe.
        </div>
      </div>
      <div class="col col-5" v-else>
        <div class="alert alert-primary" role="alert">
          <div class="card" style="width: 18rem;">
            <img :src="avatar_url" class="card-img-top" alt="Avatar del usuario">
              <div class="card-body">
                <h5 class="card-title">{{login}}</h5>
                <a :href="html_url" class="btn btn-primary" target="_blank">Ver perfil</a>
              </div>
            </div>
        </div>
      </div>
      
    </div>
    <div class="row">
      <div v-for="cadaRepo in repos" :keys="cadaRepo.id">
        <RepositorioGitHub :unRepo="cadaRepo"></RepositorioGitHub>
      </div>
    </div>

  </main>





</template>

<style scoped>
h1{color:yellow;text-align: center;}
</style>
