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
  <header><h1>{{repo}}</h1></header>
  
</template>

<style scoped>


</style>