<script>
import SeguidorGitHub from './components/SeguidorGitHub.vue';
export default {
    name:"Principal",
    components:{
        SeguidorGitHub
    },
    data(){
        return{
            // Variables iniciales y de prueba
            titulo:"Buscar un usuario de GitHub",

            // Variables del display
            primeraVez: true,
            usuarioExistente: false,

            // Variables para las URL y GitHub
            urlBasica: "https://api.github.com/users/",
            usuario: "",
            urlCompleta: "",
            seguidores: "",
            login:"",
            avatar_url:"",
            html_url:""

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
            this.primeraVez=false;
            console.log("Hola "+this.usuario);

            // fetch
            this.urlCompleta = `${this.urlBasica}${this.usuario}/followers`
            fetch(this.urlCompleta)
            .then((response)=>{
                if(response.status!=200){
                    this.usuarioExistente = false;
                    console.log(`Usuario inexistente: ${response.status}`);
                    return;
                } else {
                    this.usuarioExistente = true;
                    console.log(`El Usuario existe: ${response.status}`);
                    return response.json();
                    
                }
            })
            .then((data)=>{
                //console.log(data)
                this.seguidores = data

                //console.log(this.seguidores)
            })
            .catch((error)=>console.log("ERROR: " + error))
            
        }
    }
}


</script>

<template>
  <header>
    <h1>{{ titulo }}</h1>
  </header>


<main class="container">
    <div class="row">
        <div class="col col-6">
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                v-model="usuario" @keydown.enter="obtenerUsuario"> 
                <span class="input-group-text" id="basic-addon1">@</span>
            </div>
        </div>
        <div class="col col-1">
            <button class="btn btn-danger" @click="borrarConsola">#</button>
        </div>
        <div class="col col-1">
            <button class="btn btn-success" @click="borrarInput">@</button> 
        </div>
    </div>
    <div class="container" v-if="primeraVez==false">
        <div class="row" v-if="usuarioExistente==false">
            <div class="alert alert-danger" role="alert">
                Usuario {{usuario}} inexistente.
            </div>
        </div>

        <div class="row" v-else>
            <div class="alert alert-primary" role="alert">
                Usuario {{usuario}} existente.
            </div>
            <div v-for="unSeguidor in seguidores" :key="unSeguidor.id" class="col col-4">
                <SeguidorGitHub :cadaSeguidor="unSeguidor"></SeguidorGitHub>
            </div>
        </div>
    </div>
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
