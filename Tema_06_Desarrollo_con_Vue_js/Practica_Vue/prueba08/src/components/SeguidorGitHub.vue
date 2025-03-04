<script>

export default {
    name:"Seguidores",
    data(){
        return{
            // Variables iniciales y de prueba
            titulo:"Seguidores de GitHub",

        }
    },
    props:[
        "cadaSeguidor"
    ]
}


</script>

<template>



<main class="container">
    <h1></h1>
    <div class="card" style="width: 18rem;">
  <img :src="cadaSeguidor.avatar_url" class="card-img-top" alt="cada seguidor">
  <div class="card-body">
    <h5 class="card-title">{{ cadaSeguidor.login }}</h5>
    <a :href="cadaSeguidor.html_url" class="btn btn-primary">Ver perfil</a>
  </div>
</div>
</main>


</template>


<style scoped>
h1{
    text-align: center;
    color:rgb(232, 161, 29);
    font-size:3em;
    font-weight: bold;
    text-decoration: underline;
}
</style>
