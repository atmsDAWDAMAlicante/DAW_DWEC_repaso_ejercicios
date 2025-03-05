<script>

export default {
  name: "secundario",

  data(){
    return {
      // Variables básicas
      titulo: "Buscar usuarios de GitHub",

    }
  },
  props:[
    "cadaRepo"
  ]
}


</script>

<template>
 
 <div class="card" style="width: 18rem;">
  <img :src="cadaRepo.avatar_url" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{cadaRepo.login}} 
    <a :href="cadaRepo.html_url" class="btn btn-primary" target="_blank">Ver perfil</a></h5>
  </div>
</div>

</template>

<style scoped>

</style>
