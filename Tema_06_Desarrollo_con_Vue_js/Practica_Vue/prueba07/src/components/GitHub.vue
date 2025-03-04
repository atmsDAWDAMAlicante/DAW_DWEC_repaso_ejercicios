<script>
import GitHubRepo from './GitHubRepo.vue';

export default {
    name:"componenteGitHub",
    components:{
        GitHubRepo
    },
    data(){
        return{
            // pruebas
            titulo:"GitHub",
            temandounprop:"Te mando un prop",

            // Variables para el display
            primeraVez:true,
            usuarioExistente:true,
            reposVisibles:false,

            // Variables para formar las URL
            urlBasica:"http://api.github.com/users/",
            usuario:"",
            urlCompleta:"",
            login:"",
            avatar_url:"",
            html_url:"",
            repos:[]
        }
    },
    methods:{
        borrarConsola(){
            console.clear();
        },
        borrarInput(){
            this.usuario="";
        },
        obtenerUsuario(){
            this.primeraVez = false;
            console.log("Vamos" + this.usuario);
        }
    }
}

</script>

<template>

<main class="container">
    <div class="row">
        <div class="col col-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                v-model="usuario" @keydown.enter="obtenerUsuario">  
            </div>
        </div>
        <div class="col col-1">
            <button @click="borrarConsola" class="btn btn-danger">#</button>
        </div>
        <div class="col col-1">
            <button @click="borrarInput" class="btn btn-success">@</button>
        </div>
    </div>
</main>

<div v-if="primeraVez==false">
    <div class="row">
        <div class="col col-2">&nbsp;</div>
        <div class="col col-8 alert alert-danger" role="alert">
            El usuario {{ usuario }} no existe.
        </div>
    </div>

    <div class="row">

        
    </div>


</div>




<footer><GitHubRepo :repo="temandounprop"></GitHubRepo></footer>

</template>

<style scoped>
input{width: 200px;}
</style>