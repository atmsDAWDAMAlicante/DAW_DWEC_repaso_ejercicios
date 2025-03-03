<script>

export default {
  name: "GitHubRepo",
  data(){
    return {
        titulo: "GitHubRepo"
    }
  }, props:[
    "cadaRepo"
  ]
}

</script>

<template>
  <main>
    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">{{ cadaRepo.name }}</div>
      <div class="card-body text-primary">
        <h5 class="card-title">{{ cadaRepo.language }}</h5>
        <p class="card-text">{{ cadaRepo.forks_count }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2{color:yellow;}

</style>
