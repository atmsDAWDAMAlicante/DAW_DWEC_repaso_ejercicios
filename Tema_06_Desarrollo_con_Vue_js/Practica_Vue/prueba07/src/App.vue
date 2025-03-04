<script>

import GitHub from './components/GitHub.vue'

export default {
    name:"Principal",
    components:{
        GitHub
    },
    data(){
        return{
            titulo:"Buscar repositorios de GitHub",

            
        }
    }
}

</script>

<template>
  <header><h1>{{titulo}}</h1></header>
  


  <footer><GitHub></GitHub></footer>
</template>

<style scoped>
h1{text-align: center;}
header{background-color: aqua;}
</style>
