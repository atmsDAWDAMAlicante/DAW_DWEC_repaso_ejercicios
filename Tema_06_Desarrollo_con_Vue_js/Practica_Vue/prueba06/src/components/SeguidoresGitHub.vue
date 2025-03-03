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

<header>
  <h1>{{ unSeguidor.login }}</h1>
</header>


<main>

</main>


</template>

<style scoped>
  h1{color:yellow;}
</style>
