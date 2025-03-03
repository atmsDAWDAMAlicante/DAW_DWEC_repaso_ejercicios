<script>

export default {
  name: "ComponenteSeguidores",
  components:{

  }, data(){
    return{
      titulo: "Seguidores GitHub"
    }
  },
 props:[
    "unSeguidor"
 ]
}


</script>

<template>

<main>
    <div class="card" style="width: 18rem;">
        <img :src="unSeguidor.avatar_url" class="card-img-top" alt="seguidor foto">
        <div class="card-body">
            <h5 class="card-title">{{unSeguidor.login}}</h5>
            <a :href="unSeguidor.html_url" class="btn btn-primary" target="_blank">Ir a su perfil</a>
        </div>
    </div>
</main>
</template>

<style scoped>
  h1{color:yellow;}
</style>
