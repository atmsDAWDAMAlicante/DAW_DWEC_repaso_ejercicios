<script>

export default {
    name:"componenteCabecera",
    data(){
        
        return{
            urlCompleta: "",
            urlParteFija: "https://api.github.com/users/",
            urlUsuario: "",
            urlRepos:"/repos",
            mostrar: false,
            primeraVez: true
            
        }
    },
    props:[
        "unProp"
    ],
    methods:{
        borrarConsola(){
            console.clear();
        },
        llamadaGitHub(){
            this.primeraVez=false;
            // Formación de la URL
            this.urlCompleta = new URL(`${this.urlParteFija}${this.urlUsuario}`)
            console.log(`Se llama a la URL: ${this.urlCompleta}`)

            // Fetch
            fetch(`${this.urlCompleta}`)
            .then((response)=>{
                
                if(response.status !=200){
                    this.mostrar = false;
                    console.log(`Usuario inexistente: error ${response.status}`);
                } else {
                    console.log(`Usuario OK: ${response.status}`);
                    this.mostrar = true;
                    return response.json();
                }
            }).then((data)=>{

            })

        }
    }
}

</script>

<template>
<main>
    <input type="text" v-model="urlUsuario" @keydown.enter="llamadaGitHub">
    <button @click="borrarConsola">Borrar consola</button>
    <div><p>{{unProp}}</p>
    <p>{{ urlParteFija }}{{ urlUsuario }}{{ urlRepos }}</p>
    </div>
    <template v-if="primeraVez == false">
    <div v-if="mostrar == true" class="usuarioExistente">
        El usuario {{ urlUsuario }} SÍ existe.

    </div>
    <div v-else class="usuarioInexistente">
        El usuario {{ urlUsuario }} NO existe.
    </div>
</template>
  </main>
</template>

<style scoped>
header, p{color:black;}

.usuarioInexistente{
    border: 1px solid red;
    background-color: rgb(248, 228, 228);
    color: red;
    font-weight: bold;
}

.usuarioExistente{
    border: 1px solid blue;
    background-color: rgb(229, 251, 255);
    color: blue;
    font-weight: bold;
}

</style>