<script>
import GitHub from './components/GitHub.vue';

export default {
  name: "Principal",
  components:{
    GitHub
  }, data(){
    return {
        titulo: "Buscar repositorios en GitHub"
    }
  }
}

</script>

<template>
  <header>
    <div class="alert alert-success" role="alert">
      <span class="tituloGrande">{{titulo}}</span>
    </div>
  </header>
  <main>
    <GitHub></GitHub>
  </main>
</template>

<style scoped>
.tituloGrande{
  font-size:2em;
  font-weight: bold;
}

</style>
