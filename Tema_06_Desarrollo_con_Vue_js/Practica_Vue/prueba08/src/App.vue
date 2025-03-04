<script>

export default {
    name:"Principal",
    components:{

    },
    data(){
        return{
            titulo:"Buscar un usuario de GitHub"
        }
    },
    methods:{
        borrarConsola(){
            console.clear();
        }
    }
}


</script>

<template>
  <header>
    <h1>{{ titulo }}</h1>
  </header>


<main class="container">


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
