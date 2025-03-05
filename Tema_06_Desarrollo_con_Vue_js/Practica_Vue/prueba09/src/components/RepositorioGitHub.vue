<script>

export default {
  name: "Secundario",
  data(){
    return{
        titulo:"HOLA, PROBANDO"
    }
  },
  props:[
    "unRepo"
  ]
}


</script>

<template>
<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">{{ unRepo.name }}</div>
  <div class="card-body text-primary">
    <h5 class="card-title">{{ unRepo.language }}</h5>
    <p class="card-text">{{ unRepo.forks_count }}</p>
  </div>
</div>
</template>

<style scoped>

</style>