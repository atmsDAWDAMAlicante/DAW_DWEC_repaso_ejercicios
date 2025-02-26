<script>

import GitHubRepo from './GitHubRepo.vue';

export default {
    name: "ComponenteGitHub",
    components:{
    GitHubRepo
    },
    data(){
        return{
            prueba: "Hola",
            introducido: ""
        }
    },
    props:[
        "recibido1"
    ],
    methods:{
        borrarConsola(){
            console.clear();
        },
        borrarInput(){
            introUsuario.value = ""
        }
    }
}

</script>


<template>
    <main class="container">
        <div class="row">
            <div class="col col-8" id="divTextoInput">
                <input type="text" id="introUsuario" class="form-control">
            </div>
            <div class="col col-3">
                <button type="button" class="btn btn-primary" @click="borrarConsola">Borrar consola</button>
                <button type="button" class="btn btn-warning" @click="borrarInput" :value="introducido">#</button>
            </div>
        </div>
    </main>
    <p>{{ recibido1 }}</p>
    <GitHubRepo :recibido2="prueba"></GitHubRepo>

</template>

<style scoped>
main{color:yellow;margin-top:30px;}
#divTextoInput{margin: 0 20px 0 10px; }
#introUsuario{color:blue;border:rgb(0, 149, 199) 4px solid}
p{color:white}
button{margin-right: 20px;}
</style>