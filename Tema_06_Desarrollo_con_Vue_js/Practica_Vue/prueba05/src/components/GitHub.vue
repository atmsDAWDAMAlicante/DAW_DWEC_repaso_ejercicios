<script>
import GitHubRepo from './GitHubRepo.vue'

export default {
  name: "GitHub",
  components:{
    GitHubRepo
  }, data(){
    return {
        titulo: "GitHub"
    }
  }
}

</script>

<template>
  <header>
<h2>{{ titulo }}</h2>
<GitHubRepo></GitHubRepo>
  </header>

  <main>

  </main>
</template>

<style scoped>
h2{color:yellow;}

</style>
