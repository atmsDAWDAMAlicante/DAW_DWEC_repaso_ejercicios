<script>
import GitHub from './components/GitHub.vue'
//import GitHubRepo from './components/GitHubRepo.vue'

export default {
  name: "principal",
  components:{
    GitHub
  }, data(){
    return{
      titulo: "Buscar usuario de GitHub"
    }
  }, methods:{
    borrarConsola(){
      console.clear();
    }
  }
}

</script>

<template>
  <header><h1>{{titulo}}</h1></header>
<GitHub></GitHub>
</template>

<style scoped>
h1{text-align: center;}
</style>
