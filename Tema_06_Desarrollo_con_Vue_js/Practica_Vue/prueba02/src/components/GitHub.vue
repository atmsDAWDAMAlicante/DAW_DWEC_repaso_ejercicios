<script>

import GitHubRepo from './GitHubRepo.vue';

export default {
    name: "ComponenteGitHub",
    components:{
    GitHubRepo
    },
    data(){
        return{
            // Pruebas y botones
            prueba: "Hola",
            introducido: "",
            primeraVez:true,
            usuarioErroneo: true,
            verRepos: false,

            // Urls
            usuario: "",
            urlGitHub: "https://api.github.com/users/",
            urlCompletaUsuario: "",
            repos:[],

            // Usuario
            login:"",
            avatar_url:"",
            html_url:"",
            repos_url:""
        }
    },
    methods:{
        borrarConsola(){
            console.clear();
        },
        borrarInput(){
            introUsuario.value = ""
        }, 
        obtenerUsuario(){
            this.primeraVez=false;
            this.verRepos=false;
            this.urlCompletaUsuario = `${this.urlGitHub}${this.usuario}`
            console.log(`${this.urlCompletaUsuario}`);
            fetch(this.urlCompletaUsuario)
            .then((response)=>{
                if(response.status!=200){
                    this.usuarioErroneo=true;
                    console.log(`ERROR: ${response.status}-El usuario no existe`)
                } else {
                    this.usuarioErroneo=false;
                    console.log(`Usuario correcto: ${response.status}`)
                    return response.json();
                }
            }).then((data)=>{
                this.login=data.login;
                this.avatar_url=data.avatar_url;
                this.html_url=data.html_url;
                this.repos_url=data.repos_url;
                console.log(data.repos_url)
            }).catch(error=> console.log(`Se ha producido un error: ${error}`))
        }, obtenerRepos(){
            console.log("Obtener Repos")
            this.verRepos=true;
            fetch(this.repos_url)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                this.repos=data
            })
        }
        
    }
}

</script>


<template>
    <main class="container">
        <div class="row">
            <div class="col col-8" id="divTextoInput">
                <input type="text" id="introUsuario" class="form-control" 
                @keydown.enter="obtenerUsuario" v-model="usuario">
            </div>
            <div class="col col-3">
                <button type="button" class="btn btn-primary" @click="borrarConsola">#Consola</button>
                <button type="button" class="btn btn-warning" @click="borrarInput" :value="introducido">#Input</button>
            </div>
        </div>


        <div class="container" v-if="primeraVez==false">
            <div class="row" v-if="usuarioErroneo == true">
                <div class="alert alert-danger" role="alert">
                    El usuario {{ usuario }} no existe.
                </div>
            </div>
            <div class="row" v-else>
                <div class="card col col-4" style="width: 18rem;">
                    <img :src="avatar_url" class="card-img-top" alt="El avatar">
                    <div class="card-body">
                        <h5 class="card-title">{{login}}</h5>
                        <p class="card-text"><a :href="html_url" target="_blank">{{ html_url }}</a></p>
                        <button @click="obtenerRepos" class="btn btn-primary">Ver repositorios</button>
                    </div>
                    </div>
                <div class="col col-6" v-if="verRepos==true">
                    <div v-for="cadaRepo in repos" :key="`${repos.id}`">
                        <GitHubRepo :repo="cadaRepo"></GitHubRepo>
                    </div>
                </div>
            </div>
        </div>

      




    </main>



</template>

<style scoped>
main, .prueba{color:yellow;margin-top:30px;}
#divTextoInput{margin: 0 20px 0 10px; }
#introUsuario{color:blue;border:rgb(0, 149, 199) 4px solid}
p, h5{color:black}
button{margin-right: 20px;}
#divEstadoCarga{background-color: rgb(251, 211, 211);border: 1px solid rgb(205, 68, 68);}
#divUsuario{background-color: rgb(207, 228, 248);border: 2px solid blue;}
</style>