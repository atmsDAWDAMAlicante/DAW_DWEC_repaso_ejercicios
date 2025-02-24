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
        borrarConsola(){
            console.clear();
        }
    }
}

</script>


<template>
    <main class="container-fluid">
        <div class="row">
            <div class="col" id="divTextoInput">
                <input type="text" id="introUsuario" class="form-control">
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary" @click="borrarConsola">Borrar consola</button>
            </div>
        </div>
    </main>

    <GitHubRepo :recibido2="prueba"></GitHubRepo>

</template>

<style scoped>
main{color:yellow;margin-top:30px;}
#divTextoInput{margin-left:50px;margin-right: 200px;width: 800px;border:yellow 1px solid}
#introUsuario{width: 800px;font-weight: bold;color:red;}
</style>