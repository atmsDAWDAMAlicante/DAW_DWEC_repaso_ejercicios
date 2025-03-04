<script>
import GitHubRepo from './GitHubRepo.vue';

export default {
    name:"componenteGitHub",
    components:{
        GitHubRepo
    },
    data(){
        return{
            titulo:"GitHub",
            temandounprop:"Te mando un prop"
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
  <header><h1>{{titulo}}</h1></header>

<footer><GitHubRepo :repo="temandounprop"></GitHubRepo></footer>

</template>

<style scoped>


</style>