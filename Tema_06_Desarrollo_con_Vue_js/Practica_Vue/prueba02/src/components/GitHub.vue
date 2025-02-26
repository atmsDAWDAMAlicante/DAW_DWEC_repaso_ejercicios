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

            // Url y usuarios
            usuario: "",
            urlGitHub: `https://api.github.com/users/`
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
        }, 
        async validarUsuario(){
            // Cambiar primera vez
            if(this.primeraVez){
                this.primeraVez = !this.primeraVez
                console.log(this.primeraVez)
                }

            console.log(`URL GitHub: ${this.urlGitHub}${this.usuario}`)
            let response;
            try{ 
            response = await fetch(`${this.urlGitHub}${this.usuario}`)
            //console.log(response)
            if(response.status!=200){
                console.log(`Usuario desconocido: error ${response.status}`)
                this.usuarioErroneo=true;
            } else {
                this.usuarioErroneo=false;
                let data = response.json()
                console.log(`Usuario correcto: ${response.status}`)
            }
            } catch (error) {
                console.log(error.message)
                if (response){
                    console.log(`Status: ${response.status}`)
                }
            }
        }

        
    }
}

</script>


<template>
    <main class="container">
        <div class="row">
            <div class="col col-8" id="divTextoInput">
                <input type="text"  v-model="usuario" id="introUsuario" class="form-control" 
                @keydown.enter="validarUsuario">
            </div>
            <div class="col col-3">
                <button type="button" class="btn btn-primary" @click="borrarConsola">Borrar consola</button>
                <button type="button" class="btn btn-warning" @click="borrarInput" :value="introducido">#</button>
            </div>
        </div>

        <div class="container" v-if="primeraVez == false">
            <div class="row">
                <div v-if="usuarioErroneo==true" class="col cols 9" id="divEstadoCarga">
                    <p>error {{ recibido1 }} {{ usuario }}</p>
                </div>
                <div v-else class="col cols 9" id="divUsuario">
                    <p>correcto {{ recibido1 }} {{ usuario }}</p>
                </div>
                <div class="col cols 4">
                    <GitHubRepo :recibido2="prueba"></GitHubRepo>
                </div>
            </div>
        </div>




    </main>



</template>

<style scoped>
main{color:yellow;margin-top:30px;}
#divTextoInput{margin: 0 20px 0 10px; }
#introUsuario{color:blue;border:rgb(0, 149, 199) 4px solid}
p{color:black}
button{margin-right: 20px;}
#divEstadoCarga{background-color: rgb(251, 211, 211);border: 1px solid rgb(205, 68, 68);}
#divUsuario{background-color: rgb(207, 228, 248);border: 2px solid blue;}
</style>