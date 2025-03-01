<script>

export default {
  name: "githubrepo",
  data(){
    return{
      prueba3: "Hola3"
    }
  }, props:[
    "repo"
  ],
  methods:{
    borrarConsola(){
      console.clear();
    },
    imprimirConsola(){
        console.log("Un repo")
    }
  }
}

</script>

<template>

<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">{{ repo.name }}</div>
  <div class="card-body text-primary">
    <h5 class="card-title">{{ repo.language }}</h5>
    <p class="card-text">{{ repo.forks_count }}</p>
  </div>
</div>
</template>

<style scoped>

</style>
