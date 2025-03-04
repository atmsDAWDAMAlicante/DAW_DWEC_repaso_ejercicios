<script>


export default {
    name:"componenteGitHubRepo",
    components:{

    },
    data(){
        return{
            titulo:"GitHub repo"
        }
    },
    props:[
        "repo"
    ]
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