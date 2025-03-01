<script>
import GitHubRepo from './GitHubRepo.vue'

export default {
  name: "github",
  components:{
    GitHubRepo
  }, 
  data(){
    return{
      prueba2: "Hola2"
    }
  }, methods:{
    borrarConsola(){
      console.clear();
    }
  }
}
</script>

<template>
{{ prueba2 }}
<GitHubRepo :envio="prueba2"></GitHubRepo>
</template>

<style scoped>

</style>
