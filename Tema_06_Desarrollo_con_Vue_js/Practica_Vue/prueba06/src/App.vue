<script>
import SeguidoresGitHub from './components/SeguidoresGitHub.vue';

export default {
  name: "x",
  components:{
    SeguidoresGitHub
  }, data(){
    return{
      titulo: "Buscar seguidores de GitHub",

      // Variables de display
      primeraVez:true,
      usuarioExistente:false,

      // Variables de GitHub
      usuario:"",
      urlBasica:"https://api.github.com/users/",
      urlCompleta:"",
      seguidores:[]
    }
  },
  methods:{
    borrarConsola(){
      console.clear();
    },
    borrarInput(){
      this.usuario="";
      this.primeraVez = true;
    },
    obtenerUsuario(){
      console.log(this.usuario);
      this.primeraVez = false;
      this.urlCompleta = `${this.urlBasica}${this.usuario}/followers`
      fetch(this.urlCompleta)
      .then((response)=>{
        if(response.status!=200){
          this.usuarioExistente = false;
          console.log("El usuario no existe: " + response.status);
        } else {
          this.usuarioExistente = true;
          return response.json();
        }
      })
      .then((data)=>{
        console.log(data);
        this.seguidores=data;
        console.log(this.seguidores[0].login)
      })
      .catch((error)=>console.log("Se ha producido un error: " + error));

    }
  }
}


</script>

<template>

<header class="containter">
  <div class="row">
    <div class="col col-1"></div>
    <div class="alert alert-warning col col-8" role="alert">
      <h1>{{ titulo }}</h1>
    </div>
  </div>
</header>

<nav class="containter">
  <div class="row">
    <div class="col col-1"></div>
    <div class="col col-6">
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="usuario"
        @keydown.enter="obtenerUsuario"> 
      </div>
    </div>
    <div class="col col-1">
      <button class="btn btn-primary" @click="borrarConsola">#</button>
    </div>
    <div class="col col-1">
      <button class="btn btn-success" @click="borrarInput">#</button>
    </div>
  </div>
</nav>
<div>&nbsp;</div>

<main v-if="primeraVez == false" class="containter">
  <div class="row" v-if="usuarioExistente==false">
    <div class="alert alert-danger col col-8 movimiento" role="alert">
      El usuario {{ usuario }} no existe
    </div>
  </div>
  <div class="row" v-else>
    <div class=" col col-10 movimiento" v-for="cadaSeguidor in seguidores" :key="cadaSeguidor.id">
      <SeguidoresGitHub :unSeguidor="cadaSeguidor"></SeguidoresGitHub>
    </div>
  </div>
</main>


</template>

<style scoped>
.movimiento{margin-left: 100px;}
p{color:yellowgreen}
</style>
