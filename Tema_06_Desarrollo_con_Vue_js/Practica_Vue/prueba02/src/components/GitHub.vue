<script>

import GitHubRepo from './GitHubRepo.vue';

export default {
    name: "aa",
    components:{
    GitHubRepo
    },
    data(){
        return{
            prueba: "Hola"
        }
    },
    props:[
        "recibido1"
    ],
    methods:{

    }
}

</script>


<template>
    <main>
        {{ recibido1 }}
    </main>

    <GitHubRepo :recibido2="prueba"></GitHubRepo>

</template>

<style scoped>
main{color:yellow;}

</style>