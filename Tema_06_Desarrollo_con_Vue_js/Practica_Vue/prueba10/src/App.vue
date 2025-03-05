<script>
import SeguidoresGitHub from './components/SeguidoresGitHub.vue'
export default {
  name: "principal",
  components: {
    SeguidoresGitHub
  },
  data(){
    return {
      // Variables básicas
      titulo: "Buscar usuarios de GitHub",

      // Variables del display
      primeraVez:true,
      usuarioExistente:false,

      // Variables de URL y GitHub
      urlBasica:"https://api.github.com/users/",
      usuario:"",
      urlCompleta: "",
      login: "",
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
      this.primeraVez=true;
      this.usuario="";
    },
    obtenerUsuarios(){
      this.primeraVez=false;
      this.usuarioExistente=false;
      // Formar URL
      this.urlCompleta = `${this.urlBasica}${this.usuario}/followers`
      //fetch
      fetch(this.urlCompleta)
      .then((response)=>{
        if(response.status!=200){
          this.usuarioExistente=false;
          console.log(`Usuario ${this.usuario} inexistente: ${response.status}`);
        } else {
          this.usuarioExistente=true;
          console.log(`Usuario ${this.usuario} correcto: ${response.status}`);
          return response.json();
        }
      })
      .then((data)=>{
        this.repos=data;
        console.log(data)
      })


      console.log(this.urlCompleta)
    }

  }
}


</script>

<template>
  <header class="alert alert-primary container" role="alert">
    <h1>{{ titulo }}</h1>
  </header>

  <div class="alert alert-success container">
    <div class="row"><!-- INPUT Y BOTONES -->
      <div class="col col-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Username" 
          aria-describedby="basic-addon1" @keydown.enter="obtenerUsuarios" v-model="usuario">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
      </div>
      <div class="col col-1"><button class="btn btn-danger" @click="borrarConsola">#</button></div>
      <div class="col col-1"><button class="btn btn-warning" @click="borrarInput">@</button></div>
    </div>
    <div class="row" v-if="primeraVez == false"><!-- INPUT Y BOTONES -->
      <div v-if="usuarioExistente==false" class="col col-12">
        <div class="alert alert-danger" role="alert">
          Usuario {{ usuario }} inexistente.
        </div>
      </div>
      <div v-else class="col col-8">si</div>
    </div>
  </div>



  <main class="alert alert-success container">
    <div class="row" v-for="unRepo in repos" :key="unRepo.id">
      <SeguidoresGitHub :cadaRepo="unRepo"></SeguidoresGitHub>
    </div>
  </main>





</template>

<style scoped>

</style>
