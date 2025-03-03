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
      urlCompleta:""
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
      console.log(this.usuario);
      this.primeraVez = false;
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
<div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>

<main v-if="primeraVez == false" class="containter">
  <SeguidoresGitHub></SeguidoresGitHub>
</main>


</template>

<style scoped>

</style>
